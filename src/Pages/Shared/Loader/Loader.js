import React from "react";
import "./loader.css";
const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:'50vh'}}>
        <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Loader;
