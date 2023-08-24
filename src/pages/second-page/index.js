import React from "react";
import vectorimg from "../../assets/img/vector.png";
import bookimg from "../../assets/img/book.png";
import consultimg from "../../assets/img/frame.png";
import groupimg from "../../assets/img/frame 1.png";
import "../second-page/index.css";

const SecondPage = () => {
  return (
    <>
      <div className="bg-body second-page">
        <div className="container">
          <div className="vector img">
            <img src={vectorimg} />
          </div>
          <p className="heading">
            I can help you in these <br />
            particular area
          </p>
          <div className="second-paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisingelit,sed
              <br />
              do eisumed tempor incididunt ut labore et dolor magna <br />
              eliqua minim venim.{" "}
            </p>
            <p>
              Sed ut perspiciatis unde omnis isat natus error sit <br />
              voluptapte accusantium dolormque laudantium,totam <br />
              rem aperiam, equam ipsa quae ab illo inventor veritatis et <br />
              quasi architecto beatea vitae dicta sunt explicabo
            </p>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="card-body">
                <img src={bookimg} alt="bookimg" />
                <p className="card-title card-style">1.1 Coaching</p>
                <p className="card-text">
                  Mollit anim consectetur proident commodo velit esse in quis.
                  Mollit ex dolore anim incididunt ad deserunt nisi cupidatat
                  officia. Ad occaecat culpa anim exercitation reprehenderit non
                  ipsum.
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card-body">
                <img src={consultimg} alt="consultimg" />
                <p className="card-title card-style">Consultation</p>
                <p className="card-text">
                  Mollit anim consectetur proident commodo velit esse in quis.
                  Mollit ex dolore anim incididunt ad deserunt nisi cupidatat
                  officia. Ad occaecat culpa anim exercitation reprehenderit non
                  ipsum.
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card-body">
                <img src={groupimg} alt="groupimg" />
                <p className="card-title card-style">Group Coching Session</p>
                <p className="card-text">
                  Mollit anim consectetur proident commodo velit esse in quis.
                  Mollit ex dolore anim incididunt ad deserunt nisi cupidatat
                  officia. Ad occaecat culpa anim exercitation reprehenderit non
                  ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
