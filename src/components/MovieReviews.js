
import React, { Component } from 'react';



const MovieReviews = ({reviews}) => (
      <div className="review-list">
        {reviews.map(review => <Review /> )}
      </div>

);

export default MovieReviews;

const Review = ({display_title, summary_short}) => (
  <div className="review">
    <h4>{display_title}</h4>
    <p>{summary_short}</p>
  </div>
)
