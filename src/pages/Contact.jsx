import React, { useState } from "react";

function Contact({ sendData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    sendData({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="container mt-4">
      <h2>Contact Form</h2>

      <input
        className="form-control mb-2"
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-2"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Contact;
