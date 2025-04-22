import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import FeedScreen from './screens/FeedScreen';
import HomeScreen from './screens/HomeScreen';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Challenges from './components/Challenges';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Chat from './components/Chat';
import EcoReels from './components/EcoReels';
import LiveStream from './components/LiveStream';
import Stories from './components/Stories';
import EcoPlayer from './components/EcoPlayer';
import ARCamera from './components/ARCamera';
import EcoMarket from './components/EcoMarket';
import Notifications from './components/Notifications';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Tips from './components/Tips';
import Calculator from './components/Calculator';
import Pledge from './components/Pledge';
import Community from './components/Community';
import Learning from './components/Learning';
import Media from './components/Media';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/feed" element={<FeedScreen />} />
            <Route path="/landing" element={<Landing />} />
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
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/pledge" element={<Pledge />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<Community />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/media" element={<Media />} />
            <Route path="/eco-reels" element={<EcoReels />} />
            <Route path="/eco-player" element={<EcoPlayer />} />
            <Route path="/eco-market" element={<EcoMarket />} />
            <Route path="/eco-reels/:id" element={<EcoReels />} />
            <Route path="/eco-player/:id" element={<EcoPlayer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;