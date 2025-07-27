import React, { useState } from "react";

const LoginRegistrationForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const handleLoginForm = () => {
    console.log(isLoginForm);
    setIsLoginForm(true);
    console.log(isLoginForm);
  };
  return (
    <div className="row  justify-content-center align-content-center mx-0 ">
      <div className="col-md-6">
        <div className="row justify-content-center bg-black py-3 px-2 mt-5">
          {isLoginForm ? (
            <h3 className="text-success text-center">Login Form</h3>
          ) : (
            <h3 className="text-danger text-center">Registration Form</h3>
          )}

          <div className="col-md-11">
            {!isLoginForm && (
              <>
                <label className="form-label" htmlFor="">
                  Name
                </label>
                <input
                  className="form-control"
                  placeholder="Enter your Name"
                  type="text"
                  name="Name"
                  id=""
                />
              </>
            )}

            <label className="form-label" htmlFor="">
              Email
            </label>
            <input
              className="form-control"
              placeholder="Enter your Email"
              type="text"
              name="Email"
              id=""
            />
            <label className="form-label" htmlFor="">
              Password
            </label>
            <input
              className="form-control"
              placeholder="Enter your Password"
              type="text"
              name="Password"
              id=""
            />

            {!isLoginForm && (
              <>
                <label className="form-label" htmlFor="">
                  ConfirmPassword
                </label>
                <input
                  className="form-control"
                  placeholder="Confirm your Password"
                  type="text"
                  name="Confirm your Password"
                  id=""
                />
              </>
            )}
          </div>

          <div className="row justify-content-center">
            <div className="col-5 row justify-content-center">
              {!isLoginForm && (
                <button
                  className="btn btn-sm btn-success my-3"
                  onClick={handleLoginForm}
                >
                  Already Signup then Login
                </button>
              )}

              {isLoginForm && (
                <>
                  <button className="btn btn-sm btn-success my-3">Login</button>

                  <button
                    className="btn btn-sm btn-warning my-3"
                    onClick={() => setIsLoginForm(false)}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistrationForm;
