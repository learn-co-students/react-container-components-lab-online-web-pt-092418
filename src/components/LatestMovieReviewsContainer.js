import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

  componentDidMount () {
    const NYT_API_KEY = 'AoN1S0depSKoeypAc12wBMfbMQMTYZ3R';
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
      + `api-key=${NYT_API_KEY}`;

    fetch(URL)
      .then(response => {
        if (response.status >= 400) {
          throw  new Error ("Bad response from server")
        }
        return response.json()
      })
      .then(reviews => this.setState({ reviews: reviews.results }))
  }
}

export default LatestMovieReviewsContainer;
