import { set, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useReducer } from 'react';
import { initialState, taskReducer } from '../reducer/taskReducer';


export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

const initialData = {
  title: '',
  description: '',
  date: '',
};

export default function TaskFormRHF() {
  //const [tasks, setTasks] = useLocalStorage('gorevler', []);

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
    mode: 'all',
  });

  const customHandleSubmit = (data) => {
    toast.success('Formunu başarıyla gönderildi!');

    data.id = Math.ceil(Math.random() * 100 + 1);

    dispatch({
      type: ADD_TASK,
      payload: data
    })

    //setTasks((currentState) => [...currentState, data]);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(customHandleSubmit)}
        className="p-4 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-xl font-bold mb-4">Görev Ekleme Formu</h2>

        <div className="mb-1">
          <label htmlFor="title">Başlık</label>
          <br />
          <input
            className="w-full p-2 border rounded"
            type="text"
            {...register('title', {
              required: 'Lütfen görev başlığını girin',
              minLength: {
                value: 5,
                message: 'Görev başlığı en az 5 karakter olmalıdır',
              },
            })}
            placeholder="Görev başlığı"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <br />

        <div className="mb-1">
          <label htmlFor="description">Açıklama</label>
          <br />
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            {...register('description', {
              required: 'Lütfen görev başlığını girin',
            })}
            placeholder={'Görev açıklaması'}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <br />

        <div className="mb-1">
          <label htmlFor="date">Tarih</label>
          <br />
          <input
            type="date"
            {...register('date')}
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <br />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Kaydet
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4 mt-4">Görevler</h2>
      {state.tasks.length === 0 ? (
        <p className="text-gray-500">Henüz eklenmiş bir görev yok!</p>
      ) : (
        <div>
          {state.tasks.map((item, index) => (
            <h3
              key={index}
              className="p-2 font-bold text-lg border rounded-lg shadow-sm bg-gray-50 mb-3"
            >
              {item.title}
            </h3>
          ))}
        </div>
      )}
    </>
  );
}
