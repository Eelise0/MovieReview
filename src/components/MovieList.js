import React from 'react';
import Movie from './Movie';

let e = React.createElement;

export default class MovieList extends React.Component {
    render() {

        
        return (
            <div className='container'>
                <Movie {...{content: 'Movie #1'}}/>
                <br></br>
                <Movie {...{content: 'Movie #2'}} />
                <br></br>
                <Movie {...{content: 'Movie #3'}}/>
                <br></br>
            </div>
        )
    }
}