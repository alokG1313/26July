import React, { useState } from "react";

const PerformanceOptimization = () => {
  const [count, setCount] = useState(0);
  let totalValue = count * 10;

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("Increment function called");
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log("Decrement function called");
    }
  };

  const arrayList = ["alok", "ankit", "hemant", "suraj"];

  const addElementToArray = (val) => {
    arrayList = [...arrayList, val];
  };

  return (
    <div className="row mx-0 justify-content-center align-content-center">
      <div className="col-3">
        <h2 className="text-center">{count}</h2>
        <h3 className="text-center text-success">{totalValue}</h3>
        <button
          className="btn btn-primary my-3 text-center"
          onClick={handleIncrement}
        >
          Increase
        </button>{" "}
        <button
          className="btn btn-success text-center"
          onClick={handleDecrement}
        >
          Decrease
        </button>
      </div>
      <div className="row">
        <div className="col-md-11">
          {arrayList.map((item, index) => (
            <div>
              {index + 1} <bold>{item}</bold>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimization;
