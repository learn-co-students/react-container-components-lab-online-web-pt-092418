import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super()
      this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const NYT_API_KEY = 'wAyyJc041SxnPKAnd7lblZdFWpa8AuGA';
    const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}`
    const PARAMS = this.state.value
    const SEARCH_URL = `${BASE_URL}` + '&query=' + `${PARAMS}`

    fetch(SEARCH_URL)
      .then(function(response) {
        debugger
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      }).then(data => {
        this.setState({
          reviews: data.results
        });
	    });
  }

  render () {
    return (
       <div className="searchable-movie-reviews">
         <form onSubmit={event => this.handleSubmit(event)}>
           <label>Search the Latest NEW YORK TIMES Movie Reviews</label>
           <br></br>
           <input type="text" onChange={event => this.handleChange(event)}  value={this.state.value}/>
           <div>
             <button type="submit">Search</button>
           </div>
         </form>
         <MovieReviews reviews={this.state.reviews} />
       </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
