
import React from 'react'

const Review = ({display_title, summary_short, critics_pick, opening_date}) => {
  return (
    <div className="review" key={display_title}>
      <h4>{display_title}</h4>
      <p>Summary: {summary_short}</p>
      <p>Critics Pick: {critics_pick}</p>
      <p>Opening Date: {opening_date}</p>
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
