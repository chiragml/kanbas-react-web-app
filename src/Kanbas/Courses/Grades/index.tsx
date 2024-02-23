import { assignments, enrollments, grades, users } from '../../Database';
import { useParams } from 'react-router-dom';
import './../../style.css';
import './index.css';
import { FaFileExport, FaFileImport } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  // -----------------------------------

  // ----------------------------------

  return (
    <>
      <div>
        <h4>Grades</h4>
        <div className="float-end">
          <button type="button" className="btn btn-light">
            <FaFileImport /> Import
          </button>
          <button type="button" className="btn btn-light">
            <FaFileExport /> Export
          </button>
          <button type="button" className="btn btn-light">
            <FaGear />
          </button>
        </div>
        <div style={{ padding: '10px', margin: '10px' }}>
          <form>
            <div className="row">
              <div className="col">
                <label>Student Names</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Students"
                />
              </div>
              <div className="col">
                <label>Assignment Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Assignment"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <th>Student Name</th>
              {as.map((assignment) => (
                <th>{assignment.title}</th>
              ))}
            </thead>
            <tbody className="table-striped">
              {es.map((enrollment) => {
                const user = users.find((user) => user._id === enrollment.user);
                return (
                  <tr>
                    <td>
                      {user?.firstName} {user?.lastName}
                    </td>
                    {as.map((assignment) => {
                      const grade = grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id &&
                          assignment.course === courseId
                      );
                      return <td>{grade?.grade || ''}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Grades;
