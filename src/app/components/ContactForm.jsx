"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interestedIn: [],
    budget: "",
  });

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(service)
        ? prev.interestedIn.filter((item) => item !== service)
        : [...prev.interestedIn, service],
    }));
  };

  return (
    <div className="contact-form">
      <div className="left-section">
        <h2>
          Have <span className="highlight">a great idea?</span> <br /> Tell us
          about it.
        </h2>

        <div className="social-media">
          <p>Follow us:</p>
          <div className="icons">
            <img src="/dribbble-icon.png" alt="Dribbble" />
            <img src="/behance-icon.png" alt="Behance" />
            <img src="/tiktok-icon.png" alt="TikTok" />
            <img
              src="https://www.bing.com/ck/a?!&&p=6ae1cc5b05009e31JmltdHM9MTcyODUxODQwMCZpZ3VpZD0yYTAzYmMzMy0yY2YyLTY5OGItM2MwZS1hOGUwMmQ4ZDY4MzImaW5zaWQ9NTU0Mg&ptn=3&ver=2&hsh=3&fclid=2a03bc33-2cf2-698b-3c0e-a8e02d8d6832&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbnN0YWdyYW0lMjBsb2dvJTIwdXJsJkZPUk09SVFGUkJBJmlkPTY3QTc2MjI3QUQ3NDc0RDdCRUE1MDk0QThEMDc2NTY3MkM2NDE4MUY&ntb=1"
              alt="Instagram"
            />
          </div>
        </div>
      </div>

      <div className="right-section">
        <form>
          {/* Name and Email Inputs */}
          <div className="form-group-inline">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Type here"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                placeholder="john@apple.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Interested In Checkboxes */}
          <div className="form-group">
            <label>I'm interested in...</label>
            <div className="checkboxes">
              {[
                "Web Development",
                "App from scratch",
                "UX/UI Design",
                "Branding",
                "Site from scratch",
                "App Development",
                "Maintenance",
              ].map((service) => (
                <div
                  key={service}
                  className={`checkbox ${
                    formData.interestedIn.includes(service) ? "active" : ""
                  }`}
                  onClick={() => handleCheckboxChange(service)}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Budget Radio Buttons */}
          <div className="form-group">
            <label>Project budget (USD)</label>
            <div className="budget-options">
              {["<5k", "10k-20k", "30k-40k", "50k-60k", ">100k"].map(
                (budgetOption) => (
                  <div key={budgetOption} className="radio-option">
                    <input
                      type="radio"
                      id={budgetOption}
                      name="budget"
                      value={budgetOption}
                      checked={formData.budget === budgetOption}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                    />
                    <label htmlFor={budgetOption}>{budgetOption}</label>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
