import React, { useState } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-5 grid gap-10 md:grid-cols-2">
        {/* Info Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Have questions or suggestions? Reach out to us and we’ll respond as
            quickly as possible.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-2 text-gray-700">
              <MdLocationOn className="text-primary text-xl" /> Baridhara, Dhaka 1212, Bangladesh
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <MdEmail className="text-blue-500 text-xl" /> support@plateshare.com
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <MdPhone className="text-green-600 text-xl" /> +880 1700000000
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
            ></textarea>
            <button
              type="submit"
              className="btn bg-primary text-white w-full hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
