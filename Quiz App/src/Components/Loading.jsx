import React from "react";

const Loading = ({ show }) => {
  const LoadingModal = {
    position: "fixed",
    top: 0,
    marginLeft: "-50px",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10000",
    backgroundColor: "rgb(0,0,0,0.5)",
  };
  const LoadingDiv = {
    padding: "20px",
    width: "100px",
    height: "100px",
    background: "url('Images/load.gif') no-repeat center center / cover",
  };
  return (
    <div
      className="loading-modal"
      style={{ ...LoadingModal, display: `${show}` }}
    >
      <div className="loading-div" style={LoadingDiv}></div>
    </div>
  );
};

export default Loading;
