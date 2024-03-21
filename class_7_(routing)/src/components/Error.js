import React, { useEffect } from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  useEffect(() => {
    document.title = "Error Page";
  }, []);
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops!!</h1>
      <h1>Something went Wrong!</h1>
      <h1>
        {err.status} : {err.statusText}
      </h1>
    </>
  );
};

export default Error;
