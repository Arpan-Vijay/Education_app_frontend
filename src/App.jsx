// App.jsx
import React, { useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Components/Navbars/Sidebar.jsx';
import Login from './Components/UserLogin/Login';
import ForgotPassword from './Components/UserLogin/ForgotPassword';
import Otp from './Components/UserLogin/Otp';
import ResetPassword from './Components/UserLogin/ResetPassword';
import Home from './Components/Dashboard/Home';
import CourseBuilder from './Components/CourseBuilder/CourseBuilder.js';
import TeacherProfile from './Components/Profile/TeacherProfile.jsx';
import PublishCourse from './Components/PublishCourse/PublishCourse.jsx';
import PublishCourseDetails from './Components/PublishCourse/PublishCourseDetails.jsx';

const App = () => {
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("auth");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/verify-otp' element={<Otp />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        {/* Wrap routes that should have the Sidebar with a Sidebar component */}
        <Route
          path='/*'
          element={
            <Sidebar>
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/course-builder' element={<CourseBuilder />} />
                <Route path='/teacher-profile' element={<TeacherProfile />} />
                <Route path='/publish-course' element={<PublishCourse />} />
                <Route path='/publish-course-details' element={<PublishCourseDetails />} />
              </Routes>
            </Sidebar>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;


// // App.jsx
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Sidebar from './Components/Dashboard/Sidebar';
// import Login from './Components/UserLogin/Login';
// import ForgotPassword from './Components/UserLogin/ForgotPassword';
// import Otp from './Components/UserLogin/Otp';
// import ResetPassword from './Components/UserLogin/ResetPassword';
// import Home from './Components/Dashboard/Home';
// import CourseBuilder from './Components/CourseBuilder/CourseBuilder.js';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("auth");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Login />} />
//         <Route path='/login' element={<Login />} />
//         <Route
//           path='/forgotPassword'
//           element={<ForgotPassword />}
//         />
//         <Route
//           path='/verify-otp'
//           element={isAuthenticated ? <Otp /> : <Navigate to="/login" />}
//         />
//         <Route
//           path='/resetPassword'
//           element={isAuthenticated ? <ResetPassword /> : <Navigate to="/login" />}
//         />
//         {isAuthenticated && (
//           <>
//             <Route path='/home' element={<Sidebar><Home /></Sidebar>} />
//             <Route path='/course-builder' element={<Sidebar><CourseBuilder /></Sidebar>} />
//             {/* Add other protected routes */}
//           </>
//         )}
//         {!isAuthenticated && <Route path='/*' element={<Navigate to="/login" />} />}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
