import React from "react";

function Header(props) {
    return <div className="jumbotron text-center">
      <h1 className="strong text-light">Good Memory Everyone!</h1>
      <h3 className="text-light">...Now what was I talking about?</h3>
      <div className="row mt-5">

      <div className="col-md-2"></div>
      <div className="card col-md-3 d-flex align-items-center justify-content-center"><h2>Score: {props.score} </h2></div>
      <div className="col-md-2"></div>
      <div className="card col-md-3"><h2>High Score: {props.highScore}</h2> </div>
      <div className="col-md-2"></div>
      </div>
    
  </div>
}

export default Header;