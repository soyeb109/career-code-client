import React from "react";
import useAuth from "../../hooks/useAuth";
import { Suspense } from "react";
import MyPostedJobList from "./MyPostedJobList";
import { jobsCreatedByPromise } from "../../api/jobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>My Posted Jobs: </h1>
      <Suspense>
        <MyPostedJobList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
