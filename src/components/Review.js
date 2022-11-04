import React from 'react';
import Stars from './Stars';

let e = React.createElement;

export default class Review extends React.Component {
    render() {
        return (
            <div className='card w-75'>
                <div className='card-header bg-primary text-white'>
                    Posted by {this.props.username}, on {this.props.date}
                </div>
                <br></br>
                <div className='card-body'>
                    {this.props.content}
                </div>
                <br></br>
                <div className='card-footer'>
                    {/* <Stars /> */}
                </div>
                <br></br>
            </div>
        )
    }
}