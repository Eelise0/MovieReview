import React from "react";
import { timers } from "jquery";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
// import Stars from './Stars';

let e = React.createElement;

export default class Movie2 extends React.Component {
  render() {
    return (
      <div className="card w-75">
        <div className="card-header bg-light text-black">
          <h2>Killer Sally</h2>
          <div>
            <span className="fa fa-star "></span>
            <span className="fa fa-star "></span>
            <span className="fa fa-star "></span>
            <span className="fa fa-star"></span>
          </div>
        </div>

        <div className="card-body">
          <img
            style={{ width: 500, height: 400 }}
            src="https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*8519*8520_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5B3tnef7scwumJ44OAAqbaBI5paTp%5BZZZZYCss%5DoY98f3%5D57ImuBUqguYep8E6TiNlNHOlPHHTxjEoFfiN9ay*JEOUQ*eI2D3zny3%5DikojLs9XizQnxRLROI6fwuuLh6eYyLBINium8SvhHkAg22LUXF1JEy0c8gPzUghGa9GawkwX6RU98cO7sgdSMMafFaHBeQVFtxJuBZRKYtrvtx59fPHmc6br7mB.jpg"
          ></img>
          <br></br>
          <div style={{ marginLeft: 10, marginRight: 10 }}>
            The series examines and investigates bodybuilding’s most notorious
            crime involving a bodybuilding couple’s rocky marriage and the
            gruesome murder of the husband on Valentine’s Day in 1995. It also
            digs into whether the wife’s shooting death of her husband was
            premeditated or self-defense. The docuseries will also feature
            interviews with the wife, friends, family, and those involved in the
            case.
          </div>
        </div>

        <div className="card-footer">
          <ReviewList />
        </div>
      </div>
    );
  }
}
