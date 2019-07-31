import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'BGXrsR0TBPeXRGzwXg92GZtRyzHfHwOx';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
                    + `api-key=${NYT_API_KEY}`;
// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
   
    state = {
        reviews: []
    }
    componentDidMount(){
        
        fetch(URL)
        .then(response => response.json())
        .then(data =>{
            
            this.setState({
                reviews: data.results
            })
        }

            )
    }

render(){
    debugger
    return (
        <div className="latest-movie-reviews"></div>
    )
}
}