import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { assignments } from '../../../Database';
import './../../../style.css';
import { FaCheckCircle, FaEllipsisV } from 'react-icons/fa';
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log('Actually saving assignment TBD in later assignments');
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <>
      <div className="float-end">
        <span className="published">
          <FaCheckCircle /> Published
        </span>
        <button className="btn btn-light" style={{ margin: '5px' }}>
          {' '}
          <FaEllipsisV />
        </button>
      </div>
      <br />
      <br />
      <hr />
      <div>
        <h4>Assignment Name</h4>
        <input value={assignment?.title} className="form-control mb-2" />

        <button
          onClick={handleSave}
          className="btn btn-success ms-2 float-end"
          style={{ margin: '5px' }}
        >
          Save
        </button>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger float-end"
          style={{ margin: '5px', color: 'white' }}
        >
          Cancel
        </Link>
      </div>
    </>
  );
}
export default AssignmentEditor;
