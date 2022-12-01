import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <div className="hero-banner wdmy-min-height pt-20 px-40">
      <div className=" mx-auto">
        <div className="">
          <h1 className="lg:text-5xl mt-10 text-xl font-bold text-white">
            Kickstart building your career with WEDEMY
          </h1>

          <h4 className="lg:text-xl mt-8">
            WEDEMY reviews the top online courses so that you have to spends
            months trying to find the right courses for your career.
          </h4>

          <div className="mt-10">
            <Link
              to="/courses"
              className="btn btn-outline btn-primary mr-5 rounded-full px-10"
            >
              Explore Top Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
