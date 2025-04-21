import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">EcoHero</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li><a href="#home" className="text-white hover:text-green-200">Home</a></li>
          <li><a href="#about" className="text-white hover:text-green-200">About</a></li>
          <li><a href="#tips" className="text-white hover:text-green-200">Tips</a></li>
          <li><a href="#calculator" className="text-white hover:text-green-200">Calculator</a></li>
          <li><a href="#pledge" className="text-white hover:text-green-200">Pledge</a></li>
          <li><a href="#community" className="text-white hover:text-green-200">Community</a></li>
          <li><a href="#contact" className="text-white hover:text-green-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;