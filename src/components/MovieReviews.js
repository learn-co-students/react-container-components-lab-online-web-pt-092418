import React from 'react'

const MovieReviews = (props) =>
    <div className="review-list">
      <ul >
        {props.reviews.map((review, index) => (
        <div className="review" key={index}>
          <li>
            <b>Headline:</b> {review.headline}
            <p><b>Critic Rating:</b> {review.critics_pick}</p>
            <p><b>Opening Date:</b> {review.opening_date}</p>
          </li>
        </div>
        ))}
      </ul>
    </div>

export default MovieReviews;
