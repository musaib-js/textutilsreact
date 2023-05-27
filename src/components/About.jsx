import React from "react";

export default function About() {
  document.title = "About - Textify"
  return (
    <div className="container my-4">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About the site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Built with React.js</strong> TextUtils is a simple text
              analysing and manipulation website built using React - A Frontend
              JavaScript Library, maintained by Facebook.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features Used
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils used basic React functionality like{" "}
              <strong>
                {" "}
                State Management using useState Hook, Routing using
                React-Router-DOM and function based React components
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
