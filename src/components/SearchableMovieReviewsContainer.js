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

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
          <input type="submit" ></input>

        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=my key`)
    .then(res => res.json)
    .then(json => {
      this.setState({
        reviews: json.results
      })
    })

  }

  componentDidMount() {
  }

} // end of class

export default SearchableMovieReviewsContainer;
