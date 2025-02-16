'use client';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'Events', href: '/events' },
  { name: 'Join us', href: '/' },
  { name: 'Partnerships', href: '/' },
  { name: 'Contact us', href: '/contact' },
  // { name: 'FAQs', href: '/' },
  // { name: 'Login', href: '/' },
];

export default function Home() {
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
          src="/vancouver.jpg"
          alt="Vancouver Skyline"
          layout="fill"
          objectFit="cover"
          className="brightness-75 opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold">Connect<br /> Inspire, <span className="text-orange-500">Ascend</span></h1>
        </div>
      </header>

      

      {/* What is Ascend */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-black text-center">What is Ascend</h2>

        <div className="mt-8 flex flex-col md:flex-row items-center md:items-start md:justify-center space-y-4 md:space-y-0 md:space-x-12">
        {/* Left Side - Buttons */}
          <div className="flex flex-col space-y-4">
            <span className="px-6 py-3 bg-orange-400 text-white font-semibold rounded-full text-lg shadow-md w-48 text-center">Network</span>
            <span className="px-6 py-3 bg-orange-300 text-white font-semibold rounded-full text-lg shadow-md w-48 text-center">Leadership</span>
            <span className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-full text-lg shadow-md w-48 text-center">Development</span>
          </div>
        {/* Right Side - Description */}
          <div className="max-w-lg text-left text-gray-600">
            <p>
              This will be a blurb about who we are. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.
            </p>
          </div>
        </div>
      </section>


      {/* Why Join */}
<section className="py-16 bg-gray-100 text-center px-6">
  <h2 className="text-3xl font-bold text-black">Why Join</h2>

  <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
    {/* Card 1 - Internship Opportunities */}
    <div className="bg-gray-200 rounded-2xl p-6 shadow-md max-w-sm flex flex-col items-center">
      <h3 className="font-semibold text-lg text-black">INTERNSHIP OPPORTUNITIES</h3>
      <div className="w-10 h-0.5 bg-black my-2"></div>
      <p className="text-gray-700 text-sm text-center">
        This will be a blurb about who we are. blah blah blah blah blah
        blah blah blah blah blah blah blah blah ah blah blah blah
        blah blah blah blah.
      </p>
      <a href="#" className="text-black mt-4 inline-flex items-center space-x-1">
        <span>learn more</span>
        <span>→</span>
      </a>
    </div>

    {/* Card 2 - Networking Opportunities */}
    <div className="bg-gray-200 rounded-2xl p-6 shadow-md max-w-sm flex flex-col items-center">
      <h3 className="font-semibold text-lg text-black">NETWORKING OPPORTUNITIES</h3>
      <div className="w-10 h-0.5 bg-black my-2"></div>
      <p className="text-gray-700 text-sm text-center">
        This will be a blurb about who we are. blah blah blah blah blah
        blah blah blah blah blah blah blah blah ah blah blah blah
        blah blah blah blah.
      </p>
      <a href="#" className="text-black mt-4 inline-flex items-center space-x-1">
        <span>learn more</span>
        <span>→</span>
      </a>
    </div>

    {/* Card 3 - Mentorship Opportunities */}
    <div className="bg-gray-200 rounded-2xl p-6 shadow-md max-w-sm flex flex-col items-center">
      <h3 className="font-semibold text-lg text-black">MENTORSHIP OPPORTUNITIES</h3>
      <div className="w-10 h-0.5 bg-black my-2"></div>
      <p className="text-gray-700 text-sm text-center">
        This will be a blurb about who we are. blah blah blah blah blah
        blah blah blah blah blah blah blah blah ah blah blah blah
        blah blah blah blah.
      </p>
      <a href="#" className="text-black mt-4 inline-flex items-center space-x-1">
        <span>learn more</span>
        <span>→</span>
      </a>
    </div>
  </div>

  {/* Icons Row with Circles */}
  <div className="flex justify-center gap-12 mt-8">
    <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center">
      <Image src="/briefcase.png" alt="Internship Icon" width={40} height={40} />
    </div>
    <div className="w-20 h-20 bg-orange-300 rounded-full flex items-center justify-center">
      <Image src="/group.png" alt="Networking Icon" width={40} height={40} />
    </div>
    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
      <Image src="/star.png" alt="Mentorship Icon" width={40} height={40} />
    </div>
  </div>
  </section>

      {/* Stay in Touch Section */}
      <section id="contact" className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-black">Stay in Touch</h2>
            <h3 className="font-semibold text-gray-600 pt-6">Socials</h3>
            <p className="text-gray-600 pt-4">ascendubc@gmail.com</p>
            <div className="flex justify-center space-x-8 mt-4">
              <a href="#"><Image src="/instagram.png" alt="Instagram" width={50} height={50} /></a>
              <a href="#"><Image src="/facebook.png" alt="Facebook" width={50} height={50} /></a>
              <a href="#"><Image src="/linkedin.png" alt="LinkedIn" width={50} height={50} /></a>
            </div>
      </section>
    </div>
  );
}
