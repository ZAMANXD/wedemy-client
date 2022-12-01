import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReviews = () => {
  const [review, setReview] = useState('');

  const handleAddReview = (event) => {
    event.preventDefault();
    console.log(review);
    if (review) {
      fetch('https://befr-server.vercel.app/reviews/:id', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success('Review added successfully');
            event.target.reset();
          }
        });
    }
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
    console.log(newReview);
  };

  return (
    <div className="wdmy-min-height w-3/4 mx-auto">
      <h3 className="text-3xl text-center mt-8">Add A Review</h3>
      <div className="divider"></div>
      <form onSubmit={handleAddReview}>
        <input
          onBlur={handleInputBlur}
          className="w-full p-4 text-white input input-bordered input-success"
          name="review"
          placeholder="Type Your Review"
          type="text"
          required
        />
        <br />

        <input
          onBlur={handleInputBlur}
          className="mt-3 p-2 text-white input input-bordered input-success"
          name="rating"
          placeholder="Your Rating"
          type="number"
          required
        />
        <br />

        <button className="btn btn-outline btn-primary mt-4" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddReviews;
