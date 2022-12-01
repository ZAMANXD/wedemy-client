import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Course.css';

const Course = ({ course }) => {
  return (
    <div className="course-holder lg:m-0 my-4">
      <div className="card shadow-xl h-full">
        <figure>
          <PhotoProvider>
            <PhotoView src={course.image}>
              <img src={course.image} alt={course.name} />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body p-4">
          <div className="flex justify-between items-center">
            <div className="bg-pink-500 px-2 py-1 text-white">
              <small>{course.category}</small>
            </div>
            <h2 className="text-2xl">
              <span> $</span>
              <span className="font-bold text-white">
                {course.price === 0 ? 'Free' : course.price}
              </span>
            </h2>
          </div>
          <h2 className="text-lg text-white font-bold">{course.name}</h2>
          <p>
            {course.description.length > 50
              ? course.description.slice(0, 50) + '...'
              : course.description}
          </p>
          <div className="flex items-center">
            <img
              src={course.instructor_image}
              className="rounded-full instructor-img"
              alt={course.instructor}
            />
            <p className="text-white">
              <small>{course.instructor}</small>
            </p>
          </div>
          <div className="divider"></div>

          <div className="card-actions justify-between items-center">
            <Link
              to={`/course-details/${course._id}`}
              className="btn btn-primary"
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
