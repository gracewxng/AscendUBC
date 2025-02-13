'use client';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
    { name: 'Events', href: '/events' },
    { name: 'Join us', href: '/' },
    { name: 'Contact us', href: '/' },
    { name: 'FAQs', href: '/' },
    { name: 'Login', href: '/' },
  ];

export default function Events() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
          {/* Navigation Bar */}
          <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image src="/ascend.png" alt="Ascend UBC" width={40} height={40} />
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
          src="/vancouver.jpg"
          alt="Vancouver Skyline"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Upcoming Events</h1>
        </div>
      </header>

      {/* Event Filter Buttons */}
      <section className="text-center py-6">
        <div className="inline-flex space-x-3">
          <button className="px-4 py-2 bg-yellow-400 text-white rounded-full">All</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full">Networking</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full">Workshop</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full">Panel</button>
        </div>
      </section>

      {/* Events List */}
      <section className="px-6 py-8">
        {[1, 2, 3].map((event, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 max-w-3xl mx-auto flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Professional Networking Night</h3>
            <div className="flex justify-between items-center text-gray-600">
              <span>📅 2025-02-15 | 6:00 PM - 8:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-600">
                <span>📍 UBC Nest 2201</span>
              </div>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-full">Apply</button>
              <span className="flex items-center space-x-1 text-gray-600">👥 15 Spots Left</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
