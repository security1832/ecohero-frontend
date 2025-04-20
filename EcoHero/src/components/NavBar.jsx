import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">EcoHero</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/challenges" className="hover:underline">Challenges</Link>
        <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;