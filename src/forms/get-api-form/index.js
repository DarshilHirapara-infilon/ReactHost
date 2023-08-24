import { Pagination, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../get-api-form/index.css";
import { fetchTodo } from "../../redux/slice/todo";

const GetApiFprm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // const handleClick = (item) => {
  //   const newTabUrl = "/slug/" + item;
  //   window.open(newTabUrl, "_blank");
  //   console.log(item);
  // };
  // const handleOnChange = (page) => {
  //   dispatch(setCurrentPage(page));
  // };

  const TableData =
    state.todo.data &&
    state.todo.data?.map((e) => ({
      Userid: e.userId,
      Id: e.id,
      Title: e.title,
      Body: e.body,
    }));
  console.log(TableData);
  const columns = [
    {
      title: "Userid",
      dataIndex: "Userid",
      key: "Userid",
    },
    {
      title: "Id",
      dataIndex: "Id",
      key: "Id",
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "Title",
    },
    {
      title: "Body",
      dataIndex: "Body",
      key: "Body",
    },
  ];

  return (
    <div className=" btn-center m-5 ">
      <button
        onClick={(e) => dispatch(fetchTodo())}
        className="btn btn-primary btn-center"
      >
        Fetch Data
      </button>

      <Table columns={columns} dataSource={TableData} />

      {/* {state.todo.data &&
        state.todo.data.map((e, data) => (
          <div
            className="container mt-3 shadow p-3 mb-5 bg-body rounded"
            key={data}
          >
            {" "}
            <div className="row align-items-start">
              <div className="col">User id : {e.userId}</div>
              <div className="col">Id : {e.id}</div>
              <div className="col">
                Title:
                <br />
                {e.title}
              </div>
              <div className="col">
                Body:
                <br />
                {e.body}
              </div>
              <div className="col">
                <button
                  onClick={() => handleClick(e.id)}
                  className="btn btn-secondary"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default GetApiFprm;
