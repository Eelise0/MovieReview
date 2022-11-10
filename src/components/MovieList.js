import React from "react";
import Movie from "./Movie";
import Movie2 from "./Movie2";

let e = React.createElement;

export default class MovieList extends React.Component {
  render() {
    return (
      <div className="container">
        <Movie />
        <br></br>
        <Movie2 />
      </div>
    );
  }
}
