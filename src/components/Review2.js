import React from "react";
import Stars from "./Stars";
import ReviewForm from "./ReviewForm";

let e = React.createElement;

export default class Review2 extends React.Component {
  render() {
    return (
      <div className="card w-75">
        <div className="card-header card-header bg-dark text-white">
          Posted by Ryan, on 11/08/2022
        </div>
        <div className="card-body">
          There is something really interesting about these investigative
          series. Nice job Netflix!
        </div>
        <br></br>
      </div>
    );
  }
}
