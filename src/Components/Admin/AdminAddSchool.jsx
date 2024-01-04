import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../../Styles/AdminAddSchool.css";

const AdminAddSchool = () => {
  const notify = () => toast.success("Successfully created !!");

  return (
    <section className="admin__add-school">
      <div className="admin__add-school-container">
        <div className="h-text admin__add-school-heading">Create Course</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div
                className="input-box"
                style={{ display: "block", width: "100%", marginTop: "1rem" }}
              >
                <span className="details">School Name</span>
                <input type="text" placeholder="Ex: Saint Pauls Sr. Sec. School" required />
              </div>
              <div
                className="input-box"
                style={{ display: "block", width: "100%", marginTop: "1rem" }}
              >
                <span className="details">School Address</span>
                <input type="text" placeholder="Ex: 2, Church Road Behind Police Commissioner's office" required />
              </div>
              <div className="input-box">
                <span className="details">City</span>
                <input type="text" placeholder="Ex: Pune" required />
              </div>
              <div className="input-box">
                <span className="details">State</span>
                <input
                  type="text"
                  placeholder="Ex: Maharashtra"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Zip Code</span>
                <input
                  type="text"
                  placeholder="Ex: 411001"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="tel"
                  placeholder="Ex: 020 2612 0757"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Alternative Number</span>
                <input
                  type="tel"
                  placeholder="Ex: 020 2612 0757"
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Principal Name</span>
                <input
                  type="text"
                  placeholder="Ex: Father Mukesh Rawat"
                  required
                />
              </div>

              <div
                className="input-box"
                style={{ display: "block", width: "100%", marginTop: "1rem" }}
              >
                <span className="details">School Government Registered ID</span>
                <input
                  type="text"
                  placeholder="Ex: SCH-20220001"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Funds to deploy</span>
                <input
                  type="text"
                  placeholder="Ex: 25,000"
                  required
                />
              </div>
            </div>
            <Link to="#">
              <div className="flex_right">
                <button
                  className="primary_cta_button"
                  onClick={notify}
                  style={{ width: "30%" }}
                >
                  Create School
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminAddSchool;
