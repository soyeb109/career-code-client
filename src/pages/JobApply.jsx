import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);
  };

  return (
    <div>
      <h1 className="text-4xl">
        Apply for this job: <Link to={`/jobs/${jobId}`}>details</Link>
      </h1>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Linkedin Link</label>
          <input
            name="linkedin"
            type="url"
            className="input"
            placeholder="Linkedin profile link"
          />

          <label className="label">Github Link</label>
          <input
            name="github"
            type="url"
            className="input"
            placeholder="Github Profile Link"
          />

          <label className="label">Resume Link</label>
          <input
            name="resume"
            type="url"
            className="input"
            placeholder="Resume Link"
          />
          <input type="submit" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
