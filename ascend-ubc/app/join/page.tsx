'use client';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Join us', href: '/join' },
  { name: 'Partnerships', href: '/partnerships' },
  { name: 'Contact us', href: '/contact' },
  // { name: 'FAQs', href: '/' },
  // { name: 'Login', href: '/' },
];

export default function Join() {
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
          alt="Join Ascend UBC"
          layout="fill"
          objectFit="cover"
          className="brightness-75 opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Join Ascend UBC</h1>
        </div>
      </header>

      {/* Membership Benefits Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Why Join Us?</h2>
        <p className="text-gray-600 mt-4">Here’s what you gain as a member of Ascend UBC:</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/networking.png" alt="Networking" width={50} height={50} className="mx-auto" />
            <h3 className="font-semibold text-lg mt-4 text-black">Networking Events</h3>
            <p className="text-gray-600 mt-2">Connect with professionals and like-minded individuals at exclusive events.</p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/mentorship.png" alt="Mentorship" width={50} height={50} className="mx-auto" />
            <h3 className="font-semibold text-lg mt-4 text-black">Mentorship</h3>
            <p className="text-gray-600 mt-2">Get guidance from experienced mentors to help with your career journey.</p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/career.png" alt="Career Growth" width={50} height={50} className="mx-auto" />
            <h3 className="font-semibold text-lg mt-4 text-black">Career Growth</h3>
            <p className="text-gray-600 mt-2">Gain access to internships, job postings, and skill-building workshops.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section - General Membership */}
      <section className="py-16 bg-gray-200 text-center px-6">
        <h2 className="text-3xl font-bold text-black">Become a Member</h2>
        <p className="text-gray-600 mt-2">Sign up today and take the first step towards professional growth.</p>
        <a href="https://your-signup-form.com" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg hover:bg-orange-600 transition">
            Join Now
          </button>
        </a>
      </section>

      {/* Apply to Be an Executive Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Open Executive Positions</h2>
        <p className="text-gray-600 mt-2">
          Looking for leadership opportunities? Join our executive team and help shape the future of Ascend UBC.
        </p>

        {/* Executive Application Button */}
        <a href="https://your-exec-application.com" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-lg hover:bg-yellow-600 transition">
            Apply Now
          </button>
        </a>
      </section>
    </div>
  );
}
