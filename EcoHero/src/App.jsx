import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import HomeScreen from './screens/HomeScreen';
import FeedScreen from './screens/FeedScreen';
import StoriesScreen from './screens/StoriesScreen';
import LiveFestivalScreen from './screens/LiveFestivalScreen';
import CarbonTrackerScreen from './screens/CarbonTrackerScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import LearnScreen from './screens/LearnScreen';
import EcoWorldScreen from './screens/EcoWorldScreen';
import CommunitiesScreen from './screens/CommunitiesScreen';
import MusicScreen from './screens/MusicScreen';
import ARVRScreen from './screens/ARVRScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ChatScreen from './screens/ChatScreen';
import GamificationScreen from './screens/GamificationScreen';
import KidsAcademyScreen from './screens/KidsAcademyScreen';
import CulturalHubScreen from './screens/CulturalHubScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/feed" element={<FeedScreen />} />
          <Route path="/stories" element={<StoriesScreen />} />
          <Route path="/live-festivals" element={<LiveFestivalScreen />} />
          <Route path="/carbon-tracker" element={<CarbonTrackerScreen />} />
          <Route path="/marketplace" element={<MarketplaceScreen />} />
          <Route path="/learn" element={<LearnScreen />} />
          <Route path="/eco-world" element={<EcoWorldScreen />} />
          <Route path="/communities" element={<CommunitiesScreen />} />
          <Route path="/music" element={<MusicScreen />} />
          <Route path="/ar-vr" element={<ARVRScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/gamification" element={<GamificationScreen />} />
          <Route path="/kids-academy" element={<KidsAcademyScreen />} />
          <Route path="/cultural-hub" element={<CulturalHubScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;