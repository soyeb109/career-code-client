import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { job } = useLoaderData();
  console.log(job);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen p-7">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{job.company} is Hiring!</h1>
            <h2>{job.title}</h2>
            <p className="py-6">{job.description}</p>
            <h4>Job Type: {job.jobType}</h4>
            <h5>Location: {job.location}</h5>
            <h5>{job.category}</h5>
            <h5>Application Deadline: {job.applicationDeadline}</h5>

            <h2>Responsibilities:</h2>
            {job.responsibilities.map((resp) => (
              <div className="badge badge-soft badge-secondary">{resp}</div>
            ))}
            <h2>Requirements:</h2>
            {job.requirements.map((req) => (
              <div className="badge badge-soft badge-secondary">{req}</div>
            ))}
            <div className="text-purple-300 text-center my-4">
              <h4>Job Status: {job.status}</h4>
              <h4>HR Name: {job.hr_name}</h4>
              <h4>HR Email: {job.hr_email}</h4>
            </div>
            <div className="card-actions justify-end">
              <Link to="/">
                <button className="btn btn-primary">Apply Now!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
