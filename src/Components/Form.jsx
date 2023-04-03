import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes validar los campos del formulario y enviar los datos si todo es válido.
    const errors = {};
    if (!name.trim()) {
      errors.name = "Por favor, ingresa tu nombre.";
    }
    if (!email.trim()) {
      errors.email = "Por favor, ingresa tu dirección de correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)) {
      errors.email = "Por favor, ingresa una dirección de correo electrónico válida.";
    }
    if (!message.trim()) {
      errors.message = "Por favor, ingresa un mensaje.";
    }
    if (Object.keys(errors).length === 0) {
      console.log("Enviar datos del formulario");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Nombre:</label>
          <br/>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br/>
          {errors.name && <span>{errors.name}</span>}
        </div>
        <br/>
        <br/>
        <div>
          <label >Correo electrónico:</label>
          <br/>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
         <br/>
          {errors.email && <span>{errors.email}</span>}
        </div>
        <br/>
        <br/>
        <div>
          <label >Mensaje:</label>
          <br/>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <br/>
          {errors.message && <span>{errors.message}</span>}
        </div>
        <br/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
