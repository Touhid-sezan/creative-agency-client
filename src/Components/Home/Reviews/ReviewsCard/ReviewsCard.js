import React from 'react';

export default function ReviewsCard({ review }) {

  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex  align-items-center">
        <img className="mx-3" src={review.img} alt="" width="60" />
        <div>
          <h6>{review.name}</h6>
          <p className="m-0">{review.designation}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-secondary mt-4">{review.comment}</p>
      </div>

    </div>
  );
}
