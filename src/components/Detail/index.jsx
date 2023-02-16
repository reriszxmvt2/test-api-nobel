import React, { useState, useEffect } from "react";

const index = (props) => {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  // console.log(props);
  const Laureates =
    props.data &&
    props.data.map((e, i) => {
      // console.log(e.laureates);
      const laureatesOrgName = e.laureates
        .filter((g) => g.orgName)
        .map((f, i) => {
          return <div key={i}>{f.orgName.en}</div>;
        });
      const laureatesKnownName = e.laureates
        .filter((g) => g.knownName)
        .map((h, i) => {
          return <div key={i}>{h.knownName.en}</div>;
        });
      return (
        <div key={i}>
          <div>{laureatesOrgName}</div>
          <div>{laureatesKnownName}</div>
        </div>
      );
    });

  return (
    <div className="w-[70vw] bg-green-400">
      <div className="flex justify-center items-center min-h-[90vh] ">
        <div>{Laureates}</div>
      </div>
    </div>
  );
};

export default index;
