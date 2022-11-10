import React from "react";
import { timers } from "jquery";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
// import Stars from './Stars';

let e = React.createElement;

export default class Movie extends React.Component {
  render() {
    let movies = [
      {
        movieTitle: "The Watcher",
        synopsis:
          "Based on a horrifying true story, Ryan Murphy's limited Netflix series centers on a family who moves into an idyllic New Jersey mansion only to be welcomed by a host of oddball neighbors as they receive increasingly threatening letters from an anonymous stalker eyeing their every move.",
        rating: "3 Stars",
      },
    ];

    return (
      <div className="card w-75">
        <div className="card-header bg-light text-black">
          <h2>The Watcher</h2>
          <div>
            <span className="fa fa-star "></span>
            <span className="fa fa-star "></span>
            <span className="fa fa-star "></span>
          </div>
        </div>

        <div className="card-body">
          <img
            style={{ width: 500, height: 400 }}
            src="https://staticc.sportskeeda.com/editor/2022/10/52e55-16656797559793-1920.jpg"
          ></img>
          <div style={{ marginLeft: 10, marginRight: 10 }}>
            {this.synopsis}
            Based on a horrifying true story, Ryan Murphy's limited Netflix
            series centers on a family who moves into an idyllic New Jersey
            mansion only to be welcomed by a host of oddball neighbors as they
            receive increasingly threatening letters from an anonymous stalker
            eyeing their every move.
          </div>
        </div>

        <div className="card-footer">
          <ReviewList />
        </div>
      </div>
    );
  }
}
