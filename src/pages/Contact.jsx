import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n8bfpcj",
      "your_template_id",
      form.current,
      "your_public_key"
    ).then(
      () => setSent(true),
      (error) => console.error(error)
    );
  };

  return (
    <div className="py-16 px-4 max-w-xl mx-auto text-white">
      <h2 className="text-3xl font-bold text-primary mb-6">Contact Me</h2>
      {sent ? (
        <p className="text-accent text-lg">✅ Message sent successfully!</p>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input name="name" type="text" placeholder="Your Name" className="w-full p-3 rounded bg-card" required />
          <input name="email" type="email" placeholder="Your Email" className="w-full p-3 rounded bg-card" required />
          <textarea name="message" placeholder="Your Message" rows="5" className="w-full p-3 rounded bg-card" required />
          <button type="submit" className="bg-primary text-black px-6 py-2 rounded hover:bg-accent transition">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
