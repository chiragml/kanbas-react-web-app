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
import { FaCaretDown } from 'react-icons/fa';
import './../style.css';
import './index.css';
import Home from './Home';
import Modules from './Modules';
import AssignmentEditor from './Assignments/Editor';
import Grades from './Grades';
import KanbasNavigation from '../Navigation';
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

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);
  const linkName = location.pathname.split('/').pop();

  const [show, setShow] = useState(false);
  const toggleOpen = () => setShow(!show);
  const [show2, setShow2] = useState(false);

  return (
    <div className="wd-flex-grow-1 ">
      <hr />
      <nav className="" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li>
            <div className="col-2 breadcrumb-item course_hamburger">
              <Button
                className="nextButton btn btn-light course_hamburger"
                onClick={() => {
                  setShow(true);
                }}
              >
                <HiMiniBars3 />
              </Button>
              {course?._id} {course?.name} &gt;
              <MDBModal open={show} setOpen={setShow} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <Button
                        className="btn-close"
                        color="none"
                        onClick={toggleOpen}
                      ></Button>
                    </MDBModalHeader>
                    <MDBModalBody className="modal-pos">
                      <KanbasNavigation />
                    </MDBModalBody>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </div>
          </li>
          <li className="breadcrumb-item active">{linkName}</li>

          <div className="float-end">
            <Button
              className="nextButton btn btn-light d-sm-block d-md-none"
              onClick={() => {
                setShow2(true);
              }}
            >
              <FaCaretDown />
            </Button>
            <Modal
              show={show2}
              onHide={() => {
                setShow2(false);
              }}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body className="kanbas-navigation-hamburger">
                <CourseNavigation />
              </Modal.Body>
            </Modal>
          </div>
        </ol>
      </nav>

      <hr />

      <div className="row">
        <div className="col-2 d-sm-none d-md-block">
          <CourseNavigation />
        </div>

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
