import React, { useEffect, useState } from 'react';
import './ReviewMain.css';
import ReviewsCard from '../ReviewsCard/ReviewsCard';

const ReviewMain = () => {
        const [review, setReview] = useState([]);
        useEffect(() => {
            fetch('https://radiant-refuge-31272.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
        },[])
    return (
        <section className="reviews my-5">
            <h2 className="text-center">Clients <span>Feedback</span></h2>
           <div className="row" style={{padding:"50px"}}>
               <div className="card-deck mt-5">
                    {
                        review.map(review => <ReviewsCard review={review}></ReviewsCard>)
                    }
               </div>
           </div>
       </section>
    );
};

export default ReviewMain;