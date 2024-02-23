import React, { useState } from 'react';
import './../../style.css';
import './index.css';
import { modules } from '../../Database';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router';
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {/* <div className="wd-flex-grow-1"> */}
      <div className="list-group wd-modules">
        <div className="p-1 ">
          <div className="d-flex justify-content-end margin-bottom-wd">
            <button className="btn btn-light">Collapse All</button>
            <button className="btn btn-light ms-2">View Progress</button>
            <button
              className="btn btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              <FaCheckCircle className="text-success" /> Publish All
            </button>
            <button type="button" className="btn btn-danger ms-2">
              Module <FaPlusCircle className="ms-2" />
            </button>
            <button className="btn btn-light ms-2">
              <FaEllipsisV className="ms-2" />
            </button>
          </div>
        </div>
        <ul className="list-group wd-modules">
          {modulesList.map((module, index) => (
            <li
              key={index}
              className="list-group-item "
              onClick={() => setSelectedModule(module)}
            >
              <div className="header">
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson, index) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ModuleList;
