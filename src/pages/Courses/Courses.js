import { useLoaderData } from 'react-router-dom';
import Course from '../../components/Course/Course';
import './Courses.css';

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      <div className="course-container lg:flex">
        <div className="lg:w-3/4 w-100 mx-auto py-10 grid lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
