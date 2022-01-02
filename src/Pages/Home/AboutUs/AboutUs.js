import React from "react";
import Bounce from "react-reveal/Bounce";
const AboutUs = () => {
 

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h5 className="text-black-50 my-1 fw-bold">ABOUT US</h5>
        <h1 className="fw-bold ">
          We are <span style={{ color: "#FF5E14" }}>DeviceWala</span>
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Bounce left>
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/7gjRxYD/about.jpg"
                  alt="aboutus"
                />
              </Bounce>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <Bounce right>
                <p className="text-start fs-4 text-black-50">
                  We are No. 1 Online Gadget shop in bd. We provide Original &
                  Brand new smartphones, Tablets, Laptop etc. Order now online
                  for awesome buying experience. You will get a good after sell
                  service.
                </p>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
