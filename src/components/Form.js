import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Sylvia",
    lastName: "Woods",
    email: "",
    age: "",
    admin: false,
  });

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} placeholder="First Name" />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} placeholder="Last Name" />
      <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
      <input type="number" name="age" onChange={handleChange} value={formData.age} placeholder="Age" />
      <label>
        Admin:
        <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
