import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import HomeScreen from './screens/HomeScreen';
import FeedScreen from './screens/FeedScreen';
import CarbonTrackerScreen from './screens/CarbonTrackerScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import LearnScreen from './screens/LearnScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ChatScreen from './screens/ChatScreen';
import StoriesScreen from './screens/StoriesScreen';
import EcoWorldScreen from './screens/EcoWorldScreen';
import MusicScreen from './screens/MusicScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/feed" element={<FeedScreen />} />
          <Route path="/carbon-tracker" element={<CarbonTrackerScreen />} />
          <Route path="/marketplace" element={<MarketplaceScreen />} />
          <Route path="/learn" element={<LearnScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/stories" element={<StoriesScreen />} />
          <Route path="/eco-world" element={<EcoWorldScreen />} />
          <Route path="/music" element={<MusicScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;