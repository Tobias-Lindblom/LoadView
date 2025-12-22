"use client";

import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import AuthPage from "@/components/AuthPage";

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleGetStarted = () => {
    setIsAuthOpen(true);
  };

  const handleLogin = (name: string) => {
    setUserName(name);
    setIsLoggedIn(true);
    setIsAuthOpen(false);
  };

  const handleAboutClick = () => {
    setIsAboutOpen(true);
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  // Show auth page if user is not logged in
  if (!isLoggedIn && isAuthOpen) {
    return <AuthPage onLogin={handleLogin} />;
  }

  // Show landing page if user is not logged in
  if (!isLoggedIn) {
    return (
      <>
        <LandingPage
          onGetStarted={handleGetStarted}
          onAboutClick={handleAboutClick}
          onContactClick={handleContactClick}
        />
        <AboutPage isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
        <ContactPage
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </>
    );
  }

  // TODO: Show main app interface once user is logged in
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome, {userName}!
        </h1>
        <p className="text-gray-300 mb-8">
          Main application interface coming soon...
        </p>
        <button
          onClick={() => {
            setIsLoggedIn(false);
            setUserName("");
          }}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
        >
          Logga ut
        </button>
      </div>
    </div>
  );
}
