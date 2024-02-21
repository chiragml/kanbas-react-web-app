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
//import Assignments from './Assignments';
import './../style.css';
import './index.css';
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
              <HiMiniBars3 /> {course?._id} {course?.name}
            </h4>
          </li>
          <li className="breadcrumb-item active">{linkName}</li>
        </ol>
      </nav>

      <hr />
      <div className="wd-flex-row-cotainer">
        <CourseNavigation />

        <div
          className="wd-course-navigation"
          style={{ left: '320px', top: '50px' }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<ModuleList />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
