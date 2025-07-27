import React, { useState } from "react";

const MultipleTabs = () => {
  const [currentTab, setCurrentTab] = useState("Home");

  return (
    <div className="row justify-content-center align-content-center mx-0">
      <div className="col-md-8">
        <div className="py-2 px-1 bg-body-secondary row justify-content-between">
          <div
            className="col-md-3 bg-success p-1 text-center"
            onClick={() => setCurrentTab("Home")}
          >
            Home
          </div>
          <div
            className="col-md-3 bg-primary p-1 text-center"
            onClick={() => setCurrentTab("Hobbies")}
          >
            Hobbies
          </div>
          <div
            className="col-md-3 bg-danger p-1 text-center"
            onClick={() => setCurrentTab("Contacts")}
          >
            Contacts
          </div>
        </div>

        <div className="row justify-content-center mt-3 border-2 border-black">
          <div className="col md-11 h-50 bg-body-tertiary">
            {currentTab === "Home" && (
              <>
                <h2>Home and its Details</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus, optio? Saepe quaerat doloribus sint accusantium.
                </p>
              </>
            )}
            {currentTab === "Hobbies" && (
              <>
                <h2>Hobbies and its Details</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum rerum rem nulla obcaecati vitae facere accusamus.
                </p>
              </>
            )}
            {currentTab === "Contacts" && (
              <>
                <h2>Contacts and its Details</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, assumenda. Dolor maiores dolore voluptatibus.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleTabs;
