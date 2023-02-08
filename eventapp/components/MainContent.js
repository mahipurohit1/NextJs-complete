import React from "react";
import Navbar from "./Navbar";

function MainContent(props) {
  return (
    <>
      <Navbar></Navbar>
      <div>{props.children}</div>
    </>
  );
}

export default MainContent;
