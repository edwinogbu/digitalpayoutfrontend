import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, MemoryRouter } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import WatchlistProvider from './WatchlistContext';
import WelcomePage from './pages/WelcomePage';
import MarketCapScreen from './pages/MarketCapScreen';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
// import './pages/style2.css';
import MarketUpdate from './pages/MarketUpdate';
import MarketDetail from './pages/MarketDetail';
import BlogDetail from './pages/BlogDetail';

const App = () => {
  const dashboardBasePath = "/dashboard";


  return (
    <>
 
       <WatchlistProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<WelcomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/markets" element={<MarketCapScreen />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login/*" element={<SignIn />} />
            <Route path="/market" element={<MarketUpdate />} />
            <Route path="/market/:coinId" element={<MarketDetail />} />
            {/* <Route
              path={`${dashboardBasePath}/*`}
              element={<PrivateRoute element={<Dashboard />} />}
            /> */}
         </Routes>
        </Router>
      </AuthProvider>
    </WatchlistProvider>
    </>
  );
}

export default App;
