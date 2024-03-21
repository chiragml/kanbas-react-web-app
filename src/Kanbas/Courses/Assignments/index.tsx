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
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

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
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

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
                .map((assin, index) => (
                  <li key={index} className="list-group-item">
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
                      <Button
                        onClick={() => {
                          toggleOpen();
                          dispatch(setAssignment(assin));
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </Button>
                      <MDBModal
                        open={basicModal}
                        setOpen={setBasicModal}
                        tabIndex="-1"
                      >
                        <MDBModalDialog>
                          <MDBModalContent>
                            <MDBModalHeader>
                              <MDBModalTitle>
                                Delete {assignment.title}
                              </MDBModalTitle>
                              <Button
                                className="btn-close"
                                color="none"
                                onClick={toggleOpen}
                              ></Button>
                            </MDBModalHeader>
                            <MDBModalBody>
                              Do you want to delete {assignment.title}{' '}
                              assignment?
                            </MDBModalBody>

                            <MDBModalFooter>
                              <Button
                                className="btn btn-light"
                                onClick={toggleOpen}
                              >
                                Close
                              </Button>
                              <Button
                                className="btn btn-danger"
                                onClick={() => {
                                  dispatch(deleteAssignment(assignment._id));
                                  toggleOpen();
                                }}
                              >
                                Save changes
                              </Button>
                            </MDBModalFooter>
                          </MDBModalContent>
                        </MDBModalDialog>
                      </MDBModal>
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
