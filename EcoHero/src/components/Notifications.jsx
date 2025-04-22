import { useState, useEffect } from "react";
import Navbar from "../layout/NavBar";
import { socket } from "../utils/socket";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("notification", (notification) => {
      setNotifications((prev) => [...prev, notification]);
    });

    return () => socket.off("notification");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Notifications
        </h2>
        <div className="mt-6 space-y-4">
          {notifications.length === 0 && (
            <p className="text-gray-600 dark:text-gray-400">
              No notifications yet.
            </p>
          )}
          {notifications.map((notif, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <p className="dark:text-white">{notif.message}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {notif.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;