import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addModule, deleteModule, updateModule, setModule } from './reducer';
import { KanbasState } from '../../store';
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <br />
        <textarea
          className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <br />
        <button
          className="btn btn-success"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          className="btn btn-light"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
        <br />
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="float-end">
              <button
                className="btn btn-light"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              &ensp;
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
            </div>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
