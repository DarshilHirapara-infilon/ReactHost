import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CurrentPage,
  paginationData,
} from "../../redux/slice/scrollpagination";

const ScrollPagination = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state);

  const handleScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        dispatch(CurrentPage(allData?.CurrentPage + 1));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allData.scrolldata?.itemPrePage]);

  return (
    <div>
      <button
        onClick={(e) => dispatch(paginationData())}
        className="btn btn-primary"
      >
        Fetch Data
      </button>
      {allData.scrolldata?.data &&
        allData.scrolldata?.data
          ?.slice(0, allData.scrolldata?.itemPrePage)
          ?.map((e, index) => (
            <div
              className="container mt-3 shadow p-3 mb-5 bg-body rounded"
              key={index}
            >
              <div className="row align-items-start">
                <div className="col">User id : {e?.userId}</div>
                <div className="col">Id : {e?.id}</div>
                <div className="col">
                  Title:
                  <br />
                  {e?.title}
                </div>
                <div className="col">
                  Body:
                  <br />
                  {e?.body}
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};
export default ScrollPagination;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import paginationData from "../redux/slice/scrollpagination";

// const ScrollPagination = () => {
//   const dispatch = useDispatch();
//   const stateData = useSelector((state) => state);

//   return (
//     <>
//       <button
//         onClick={(e) => dispatch(paginationData())}
//         className="btn btn-primary ms-5"
//       >
//         Fetch Data
//       </button>
//       <div>
//         {stateData.scrolldata?.data &&
//           stateData.scrolldata?.data?.map((e, data) => {
//             <div className="row align-items-start" key={data}>
//               <div className="col">User id : {e.userId}</div>
//               <div className="col">Id : {e.id}</div>
//               <div className="col">
//                 Title:
//                 <br />
//                 {e.title}
//               </div>
//               <div className="col">
//                 Body:
//                 <br />
//                 {e.body}
//               </div>
//             </div>;
//           })}
//       </div>
//     </>
//   );
// };

// export default ScrollPagination;
