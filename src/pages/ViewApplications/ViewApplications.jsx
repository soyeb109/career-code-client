import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, application) => {
    console.log(e.target.value, application);

    axios
      .patch(`http://localhost:5000/applications?email=${email}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>
        {applications.length} Applications for: {job_id}
      </h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Employer</th>
            <th>Deadline</th>
            <th>View Applications</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {applications.map((application, index) => (
            <tr key={application._id}>
              <th>{index + 1}</th>
              <td>{application.applicant}</td>
              <td>{application.deadline}</td>
              <td>
                <select
                  onChange={(e) => handleStatusChange(e, application._id)}
                  defaultValue={application.status}
                  className="select select-primary"
                >
                  <option disabled={true}>Pick a text editor</option>
                  <option>Pending</option>
                  <option>Interview</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
