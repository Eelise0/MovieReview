import React from "react";
import Stars from "./Stars";
import ReviewForm from "./ReviewForm";

let e = React.createElement;

export default class Review extends React.Component {
  render() {
    return (
      <div className="card w-75">
        <div className="card-header card-header bg-dark text-white">
          Posted by Elise, on 11/07/2022
        </div>
        <div className="card-body">It was good but I wanted more...</div>
        <br></br>
      </div>
    );
  }
}
