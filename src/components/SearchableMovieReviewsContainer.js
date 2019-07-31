import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'BGXrsR0TBPeXRGzwXg92GZtRyzHfHwOx';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component{
    state = {
        reviews: [],
        searchTerm: ''
    }
    handleSubmit = evt => {
        evt.preventDefault();
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    reviews: data.results
                })
            })
    }

    handleKeyPress = evt => {
        this.setState({
            searchTerm: evt.target.value
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                    <input type="text" onKeyPress={(evt) => this.handleKeyPress(evt)}></input>
                    <button>Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )}
}