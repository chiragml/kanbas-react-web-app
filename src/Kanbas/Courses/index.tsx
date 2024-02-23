import { courses } from '../../Kanbas/Database';
import React, { useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom';
import { HiMiniBars3 } from 'react-icons/hi2';
import CourseNavigation from './Navigation';
import ModuleList from './Modules';
import Assignments from './Assignments';
import './../style.css';
import './index.css';
import Home from './Home';
import Modules from './Modules';
import AssignmentEditor from './Assignments/Editor';
import Grades from './Grades';
import KanbasNavigation from '../Navigation';

function Courses() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);
  const linkName = location.pathname.split('/').pop();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="wd-flex-grow-1 ">
      <hr />
      <nav className="" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li>
            <h4 className="breadcrumb-item course_hamburger">
              <HiMiniBars3 onClick={toggleDropdown} /> {course?._id}{' '}
              {course?.name} &gt;
            </h4>
          </li>
          <li className="breadcrumb-item active">{linkName}</li>
        </ol>
      </nav>

      <hr />

      {/* <div className="wd-flex-row-cotainer"> */}
      <div className="row">
        {/* <div className="d-none d-md-block col-2"> */}
        {isDropdownOpen && (
          <div
            className={`sidebar${isDropdownOpen ? ' open' : ''} col-2`}
            id="colapse"
          >
            <CourseNavigation />
          </div>
        )}
        {/* </div> */}
        {/* <div> */}
        {/* <div
          className="wd-course-navigation"
          style={{ left: '320px', top: '50px' }}
        > */}
        <div className="flex-fill col-10">
          <div
            className="position-relative bottom-0 end-0"
            // style={{ left: '300px', top: '100px' }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
