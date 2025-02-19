'use client';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Join us', href: '/join' },
  { name: 'Partnerships', href: '/' },
  { name: 'Contact us', href: '/contact' },
  // { name: 'FAQs', href: '/' },
  // { name: 'Login', href: '/' },
];

export default function Events() {
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
          <h1 className="text-4xl font-bold">Upcoming Events</h1>
        </div>
      </header>

      {/* Events List */}
      <section className="px-6 py-8">
        {[1, 2, 3].map((event, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 max-w-3xl mx-auto flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-black">Professional Networking Night</h3>
            <div className="flex justify-between items-center text-gray-600">
              <span>📅 2025-02-15 | 6:00 PM - 8:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-600">
                <span>📍 UBC Nest 2201</span>
              </div>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-full">Register</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
