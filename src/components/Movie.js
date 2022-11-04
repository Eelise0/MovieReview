import React from 'react';
import { timers } from 'jquery';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
// import Stars from './Stars';


let e = React.createElement;

let comments = [
    {
        content: 'This is Barry\'s Post',
        username: 'Barry',
        date: '11-1-2022'
    },

    {
        content: 'Ryan\'s Post',
        username: 'Ryan',
        date: '11-2-2022'
    },

    {
        content: 'Lisee\'s Post',
        username: 'Elise',
        date: '11-3-2022'
    }
    ];

export default class Movie extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        // ReviewList: props.ReviewList,
        // comments: props.comments,
        content: props.content,
        count: 0
    }
}

    render() {

        // setTimeout(() => this.setState((x) => ({count: x.count + 1}),  () => console.log(this.state.count)), 20);
    // let tempComments= this.state.comments;

    //    setTimeout(() => this.setState({content: 'state updated', comments: []}, 
    //     () => setTimeout(() => this.setState({comments: tempComments}), 2000)), 2000);

        // let comments;

        // if(this.state.comments) {
        //     comments = this.state.comments.map((comment, index) => < Comment key={index} {...comment} />);
            // for(let comment of this.state.comments) {
            //     comments.push(<Comment {...comment} />);
            // }
        
        return (
            <div className='card w-75'>

                <div className='card-header bg-primary text-white'>
                    Movie Name
                </div>

                <div>
                    <image src=''></image>
                </div>

                <div>
                    {/* <Stars /> */}
                </div>

                <div className='card-body'>
                    {this.state.content}
                </div>

                <br></br>

                <div className='card-footer'>
                    <ReviewForm comments = {comments}/> 
                    <br></br><br></br>
                    <ReviewList />
                    {/* {comments} */}
                </div>

            </div>
        )
    }
}