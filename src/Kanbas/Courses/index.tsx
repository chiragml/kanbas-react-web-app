import { courses } from '../../Kanbas/Database';
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
function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);
  const linkName = location.pathname.split('/').pop();
  return (
    <div className="wd-flex-grow-1 ">
      <hr />
      <nav className="" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li>
            <h4 className="breadcrumb-item course_hamburger">
              <HiMiniBars3 /> {course?._id} {course?.name} &gt;
            </h4>
          </li>
          <li className="breadcrumb-item active">{linkName}</li>
        </ol>
      </nav>

      <hr />

      <div className="wd-flex-row-cotainer">
        <CourseNavigation />
        {/* <div> */}
        {/* <div
          className="wd-course-navigation"
          style={{ left: '320px', top: '50px' }}
        > */}
        <div
          className="position-absolute bottom-0 end-0"
          style={{ left: '300px', top: '100px' }}
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
  );
}
export default Courses;
