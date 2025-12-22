"use client";

import LandingPage from "@/components/LandingPage";

export default function Home() {
  const handleGetStarted = () => {
    console.log("Get started clicked");
    // TODO: Navigate to login/register page
  };

  const handleAboutClick = () => {
    console.log("About clicked");
    // TODO: Navigate to about page or scroll to about section
  };

  const handleContactClick = () => {
    console.log("Contact clicked");
    // TODO: Navigate to contact page or show contact modal
  };

  return (
    <LandingPage
      onGetStarted={handleGetStarted}
      onAboutClick={handleAboutClick}
      onContactClick={handleContactClick}
    />
  );
}
