import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateReview = () => {
  const storedReview = useLoaderData();
  const [review, setReview] = useState(storedReview);

  const handleUpdateReview = (event) => {
    event.preventDefault();
    fetch(`https://befr-server.vercel.app/reviews/${storedReview._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Review Updated Successfully');
          console.log(data);
          event.target.reset();
        }
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
    console.log(newReview);
  };

  return (
    <div className="wdmy-min-height w-3/4 mx-auto text-center my-10">
      <h3 className="text-2xl ">Update Review: {storedReview.review}</h3>
      <div className="mt-10">
        <form onSubmit={handleUpdateReview}>
          <input
            onChange={handleInputChange}
            className="w-full p-4 text-white input input-bordered input-success"
            name="review"
            defaultValue={storedReview.review}
            type="text"
            required
          />
          <br />

          <input
            onChange={handleInputChange}
            className="mt-3 p-2 text-white input input-bordered input-success"
            name="rating"
            defaultValue={storedReview.rating}
            type="number"
            required
          />
          <br />

          <button className="btn btn-outline btn-primary mt-4" type="submit">
            Update Review
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateReview;
