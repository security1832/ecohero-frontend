import { Link, useContext, useState } from "react";
import { ThemeContext } from "../App";
import { FaBell } from "react-icons/fa";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">EcoHero</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/challenges" className="hover:underline">
              Challenges
            </Link>
          </li>
          <li>
            <Link to="/reels" className="hover:underline">
              Reels
            </Link>
          </li>
          <li>
            <Link to="/live" className="hover:underline">
              Live
            </Link>
          </li>
          <li>
            <Link to="/stories" className="hover:underline">
              Stories
            </Link>
          </li>
          <li>
            <Link to="/chat" className="hover:underline">
              Chat
            </Link>
          </li>
          <li>
            <Link to="/player" className="hover:underline">
              Player
            </Link>
          </li>
          <li>
            <Link to="/market" className="hover:underline">
              Market
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/calculator" className="hover:underline">
              Calculator
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="hover:underline">
              <FaBell className="inline" />
            </Link>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white text-green-600"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;