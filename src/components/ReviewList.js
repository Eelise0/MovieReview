import React from "react";
import Review from "./Review";
import Review2 from "./Review2";
import ReviewForm from "./ReviewForm";
// import Stars from './Stars';

let e = React.createElement;

export default class ReviewList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron card-header bg-dark text-white">
          <h4>Reviews</h4>
        </div>
        <ReviewForm />
        <br></br>
        <Review />
        <br></br>
        <Review2 />
      </div>
    );
  }
}
