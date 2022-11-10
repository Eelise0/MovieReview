import React from "react";
import Review from "./Review";
import ReviewList from "./ReviewList";

export default class ReviewForm extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <h4>Make a Review</h4>
          <br></br>
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <input
                  placeholder="Your Name"
                  type="text"
                  className="form-control"
                  id="new-name"
                ></input>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <textarea
                  placeholder="What did you think of it?"
                  type="text"
                  rows="6"
                  className="form-control"
                  id="new-suggestion"
                ></textarea>
              </div>
            </div>
          </div>

          <br></br>

          <div>
            <button id="add" className="btn btn-success from-control">
              POST
            </button>
          </div>
        </div>
      </div>
    );
  }
}
