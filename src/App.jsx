import React, { useEffect, useLayoutEffect, useState } from "react";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutUspage from "./pages/AboutUs/AboutUspage";
import Loader from "./components/Loader";

import AdminPanel from "./pages/Meeting-Form/AminPanel";
import BookingForm from "./pages/Meeting-Form/MeetingForm";

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/AboutUspage" element={<AboutUspage />} />
              <Route path="/book-meeting" element={<BookingForm />}/>
              <Route path="/admin" element={<AdminPanel />}/>
            </Routes>
          </Wrapper>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
