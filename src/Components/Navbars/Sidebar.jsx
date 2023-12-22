// Sidebar.jsx
import React, { useState, useEffect } from "react";
import "../../Styles/Home.css";
import avatar from "../../assets/teacher_img.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isSidebarClosed, setSidebarClosed] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const excludedRoutes = [
    "/login",
    "/verify-otp",
    "/forgotPassword",
    "/resetPassword",
  ];
  const shouldExcludeSidebar = excludedRoutes.includes(location.pathname);
  const First_Name = location.state ? location.state.First_Name : "";

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleArrowClick = (e) => {
    const arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  };

  const handleSidebarToggle = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
  };

  return (
    <div>
      {!shouldExcludeSidebar && (
        <div className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
          <div className="logo-details">
            <i className="bx bx-menu" onClick={handleSidebarToggle}></i>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/home">
                <i className="bx bx-grid-alt"></i>
                <span className="link_name">Home</span>
              </Link>
            </li>
            <li>
              <div className="iocn-link">
                <Link to="#">
                  <i className="bx bx-collection"></i>
                  <span className="link_name">Course</span>
                </Link>
                <i
                  className="bx bxs-chevron-down arrow"
                  onClick={handleArrowClick}
                ></i>
              </div>
              <ul className="sub-menu">
                <li>
                  <Link to="/course-builder">Create Course</Link>
                </li>
                <li>
                  <Link to="#">Edit Course</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/publish-course">
                <i className="bx bx-grid-alt"></i>
                <span className="link_name">Publish Course</span>
              </Link>
            </li>

            <li>
              <Link to="/teacher-profile">
                <i className="bx bx-info-circle"></i>
                <span className="link_name">Personal Info</span>
              </Link>
            </li>
          </ul>
          <div className="profile-details">
            <div className="profile-content">
              <img src={avatar} alt="profileImg" />
            </div>
            <div className="name-job">
              <div className="profile_name">{First_Name}</div>
            </div>
            <Link to="/login" onClick={handleLogout}>
              <i className="bx bx-log-out logout_btn"></i>
            </Link>
          </div>
        </div>
      )}
      {/* Main Content Section */}
      <section className="home-section">
        {/* Render the child components (e.g., Home, CourseBuilder) */}
        {children}
      </section>
    </div>
  );
};

export default Sidebar;
