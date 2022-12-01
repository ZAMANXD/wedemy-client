import React from 'react';
import { Link } from 'react-router-dom';

const Broken = () => {
  return (
    <div className="text-center custom-height flex items-center justify-center flex-col py-10 ">
      <h1 className="text-3xl bg-amber-600 p-5 mb-5 text-white mt-5">
        Looks like you are lost.
      </h1>
      <p>
        <Link className="underline text-amber-600" to="/">
          Go back to HOME
        </Link>
      </p>
    </div>
  );
};

export default Broken;
