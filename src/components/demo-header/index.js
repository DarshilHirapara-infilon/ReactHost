import React from "react";
import { useNavigate } from "react-router-dom";

const DemoHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-start">
          <a className="btn btn-outline-danger m-2" href="/demofirst">
            {/* <button
              onClick={() => {
                navigate("/demofirst");
              }}
              className="btn btn-outline-danger m-2"
            >
              Demo 1
            </button> */}
            Demo 1
          </a>
          <a className="btn btn-outline-secondary m-2" href="/demosecond">
            {/* <button
              onClick={() => {
                navigate("/demosecond");
              }}
              className="btn btn-outline-secondary m-2"
            >
              Demo 2
            </button> */}
            Demo 2
          </a>
          <a className="btn btn-outline-primary m-2" href="/demothird">
            Demo 3
          </a>
          {/* <button
            onClick={() => {
              navigate("/demothird");
            }}
            className="btn btn-outline-primary m-2"
          >
            Demo 3
          </button> */}
        </form>
      </nav>
    </div>
  );
};

export default DemoHeader;
