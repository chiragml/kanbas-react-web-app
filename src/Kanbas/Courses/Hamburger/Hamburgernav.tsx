import React, { useState } from 'react';
import { HiMiniBars3 } from 'react-icons/hi2';
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
import { Link, useLocation } from 'react-router-dom';
function HamburgerNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <HiMiniBars3 className="hamburger-icon" onClick={toggleDropdown} />
      {isDropdownOpen && (
        <div className="dropdown-menu">
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
        </div>
      )}
    </nav>
  );
}
export default HamburgerNav;
