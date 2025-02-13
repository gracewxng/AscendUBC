'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/ascend.png" alt="Ascend UBC" width={150} height={150} />
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Events</a></li>
          <li><a href="#" className="hover:text-orange-500">Join us</a></li>
          <li><a href="#" className="hover:text-orange-500">Contact us</a></li>
          <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
          <li><a href="#" className="hover:text-orange-500">Login</a></li>
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
          <h1 className="text-4xl font-bold">Connect<br /> Inspire, <span className="text-orange-500">Ascend</span></h1>
        </div>
      </header>

      {/* What is Ascend */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-bold">What is Ascend</h2>
        <div className="flex justify-center space-x-4 my-6">
          <span className="px-6 py-2 bg-yellow-400 text-white rounded-full">Network</span>
          <span className="px-6 py-2 bg-orange-400 text-white rounded-full">Leadership</span>
          <span className="px-6 py-2 bg-red-400 text-white rounded-full">Development</span>
        </div>
        <p className="max-w-3xl mx-auto text-gray-600">This will be a blurb about who we are. Blah blah blah blah blah...</p>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold">Why Join</h2>
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
            <h3 className="font-semibold">INTERNSHIP OPPORTUNITIES</h3>
            <p className="text-gray-600">Blah blah blah about internships...</p>
            <a href="#" className="text-orange-500 mt-2 inline-block">Learn more →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
            <h3 className="font-semibold">NETWORKING OPPORTUNITIES</h3>
            <p className="text-gray-600">Blah blah blah about networking...</p>
            <a href="#" className="text-orange-500 mt-2 inline-block">Learn more →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
            <h3 className="font-semibold">MENTORSHIP OPPORTUNITIES</h3>
            <p className="text-gray-600">Blah blah blah about mentorship...</p>
            <a href="#" className="text-orange-500 mt-2 inline-block">Learn more →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
