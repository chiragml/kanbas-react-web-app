import { Link, useLocation } from 'react-router-dom';
import './../style.css';
import './index.css';
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaTv,
  FaSignOutAlt,
  FaQuestionCircle,
} from 'react-icons/fa';
function KanbasNavigation() {
  const links = [
    {
      label: 'Account',
      icon: <FaRegUserCircle id="grey_icon" className="fs-2" />,
    },
    { label: 'Dashboard', icon: <FaTachometerAlt className="fs-2 " /> },
    { label: 'Courses', icon: <FaBook className="fs-2" /> },
    { label: 'Calendar', icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: 'Inbox', icon: <FaInbox className="fs-2" /> },
    { label: 'History', icon: <FaHistory className="fs-2" /> },
    { label: 'Studio', icon: <FaTv className="fs-2" /> },
    { label: 'Commons', icon: <FaSignOutAlt className="fs-2" /> },
    { label: 'Help', icon: <FaQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <Link to={'http://northeastern.edu'}>
          {' '}
          {<span className="letter-icon">N</span>}
        </Link>
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? 'wd-active' : ''}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {' '}
            {link.icon} <br />
            {link.label}{' '}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
