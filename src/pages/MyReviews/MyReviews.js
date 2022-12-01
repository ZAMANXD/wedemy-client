import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const MyReviews = () => {
  const reviews = useLoaderData();
  const [displayReviews, setDisplayReviews] = useState(reviews);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    fetch('https://befr-server.vercel.app/reviews')
      .then((res) => res.json())
      .then((data) => setDisplayReviews(data));
  }, [rerender]);

  const handleDelete = (review) => {
    console.log(review);
    const agree = window.confirm(
      'You are about to delete the selected review. Are you sure?'
    );
    if (agree) {
      fetch(`https://befr-server.vercel.app/reviews/${review}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success('Review deleted successfully');
            setRerender((prev) => !prev);
          }
        });
    }
  };
  return (
    <div className="text-center wdmy-min-height mx-auto py-20">
      {displayReviews.length === 0 ? (
        <h3 className="text-3xl">No Reviews were added</h3>
      ) : (
        <div>
          <h3 className="text-3xl">My Reviews {displayReviews.length}</h3>
          <ol>
            <li>
              {displayReviews.map((review) => (
                <div className=" rounded w-4/5 mx-auto mt-10" key={review._id}>
                  <table className="table rounded w-full text-center shadow">
                    <thead className="">
                      <tr>
                        <th>Rating</th>
                        <th>Review</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      <tr>
                        <td>{review.rating}</td>
                        <td>{review.review}</td>
                        <td>
                          <Link to={`/update/${review._id}`}>
                            <button htmlFor="my-modal" className="btn">
                              <FaEdit />
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelete(review._id)}
                            className="btn"
                            htmlFor="my-modal"
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        Congratulations random Internet user!
                      </h3>
                      <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                      </p>
                      <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                          Yay!
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          </ol>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default MyReviews;
