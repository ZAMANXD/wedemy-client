/* eslint-disable array-callback-return */
import React from 'react';
import Banner from '../../components/Banner/Banner';

import { Link, useLoaderData } from 'react-router-dom';
import Course from '../../components/Course/Course';
// import { FaStar } from 'react-icons/fa';
import './Home.css';
import Trusted from '../../components/Trusted/Trusted';

const Home = () => {
  const course = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <div className="popular lg:w-3/4 w-full mt-10 pb-10 mx-auto">
        <h2 className="text-3xl font-bold text-center text-white">
          Top Reviewed Courses
        </h2>
        <div className="divider"></div>
        <div className="md:grid lg:grid-cols-3 grid-cols-2 lg:p-0 p-4 gap-4 justify-center align-center">
          {course.slice(0, 3).map((course) => {
            if (course.rating === 5) {
              return <Course key={course.id} course={course}></Course>;
            }
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/courses"
            className="btn btn-outline btn-primary mr-5 mb-10 rounded-full px-10"
          >
            Load All Courses
          </Link>
        </div>
        <div className="my-10 mx-auto text-center">
          <Trusted></Trusted>
        </div>
      </div>
    </div>
  );
};

export default Home;
