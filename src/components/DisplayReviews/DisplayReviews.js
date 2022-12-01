import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const DisplayReviews = () => {
  const [displayReviews, setDisplayReviews] = useState([]);
  useEffect(() => {
    fetch('https://befr-server.vercel.app/reviews')
      .then((res) => res.json())
      .then((data) => setDisplayReviews(data));
  }, []);
  return (
    <div className="mt-10">
      <h3>Total Reviews: {displayReviews.length}</h3>
      {displayReviews.length === 0 ? (
        <h3 className="text-3xl">No Reviews were added</h3>
      ) : (
        <div>
          <ol>
            <li>
              {displayReviews.map((review) => (
                <div className=" rounded mx-auto mt-10" key={review._id}>
                  <table className="table rounded w-full text-center shadow">
                    <thead className="">
                      <tr>
                        <th>Rating</th>
                        <th>Review</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      <tr>
                        <td>{review.rating}</td>
                        <td>{review.review}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default DisplayReviews;
