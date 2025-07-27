import React, { useState } from "react";

const OtpFilling = () => {
  const [otpInputLength, setOtpInputLenght] = useState(6);
  const [otpValue, setOtpValue] = useState([" ", " ", " "," ", " ", " "]);
  let array = [0, 1, 2, 3, 4, 5];
  const handleOtpValue = (e,items) => {
    console.log(e, items)
    setOtpValue(otpValue[items] = e.target.value);
    console.log('Otp value', otpValue);
  };

  return (
    <div className="row justify-content-center mx-0 mt-5">
      <div className="col-md-7 d-flex">
        {array.map((items, index) => (
          <input
            key={index+1}
            className="form-control mx-1"
            style={{ border: "solid black 2px" }}
            type="text"
            name={"Otp"}
            id={items}
            value={otpValue[items]}
            onChange={(e) => handleOtpValue(e,items)}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpFilling;
