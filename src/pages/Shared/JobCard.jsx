import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="flex gap-2 ">
          <figure>
            <img className="w-16" src={company_logo} alt="Company Image" />
          </figure>
          <div>
            <h3 className="text-4xl">{company}</h3>
            <p className="flex items-center gap-1.5">
              <FaMapMarkerAlt /> {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <p>{description}</p>
          <div className="card-actions ">
            {requirements.map((skill, index) => (
              <div className="badge badge-outline" key={index}>
                {skill}
              </div>
            ))}
          </div>
          <div className="card-actions justify-end">
            <Link to={`/jobs/${job._id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
