import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AddReviews from '../../components/AddReviews/AddReviews';
import DisplayReviews from '../../components/DisplayReviews/DisplayReviews';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Broken from '../Broken/Broken';
import './CourseDetails.css';

const CourseDetails = () => {
  const data = useLoaderData();
  const ref = React.createRef();
  const { user } = useContext(AuthContext);

  return data.id ? (
    <div className="relative">
      <div className="py-10 lg:w-3/4 w-full mx-auto course-contents">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Course Details</h1>
          <div className="divider"></div>
        </div>

        <div className="lg:flex justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-xl">
              Course Name: <span className="text-white">{data.name}</span>
            </h1>
            <p className="mt-10 mb-3 bg-success inline-block px-3 rounded text-black">
              Instructor
            </p>
            <div className="flex items-center">
              <img
                src={data.instructor_image}
                className="rounded-full instructor-img"
                alt=""
              />
              <h1 className="text-xl ml-3">
                <span className="text-white">{data.instructor}</span>
              </h1>
            </div>

            <div ref={ref}>
              <p className="mt-10 mb-3 bg-success text-black inline-block px-3 rounded">
                Details:{' '}
                <span className="text-justify">{data.description}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5  lg:overflow-hidden overflow-x-auto">
          <table className=" table w-full text-center shadow">
            <thead className="">
              <tr>
                <th>Duration</th>
                <th>Lectures</th>
                <th>Quizzes</th>
                <th>Assignments</th>
                <th>Projects</th>
                <th>Ratings</th>
                <th>Students</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td>{data.totalHours} Hours</td>
                <td>{data.totalLectures}</td>
                <td>{data.totalQuizzes}</td>
                <td>{data.totalAssignments}</td>
                <td>{data.totalProjects}</td>
                <td>{data.rating}</td>
                <td>{data.totalEnrolled}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <div className="text-center">
            <h2 className="text-3xl">REVIEWS</h2>

            <div className="divider"></div>
            <DisplayReviews></DisplayReviews>
            {user ? (
              <div className="add-review mt-5">
                <AddReviews></AddReviews>
              </div>
            ) : (
              <div className="mt-5">
                <Link
                  to="/login"
                  className="btn btn-outline btn-primary mr-5 mb-10 rounded-full px-10"
                >
                  <h3>Login to Add Review</h3>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Broken></Broken>
  );
};

export default CourseDetails;
