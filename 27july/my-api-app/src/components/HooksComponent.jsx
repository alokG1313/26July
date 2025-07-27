import React, { useState } from "react";

const HooksComponent = () => {
  const [count, setCount] = useState(0);
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const addElementToArray = (newValue) => {
    numberArray = [...numberArray, newValue];
  };

  return (
    <div>
      <div className="row justify-content-center mt-5 mx-0">
        <h3 className="text-center text-success">{count}</h3>
        <div className="col-2">
          <div className="btn btn-primary" onClick={() => setCount(count + 1)}>
            Increase
          </div>{" "}
          &nbsp;
          <div className="btn btn-warning" onClick={() => setCount(count - 1)}>
            Decrease
          </div>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-3">
          {numberArray.map((items, index) => (
            <div className="text-center text-dark">
              {index + 1} : {items}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HooksComponent;
