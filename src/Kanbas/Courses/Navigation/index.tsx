import { Link, useLocation } from 'react-router-dom';
import './../../style.css'; // feel free to use the CSS from previous assignments
function CourseNavigation() {
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'Grades',
    'Assignments',
    'Quizes',
    'People',
    'Credentials',
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-course-navigation" style={{ width: '50px' }}>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? 'wd-active' : ''}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;
