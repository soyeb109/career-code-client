import React from "react";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    //process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // process requirements
    const requirementsString = newJob.requirements;
    const requirementsWithWhiteSpace = requirementsString.split(",");
    const requirementsWithOutWhiteSpace = requirementsWithWhiteSpace.map(
      (requirement) => requirement.trim()
    );
    newJob.requirements = requirementsWithOutWhiteSpace;
    console.log(requirementsWithOutWhiteSpace);

    // responsibilites
    newJob.responsibilites = newJob.responsibilites
      .split(",")
      .map((res) => res.trim());
  };

  return (
    <div>
      <h1>Please add a job</h1>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic info</legend>

          <label className="label">Title</label>
          <input
            name="title"
            type="text"
            className="input"
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            name="company"
            type="text"
            className="input"
            placeholder="Enter company name"
          />

          <label className="label">Company Logo</label>
          <input
            name="company_logo"
            type="url"
            className="input"
            placeholder="Company Logo URL"
          />

          <label className="label">Location</label>
          <input
            name="location"
            type="text"
            className="input"
            placeholder="Enter company Location"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        {/*Job type  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>
        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select defaultValue="Job Category" className="select select-primary">
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Human Resource</option>
          </select>
        </fieldset>

        {/* Application Deadline  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline </legend>
          <input type="date" className="input" />
        </fieldset>

        {/* Salary range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <legend className="fieldset-legend">Salary Range</legend>

            <div>
              <label className="label">Minimum Salary</label>
              <input
                name="min"
                type="text"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                name="max"
                type="text"
                className="input"
                placeholder="Maximum salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                className="select select-primary"
                name="currency"
              >
                <option disabled={true}>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/*Job Description*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Enter Job Description"
          ></textarea>
        </fieldset>
        {/*Job Requirements*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Requirements (separate by comma)"
          ></textarea>
        </fieldset>
        {/*Job Resposibilities*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Resposibilities</legend>
          <textarea
            className="textarea"
            name="responsibilites"
            placeholder="Resposibilities (separated by comma)"
          ></textarea>
        </fieldset>
        {/* hr email */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>
          <label className="label">HR Name</label>
          <input
            name="hr_name"
            type="text"
            className="input"
            placeholder="Name"
          />
          <label className="label">HR Email</label>
          <input
            name="hr_email"
            defaultValue={user.email}
            type="email"
            className="input"
            placeholder="Email"
          />
          <input type="submit" value="Add Job" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
