import React from "react";
import vector from "../../assets/img/vector@2x.png";
import girlimg from "../../assets/img/pexels-andrea-piacquadio-3978564.png";
import goalimg from "../../assets/img/frame 42906.png";
import "./index.css";

const FirstPage = () => {
  return (
    <div className="container">
      <img src={vector} className="vector-img" alt="vector" />{" "}
      <div className="content">
        <p className="section-p">
          Proven strategies backed by science for succes.
        </p>
        <p className="large-heding">
          Live life at the <br />
          full potential
        </p>
        <p className="paragraph">
          I help people to discover their true pontential and live a fulfiling
          <br />
          life... Discover the simple 3 steps that I discoverd to hack
          <br />
          producticity.It just works and it is being using backed by science.
          <br />
          Wanna tranform your life?{" "}
        </p>
        <button className="btn navbar-button">Get your free guid now</button>
        <div className="section-img">
          <img lassName="over-img2" src={goalimg} alt="loading" />
          <img className="over-img1" src={girlimg.toString()} alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
