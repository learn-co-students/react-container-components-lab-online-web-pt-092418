import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component{
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const NYT_API_KEY = 'AoN1S0depSKoeypAc12wBMfbMQMTYZ3R';
    const SEARCH = this.state.value;
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${SEARCH}&api-key=${NYT_API_KEY}`;

    fetch(URL)
      .then(response => {
        if (response.status >= 400){
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {

        this.setState({
          reviews: data.results
        })
      })
  };

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" onChange={event => this.handleChange(event)}/>
          <button type="submit">Search</button>
          <MovieReviews reviews={this.state.reviews}/>
        </form>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
