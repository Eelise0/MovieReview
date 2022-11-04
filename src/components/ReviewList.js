import React from 'react';
import Review from './Review';
// import Stars from './Stars';

let e = React.createElement;

export default class ReviewList extends React.Component {
    render() {

        // let comments = [
        // {
        //     content: 'This is Barry\'s Post',
        //     username: 'Barry',
        //     date: '11-1-2022'
        // },

        // {
        //     content: 'Ryan\'s Post',
        //     username: 'Ryan',
        //     date: '11-2-2022'
        // },

        // {
        //     content: 'Lisee\'s Post',
        //     username: 'Elise',
        //     date: '11-3-2022'
        // }
        // ];
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h2>Reviews</h2>
                </div>
                <Review {...{content: 'Review #1 for Movie #1'}}/>
                <br></br>
                <Review {...{content: 'Review #2 for Movie #1'}} />
                <br></br>
            </div>
        )
    }
}