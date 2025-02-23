'use client';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Join us', href: '/join' },
  { name: 'Partnerships', href: '/partnerships' },
  { name: 'Contact us', href: '/contact' },
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
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 max-w-3xl mx-auto flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-black">Recruitment Roundtables</h3>
          <p className="text-gray-600">Network face-to-face with recruiters and industry professionals from leading firms.</p>
          <div className="flex justify-between items-center text-gray-600">
            <span>📅 Thursday, March 13 | 5:30 PM - 7:30 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>📍 Deloitte Summit Vancouver, 410 W Georgia St</span>
            </div>
            <a href="https://www.eventbrite.ca/e/recruitment-roundtables-2025-vancouver-tickets-1230532228019?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-full">Register</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}