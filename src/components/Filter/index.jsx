import React, { useState, useEffect } from "react";

const index = (props) => {
  // console.log(props);
  const awardYear =
    props.data &&
    props.data
      // .filter((e) => e.awardYear == "1905")
      .map((el, i) => {
        return (
          <div key={i}>
            <div>{el.awardYear}</div>
          </div>
        );
      });

  return (
    <div className="w-[30vw] bg-blue-400">
      <div className="flex justify-center items-center min-h-[90vh]">
        <div className="">{awardYear}</div>
      </div>
    </div>
  );
};

export default index;
