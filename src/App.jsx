import React, { useLayoutEffect } from 'react';
import HomePage from './pages/Home/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App;
