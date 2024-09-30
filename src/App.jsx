import { lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import PopularCourses from './components/PopularCourses/PopularCourses';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { hideForm, showForm } from './redux/form/formSlice';

const RegistrationPage = lazy(() =>
  import('../src/pages/RegistrationPage/RegistrationPage')
);

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/register') {
      dispatch(showForm());
    } else {
      dispatch(hideForm());
    }
  }, [location.pathname, dispatch]);
  

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RegistrationPage />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutUs />
              <PopularCourses />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
