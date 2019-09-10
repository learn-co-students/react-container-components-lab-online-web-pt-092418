import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map((review, index) => (
        <div className="review" key={index}>
          <li>
            <h4>Headline: {review.headline}</h4>
            <p>Rating: {review.critics_pick}</p>
            <p>Opening Date: {review.opening_date}</p>
          </li>
        </div>

        )

      )}
    </div>
  )
}

export default MovieReviews
