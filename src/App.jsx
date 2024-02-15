import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import ChatPage from "./components/ChatPage/ChatPage";
import AllApps from "./components/AllApps/AllApps";
import ChatInterface from "./components/ChatInterface";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/all-apps" element={<AllApps />} />

          <Route path="/services" component={Services} />
          <Route path="/app" element={<Services />} />

          <Route path="/app/:toolId" element={<ChatInterface />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Banner />
                <AppStore />
                <Testimonials />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
