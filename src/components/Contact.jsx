import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form>
        <label for="fullName">Name:</label>
        <input type="text" name="fullName"></input>
        <label for="email">Email:</label>
        <input type="email" name="email"></input>
      </form>
    </div>
  );
}

export default Contact;
