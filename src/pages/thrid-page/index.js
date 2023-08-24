import React, { Fragment } from "react";
// import SecondPage from "../second-page";
import girlimg from "../../assets/img/image 68.png";
import catherineimg from "../../assets/img/image 65.png";
import janeimg from "../../assets/img/image 6.png";
import fivestarimg from "../../assets/img/fivestar.png";
import zerostarimg from "../../assets/img/star1.png";
import "../thrid-page/index.css";

const ThridPage = () => {
  return (
    <Fragment>
      {/* <SecondPage /> */}
      <div className="container thrid-page">
        <p className="thrid-heading">
          Here out what my <br />
          clients say about me.
        </p>
        <div className="row left-row">
          <div className="col-md-4 ">
            <div className="shadow border more-width">
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text card-width">
                  "I gaines so much <b>confidence</b> in my ability to connect
                  and deepnd my relationship with."
                </p>
                <p className="card-text">
                  <h5 className="card-title c-title">Jane</h5>
                </p>
              </div>
              <img src={girlimg} className="bottom card-image" alt="girlimg" />
              <img src={fivestarimg} className="star-img" alt="fivestarimg" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow border more-width">
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text card-width">
                  "I gaines so much confidence in my ability to connect and
                  deepnd my relationship with peaple."
                </p>
                <p className="card-text">
                  <h5 className="card-title c-title">Catherine</h5>
                </p>
              </div>
              <img
                src={catherineimg}
                className="bottom card-image"
                alt="catherineimg"
              />
              <img src={zerostarimg} className="star-img" alt="zerostarimg" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="shadow border more-width">
              <div className="card-body">
                <p className="card-text card-width">
                  "I gaines so much confidence in my ability to connect and
                  deepnd my relationship with peaple."
                </p>
                <p className="card-text">
                  <h5 className="card-title c-title">Jane</h5>
                </p>
              </div>
              <img src={janeimg} className="bottom card-image" alt="janeimg" />
              <img src={zerostarimg} className="star-img" alt="zerostarimg" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThridPage;
