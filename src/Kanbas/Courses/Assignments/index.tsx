import React, { useState } from 'react';
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPenSquare,
  FaPlusCircle,
} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

import './index.css';
import './../../style.css';
import { useSelector, useDispatch } from 'react-redux';
import { KanbasState } from '../../store';
import { deleteAssignment, setAssignment } from './assignmentsRudecer';
import { Modal, Button } from 'react-bootstrap';

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
  const [popUp, setPopUp] = useState(false);

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
                      <Button
                        className="btn btn-danger"
                        onClick={() => {
                          setPopUp(true);
                          dispatch(setAssignment(assin));
                          // dispatch(deleteAssignment(assignment._id));
                        }}
                      >
                        Delete
                      </Button>
                      &ensp;
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                      {/* ------------ Looks like this might be the problem! -----------*/}
                      <Modal
                        show={popUp}
                        onHide={() => {
                          setPopUp(false);
                        }}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Delete {assin.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Do you want to delete {assin.title} ?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => {
                              setPopUp(false);
                            }}
                          >
                            Cancel
                          </Button>
                          <Link
                            to={`/Kanbas/Courses/${courseId}/Assignments`}
                            onClick={() => {
                              dispatch(deleteAssignment(assignment._id));
                              setPopUp(false);
                            }}
                            className="btn btn-danger ms-2 float-end"
                          >
                            Yes
                          </Link>
                        </Modal.Footer>
                      </Modal>
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
