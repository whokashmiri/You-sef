import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import Header from "./Header";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);

    // Dummy EmailJS credentials (replace with your own)
    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const USER_ID = "your_public_key";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setForm({ name: "", phone: "", email: "", message: "" });
          setSending(false);
          console.log(response);
          
        },
        (error) => {
          toast.error("Failed to send the message. Please try again.");
          setSending(false);
          console.log(error);
          
        }
      );
  };

  return (
    <>
    <Header/>
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* React Hot Toast container */}
      <Toaster position="top-right" />

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="https://videos.pexels.com/video-files/5106444/5106444-hd_1920_1080_25fps.mp4"
        type="video/mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 bg-opacity-60"></div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 mt-32 bg-black/20 bg-opacity-90  px-5 py-4 max-w-2xl w-full shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Contact Us</h2>

        <p className="text-white">Personal Information
</p>
        <p  className="text-white mb-5">Information we need to process your inquiry in an effective way.

</p>

        <label className="block mb-2 text-white  font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter Your Name"
          onChange={handleChange}
          required
          className="w-full mb-4 px-5 py-4 border text-white focus:outline-none focus:ring-2 focus:ring-black"
        />

        <label className="block mb-2 font-white text-white  font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full mb-4 px-5 py-4 border text-white focus:outline-none focus:ring-2 focus:ring-black"
        />

        <label className="block mb-2 text-white  font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4  px-5 py-4  border text-white  focus:outline-none focus:ring-2 focus:ring-black"
        />

        <label className="block mb-2 text-white  font-medium">Message</label>
        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full mb-6  border  px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />

        <button
          type="submit"
          disabled={sending}
          className={`w-full py-3  font-semibold transition ${
            sending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-700 text-white"
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
    <NewsletterSection/>
    <Footer/>
    </>
  );
}
