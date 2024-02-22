import { FaBan, FaCheckCircle } from 'react-icons/fa';
import './../../style.css';
import './index.css';
import TodoItem from '../Home/todo';
function Status() {
  return (
    <div
      className="flex-grow-0 me-3 d-none d-xl-block"
      style={{ width: '250px' }}
    >
      <div className="card">
        <h3 className="card-header mt-3">Course Status</h3>
        <div className="card-body">
          <div className="btn-group">
            <button className="btn btn-light mr-2">
              <FaBan />
              Unpublish
            </button>
            <button className="btn btn-success mr-2" style={{ width: '100px' }}>
              <FaCheckCircle />
              Published
            </button>
          </div>

          <ul className="list-group mt-1 wd-list-status">
            <li className="list-group-item">
              <a className="dec" href="#">
                Import Existing Content
              </a>
            </li>
            <li className="list-group-item">
              <a className="dec" href="#">
                Import From Commons
              </a>
            </li>
            <li className="list-group-item">
              <a className="dec" href="#">
                Choose Home Paget
              </a>
            </li>
            <li className="list-group-item">
              <a className="dec" href="#">
                View course Stream
              </a>
            </li>
            <li className="list-group-item">
              <a className="dec" href="#">
                New Announcement
              </a>
            </li>
            <li className="list-group-item">
              <a className="dec" href="#">
                New Analytics
              </a>
            </li>
            <li className="list-group-item">
              <a className="dec" href="#">
                Vew Course Notifications
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="card-header">Todo</h3>
          <div className="card-body">
            <ul className="list-group event mt-2">
              <li className=" lower-status">
                <a href="#"> Grade A1 </a>
                <p> Assignment 1 pls grade it!</p>
              </li>
              <li className="lower-status">
                <a href="#"> Listen to the Hybrid Theory </a>
                <p>Every single day non stop</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Status;
