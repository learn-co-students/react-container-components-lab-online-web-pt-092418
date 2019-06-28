import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form>
          <input type="text"></input>
          <input type="submit"></input>

        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=ZAKLHDCpHwELxnf94wxbpQ3lLWev8wcm`)
    .then(res => res.json)
    .then(json => {
      setState:({
        reviews: json.results
      })
    })
  }
}

export default SearchableMovieReviewsContainer;
