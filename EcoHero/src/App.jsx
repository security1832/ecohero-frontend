import { BrowserRouter, Routes, Route, createContext, useState } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Challenges from "./components/Challenges";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Chat from "./components/Chat";
import EcoReels from "./components/EcoReels";
import LiveStream from "./components/LiveStream";
import Stories from "./components/Stories";
import EcoPlayer from "./components/EcoPlayer";
import ARCamera from "./components/ARCamera";
import EcoMarket from "./components/EcoMarket";
import Notifications from "./components/Notifications";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Tips from "./components/Tips";
import Calculator from "./components/Calculator";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/reels" element={<EcoReels />} />
            <Route path="/live" element={<LiveStream />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/player" element={<EcoPlayer />} />
            <Route path="/arcamera" element={<ARCamera />} />
            <Route path="/market" element={<EcoMarket />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;