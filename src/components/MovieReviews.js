
import React from 'react'

const Review = ({display_title, summary_short}) => {
  return (
    <div className="review" key={display_title}>
      <h4>{display_title}</h4>
      <p>{summary_short}</p>
    </div>
  )
}


const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  )
}


export default MovieReviews;
