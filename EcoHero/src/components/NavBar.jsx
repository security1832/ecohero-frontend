import { Link, useContext } from "react-router-dom";
import { ThemeContext } from "../App";
import { FaBell } from "react-icons/fa";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">EcoHero</h1>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/challenges" className="hover:underline">
          Challenges
        </Link>
        <Link to="/reels" className="hover:underline">
          Reels
        </Link>
        <Link to="/live" className="hover:underline">
          Live
        </Link>
        <Link to="/stories" className="hover:underline">
          Stories
        </Link>
        <Link to="/chat" className="hover:underline">
          Chat
        </Link>
        <Link to="/player" className="hover:underline">
          Player
        </Link>
        <Link to="/market" className="hover:underline">
          Market
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
        <Link to="/notifications" className="hover:underline">
          <FaBell className="inline" />
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white text-green-600"
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;