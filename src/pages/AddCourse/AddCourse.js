import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCourse = () => {
  const [course, setCourse] = useState('');

  const handleAddCourse = (event) => {
    event.preventDefault();
    console.log(course);

    fetch('https://befr-server.vercel.app/courses', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Course Added Successfully');
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newCourse = { ...course };
    newCourse[field] = value;
    setCourse(newCourse);
    console.log(newCourse);
  };

  return (
    <div className="wdmy-min-height w-3/4 py-20 text-center mx-auto">
      <h3 className="text-3xl">Add A Course</h3>
      <div className="divider"></div>
      <form onSubmit={handleAddCourse}>
        <input
          onBlur={handleInputBlur}
          className="w-full p-2 mb-2 text-white input input-bordered input-success"
          name="name"
          placeholder="Enter Course Name"
          type="text"
          required
        />

        <br />
        <input
          onBlur={handleInputBlur}
          className="w-full p-2 mb-2 text-white input input-bordered input-success"
          name="category"
          placeholder="Enter Category"
          type="text"
          required
        />

        <br />
        <textarea
          onBlur={handleInputBlur}
          className="w-full p-2 mb-2 text-white input input-bordered input-success"
          name="description"
          placeholder="Enter Description"
          type="text"
          required
        />

        <br />
        <input
          onBlur={handleInputBlur}
          className="w-full p-2 mb-2 text-white input input-bordered input-success"
          name="instructor"
          placeholder="Enter instructor name"
          type="text"
          required
        />

        <br />
        <input
          onBlur={handleInputBlur}
          className="w-40 mr-2 p-2 my-2 text-white input input-bordered input-success"
          name="totalLectures"
          placeholder="Lecture Number"
          type="number"
          required
        />

        <input
          onBlur={handleInputBlur}
          className="w-40 mr-2 p-2 my-2 text-white input input-bordered input-success"
          name="totalProjects"
          placeholder="Total Projects"
          type="number"
          required
        />

        <input
          onBlur={handleInputBlur}
          className="w-40 mr-2 p-2 my-2 text-white input input-bordered input-success"
          name="totalAssignments"
          placeholder="Total Assignments"
          type="number"
          required
        />

        <input
          onBlur={handleInputBlur}
          className="w-40 mr-2 p-2 my-2 text-white input input-bordered input-success"
          name="price"
          placeholder="Price"
          type="number"
          required
        />

        <br />

        <input
          onBlur={handleInputBlur}
          className="w-1/2 p-2 mb-2 text-white input input-bordered input-success"
          name="image"
          placeholder="Course Image URL"
          type="url"
          required
        />
        <br />

        <input
          onBlur={handleInputBlur}
          className="w-1/2 p-2 mb-2 text-white input input-bordered input-success"
          name="instructor_image"
          placeholder="Instructor Image URL"
          type="url"
          required
        />
        <br />

        <button className="btn btn-outline btn-primary mt-4" type="submit">
          ADD COURSE
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddCourse;
