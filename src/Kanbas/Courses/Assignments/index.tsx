import React from 'react';
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPenSquare,
  FaPlusCircle,
} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { assignments } from '../../Database';
import './index.css';
import './../../style.css';
import { useSelector, useDispatch } from 'react-redux';
import { KanbasState } from '../../store';
import { addAssignment, setAssignment } from './assignmentsRudecer';

function Assignments() {
  const { courseId } = useParams();
  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === courseId
  // );
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignments
  );
  const dispatch = useDispatch();
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignment
  );
  return (
    <>
      {/* {<!-- Add buttons and other fields here-->} */}
      <div className="wd-flex-grow-1">
        <div className="wd-new-container">
          <div className="wd-text-box-deco">
            <input type="text" placeholder="Search for Assignments" />
          </div>

          <div>
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Group
            </button>
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments/AddAssignment`}
              onClick={() =>
                dispatch(
                  setAssignment({
                    title: 'New Assignment',
                    description: 'New Assignment Description',
                    points: 100,
                    due: '2023-03-25',
                    availableFrom: '2023-03-25',
                    until: '2023-03-25',
                  })
                )
              }
            >
              <button className="btn btn-danger">
                <FaPlusCircle />
                Assignment
              </button>
            </Link>
            &ensp;
            {/* <button
              onClick={() =>
                dispatch(addAssignment({ ...assignment, course: courseId }))
              }
            >
              Add
            </button>
            <input
              value={assignment.title}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, title: e.target.value })
                )
              }
            /> */}
            <button className="btn btn-light">
              <FaEllipsisV />
            </button>
          </div>
        </div>
        <hr />
        <ul className="list-group wd-modules">
          <li className="custom-item">
            <div className="assignment-box">
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <span className="border border-dark rounded-4 ms-2 wd-padding-rl-5">
                  {' '}
                  40 % of Total{' '}
                </span>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList
                .filter((assin) => assin.course === courseId)
                .map((assin) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    <FaPenSquare className="wd-icon-green" />
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      onClick={() => dispatch(setAssignment(assin))}
                    >
                      {assin.title}
                    </Link>
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Assignments;
