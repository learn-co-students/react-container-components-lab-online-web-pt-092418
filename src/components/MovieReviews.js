// Code MovieReviews Here
import React from 'react'
const MovieReviews = props => {
    const reviews= props.reviews || [];
    const reviewList = reviews.map((review, i) => (<div key={i} className="review">{review.headline}</div>))
    return (
        <div className="review-list">{reviewList}</div>
    );  
}

export default MovieReviews 
