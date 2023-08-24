import React, { useEffect, useState } from "react";
import "../get-api-form/index.css";

const ViewForm = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    const dataLocal = window.localStorage.getItem("isOpenpage") || "[]";
    const data = JSON.parse(dataLocal);
    const obj = data.find((e) => e.id == id);
    console.log(id, obj);
    if (!obj?.id) {
      window.location.href = "/";
    }
    setData(obj);
  }, []);

  return (
    <div className="container mt-3 shadow p-3 mb-5 bg-body rounded">
      <div className="row align-items-start">
        <div className="col">User id : {data?.userId}</div>
        <div className="col">Id : {data?.id}</div>
        <div className="col">
          Title:
          <br />
          {data?.title}
        </div>
        <div className="col">
          Body:
          <br />
          {data?.body}
        </div>
      </div>
    </div>
  );
};

export default ViewForm;
