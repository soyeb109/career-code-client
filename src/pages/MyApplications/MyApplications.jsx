import React from "react";
import ApplicationStat from "./ApplicationStat";
import ApplicationList from "./ApplicationList";
import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = useAuth();

  return (
    <div>
      <ApplicationStat />
      <Suspense fallback={"loading your applications"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
