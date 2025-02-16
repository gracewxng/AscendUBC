'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";

const NAV_ITEMS = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Join us', href: '/join' },
    { name: 'Partnerships', href: '/' },
    { name: 'Contact us', href: '/contact' },
    // { name: 'FAQs', href: '/' },
    // { name: 'Login', href: '/' },
  ];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("https://formspree.io/f/xanqlyap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/ascend.png" alt="Ascend UBC" width={150} height={100} className="cursor-pointer" />
          </Link>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[400px]">
        <Image 
          src="/ubc.jpg"
          alt="Vancouver Skyline"
          layout="fill"
          objectFit="cover"
          className="brightness-75 opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="relative w-full py-16 px-6">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white bg-opacity-80 p-8 rounded-xl shadow-lg">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-black">Contact Us</h2>
            <div className="w-16 h-0.5 bg-black my-2"></div>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-black">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border-b border-black bg-transparent outline-none py-2 text-black" />
                </div>
                <div className="flex-1">
                  <label className="block text-black">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border-b border-black bg-transparent outline-none py-2 text-black" />
                </div>
              </div>

              <div>
                <label className="block text-black">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border-b border-black bg-transparent outline-none py-2 text-black" />
              </div>

              <div>
                <label className="block text-black">Write a message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full border-b border-black bg-transparent outline-none py-2 h-24 text-black"></textarea>
              </div>

              <button type="submit" className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800">Send Message</button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="text-black">
            <h2 className="text-3xl font-bold text-black text-center">Social Media</h2>
            <p className="mt-4 text-xl text-center">Email: ascendubc@gmail.com</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-4 pt-6">
              <a href="#"><Image src="/facebook.png" alt="Facebook" width={50} height={50} /></a>
              <a href="#"><Image src="/instagram.png" alt="Instagram" width={50} height={50} /></a>
              <a href="#"><Image src="/linkedin.png" alt="LinkedIn" width={50} height={50} /></a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
