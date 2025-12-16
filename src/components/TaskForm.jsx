import { useState } from 'react';

export default function TaskFormManual() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const [errors, setErrors] = useState({});
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title) {
      newErrors.title = 'Lütfen görev başlığını girin';
    } else if (formData.title.length < 5) {
      newErrors.title = 'Görev başlığı en az 5 karakter olmalıdır';
    }

    if (!formData.description) {
      newErrors.description = 'Lütfen görev açıklamasını girin';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    toast.success('Formunu başarıyla gönderildi!');
    setTasks((prev) => [...prev, formData]);
    setFormData({
      title: '',
      description: '',
      date: '',
    });
    setErrors({});
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-xl font-bold mb-4">Görev Ekleme Formu</h2>

        <div className="mb-1">
          <label htmlFor="title">Başlık</label>
          <br />
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Görev başlığı"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <br />

        <div className="mb-1">
          <label htmlFor="description">Açıklama</label>
          <br />
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Görev açıklaması"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <br />

        <div className="mb-1">
          <label htmlFor="date">Tarih</label>
          <br />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
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
      {tasks.length === 0 ? (
        <p className="text-gray-500">Henüz eklenmiş bir görev yok!</p>
      ) : (
        <div>
          {tasks.map((item, index) => (
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
