import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaEllipsisV } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  addAssignment,
  setAssignment,
  updateAssignment,
} from '../assignmentsRudecer';
import { KanbasState } from '../../../store';

function AssignmentEditor() {
  const { courseId } = useParams();
  const { assignmentId } = useParams();
  const save = function (assignmentPassed: any) {
    // console.log('+++++++++++ 0 ' + assignmentPassed);
    if (assignmentPassed === 'AddAssignment') {
      return dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      return dispatch(updateAssignment(assignment));
    }
  };
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignment
  );
  // console.log(assignmentId);

  const dispatch = useDispatch();
  // console.log(updateAssignment(assignment));
  // console.log('+++++++++++ 0 ' + assignment);
  return (
    <>
      <div className="float-end">
        <span className="published">
          <FaCheckCircle /> Published
        </span>
        <button className="btn btn-light" style={{ margin: '5px' }}>
          <FaEllipsisV />
        </button>
      </div>
      <br />
      <br />
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="assignmentName" className="form-label">
            Assignment Name
          </label>
          <input
            id="assignmentName"
            type="text"
            value={assignment?.title}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, title: e.target.value }))
            }
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="assignmentDescription" className="form-label">
            New Assignment Description
          </label>
          <textarea
            id="assignmentDescription"
            className="form-control"
            rows={3}
            onChange={(e) =>
              dispatch(
                setAssignment({ ...assignment, description: e.target.value })
              )
            }
            value={assignment?.description}
          ></textarea>
        </div>

        {/* ---------------- Form ---------------------------- */}

        <div className="form-group mb-3 row">
          <label className="col-md-2">Points</label>
          <div className="col-md-8">
            <input
              type="number"
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, points: e.target.value })
                )
              }
              value={assignment?.points}
              className="form-control w-50"
              id="points"
              max="100"
              min="0"
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <div className="col-md-2">
            <label htmlFor="assignDate" className="form-label">
              Assign
            </label>
          </div>
          <div className="col-md-4">
            <label htmlFor="dueDate" className="form-label">
              Due
            </label>
            <input
              id="dueDate"
              type="date"
              className="form-control"
              onChange={(e) =>
                dispatch(setAssignment({ ...assignment, due: e.target.value }))
              }
              value={assignment?.due}
              // value={'2013-01-08'}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <label htmlFor="availableFromDate" className="form-label">
              Available From
            </label>
            <input
              id="availableFromDate"
              type="date"
              className="form-control"
              onChange={(e) =>
                dispatch(
                  setAssignment({
                    ...assignment,
                    availableFrom: e.target.value,
                  })
                )
              }
              value={assignment.availableFrom}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="untilDate" className="form-label">
              Until
            </label>
            <input
              id="untilDate"
              type="date"
              className="form-control"
              onChange={(e) =>
                dispatch(
                  setAssignment({
                    ...assignment,
                    until: e.target.value,
                  })
                )
              }
              value={assignment?.until}
            />
          </div>
        </div>
        <br />
        <hr />
        {/* ---------------- Form End ---------------------------- */}
        <div className="mb-3 text-end" style={{ margin: '20px' }}>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger me-2"
            style={{ margin: '5px', color: 'white' }}
          >
            Cancel
          </Link>

          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            // onClick={() => dispatch(updateAssignment(assignment))}
            onClick={() => save(assignmentId)}
            className="btn btn-success"
            style={{ margin: '5px' }}
          >
            Save
          </Link>
        </div>
      </form>
    </>
  );
}

export default AssignmentEditor;
