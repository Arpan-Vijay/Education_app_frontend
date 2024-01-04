import React from "react";
import "../../Styles/CreateCourse.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../../Styles/AdminCreateUsers.css";

const AdminAddStudent = () => {
  const notify = () => toast.success("Successfully created !!");

  return (
    <section>
      <div class="add__teacher-container">
        <div className="h-text admin__add-school-heading">
          Create Student Profile
        </div>
        <form action="#">
          <div class="form">
            <div class="details__personal">
              <span class="title__heading">Personal Details</span>
              <div class="fields">
                <div class="input-field">
                  <label>First Name</label>
                  <input type="text" placeholder="Ex: Harvey" required />
                </div>
                <div class="input-field">
                  <label>Middle Name</label>
                  <input type="text" placeholder="Ex: Reginald" required />
                </div>
                <div class="input-field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Ex: Spector" required />
                </div>
                <div class="input-field">
                  <label>Gender</label>
                  <select required>
                    <option disabled selected>
                      Select gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
                <div class="input-field">
                  <label>Date of Birth</label>
                  <input type="date" placeholder="Enter birth date" required />
                </div>
                <div class="input-field">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Ex: harvey.spector@email.com"
                    required
                  />
                </div>
                <div class="input-field">
                  <label>Contact Number</label>
                  <input
                    type="number"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                <div class="input-field">
                  <label>Alternative Contact Number</label>
                  <input
                    type="number"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                <div class="input-field">
                  <label>Aadhar Card Number</label>
                  <input
                    type="number"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                <div class="input-field">
                  <label>Pancard Number</label>
                  <input
                    type="number"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
              </div>
              <div class="details__address">
                <span class="title__heading">Address Details</span>
                <div class="fields">
                  <div class="input-field">
                    <label>Permanent Address</label>
                    <input type="text" placeholder="Enter Address" required />
                  </div>

                  <div class="input-field">
                    <label>City</label>
                    <input type="text" placeholder="Ex: Pune" required />
                  </div>
                  <div class="input-field">
                    <label>State</label>
                    <input type="text" placeholder="Ex: Maharashtra" required />
                  </div>
                  <div class="input-field">
                    <label>Communication Address</label>
                    <input type="text" placeholder="Enter Address" required />
                  </div>
                  <div class="input-field">
                    <label>City</label>
                    <input type="text" placeholder="Ex: Pune" required />
                  </div>
                  <div class="input-field">
                    <label>State</label>
                    <input type="text" placeholder="Ex: Maharashtra" required />
                  </div>
                </div>
              </div>
              <div class="details__family">
                <span class="title__heading">Family Details</span>
                <div class="fields">
                  <div class="input-field">
                    <label>Father Name</label>
                    <input
                      type="text"
                      placeholder="Enter father name"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>Mother Name</label>
                    <input
                      type="text"
                      placeholder="Enter mother name"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>Emergency Contact Name</label>
                    <input
                      type="text"
                      placeholder="Enter contact name"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>Emergency Contact Number</label>
                    <input type="tel" placeholder="Enter number" required />
                  </div>
                </div>

                <div class="details__accounts">
                  <span class="title__heading">Account Details</span>
                  <div class="fields">
                    <div class="input-field">
                      <label>Account Holder Name</label>
                      <input
                        type="text"
                        placeholder="Enter father name"
                        required
                      />
                    </div>
                    <div class="input-field">
                      <label>Bank Name</label>
                      <input
                        type="text"
                        placeholder="Enter mother name"
                        required
                      />
                    </div>
                    <div class="input-field">
                      <label>Account Number</label>
                      <input
                        type="text"
                        placeholder="Enter contact name"
                        required
                      />
                    </div>
                    <div class="input-field">
                      <label>IFSC Code</label>
                      <input type="tel" placeholder="Enter number" required />
                    </div>
                    <div class="input-field">
                      <label>Account Type</label>
                      <input type="tel" placeholder="Enter number" required />
                    </div>
                  </div>

                  <Link to="#">
                    <div className="flex_right">
                      <button
                        className="primary_cta_button"
                        onClick={notify}
                        style={{ width: "30%" }}
                      >
                        Submit
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminAddStudent;
