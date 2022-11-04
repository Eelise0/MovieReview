import React from "react";

export default class ReviewForm extends React.Component {
  constructor(props) {
    console.log("here", props);
    super(props);
    this.state = {
      // comments: props.comments,
      newComment: "",
    };
  }

  handSubmit(event) {
    event.preventDefault();
    console.log("here2", event);
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //     <div className='jumbotron'>
      //         <h2>Submit a Review</h2>
      //     </div>
      //     <div className="form-group">
      //         <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
      //     </div>

      //     <div>
      //         {/* <Stars /> */}
      //     </div>

      //     <div className="form-group">
      //         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell me what you really think!"></textarea>
      //     </div>
      //     <button value='Submit'className='btn btn-warning'>Post</button>
      // </form>
      <form id="movieReviewForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Input email"
          />
          <small className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="fullNameInput">Full Name</label>
          <input
            name="fullName"
            type="text"
            className="form-control"
            id="fullNameInput"
            placeholder="Full Name"
            // value={this.state.reviewComments["fullName"]}
          />
        </div>
        <label htmlFor="exampleFormControlTextarea1">
          So how was the movie?
        </label>
        <textarea
          name="movieDescription"
          type="text"
          className="form-control"
          id="textArea"
          placeholder="This movie was the best movie in the world!"
          rows="3"
          // value={this.state.reviewComments["movieDescription"]}
        ></textarea>

        <button
          className="btn btn-primary form-control w-50 m-2"
          id="submitContactButton"
          value="Submit"
        >
          Submit Your Review
        </button>
      </form>
    );
  }
}
