import { useState } from 'react';

const initialData = {
  title: '',
  description: '',
  date: '',
};

export default function TaskForm() {
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Data:', form);
    setForm(initialData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Görev Ekleme Formu</h2>

      <div>
        <label htmlFor="title">Başlık</label>
        <br />
        <input
          id="title"
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>

      <br />

      <div>
        <label htmlFor="description">Açıklama</label>
        <br />
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <br />

      <div>
        <label htmlFor="date">Tarih</label>
        <br />
        <input
          id="date"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>

      <br />

      <button type="submit">Kaydet</button>
    </form>
  );
}
