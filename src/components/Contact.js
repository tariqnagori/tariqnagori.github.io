import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Telephone:
          <input
            type="text"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
