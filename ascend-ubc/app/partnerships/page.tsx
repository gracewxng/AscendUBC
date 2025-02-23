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

export default function Partnerships() {
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
          alt="Our Partnerships"
          layout="fill"
          objectFit="cover"
          className="brightness-75 opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Our Corporate Partners</h1>
        </div>
      </header>

      {/* Partnerships Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Who We Work With</h2>
        <p className="text-gray-600 mt-4">We are proud to collaborate with industry-leading companies and organizations.</p>
        <div className="mt-8 flex justify-center">
          <Image 
            src="/partners.png" 
            alt="Corporate Partners" 
            width={800} 
            height={1200} 
            className="rounded-lg shadow-lg" 
          />
        </div>
      </section>
    </div>
  );
}
