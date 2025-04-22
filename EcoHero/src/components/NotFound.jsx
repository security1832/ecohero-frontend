import { Link } from "react-router-dom";
import Navbar from "../layout/NavBar";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">
          404 - Page Not Found
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-full"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;