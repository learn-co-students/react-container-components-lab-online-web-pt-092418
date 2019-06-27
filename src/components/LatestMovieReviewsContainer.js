import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

class LatestMovieReviewsContainer extends Component {

  constructor(){
    super()
      this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  componentDidMount(){
    const NYT_API_KEY = 'wAyyJc041SxnPKAnd7lblZdFWpa8AuGA';
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
                + `api-key=${NYT_API_KEY}`;

    fetch(URL)
    	.then(function(response) {
    		if (response.status >= 400) {
    			throw new Error("Bad response from server");
    		}
    		return response.json();
    	})
    	.then(reviews => {
        this.setState({
          reviews: reviews.results
        });
      })
  }

}


export default LatestMovieReviewsContainer;
