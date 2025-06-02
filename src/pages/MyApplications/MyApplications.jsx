import React from "react";
import ApplicationStat from "./ApplicationStat";
import ApplicationList from "./ApplicationList";
import { Suspense } from "react";

const MyApplications = () => {
  return (
    <div>
      <ApplicationStat />
      <Suspense fallback={"loading your applications"}>
        <ApplicationList />
      </Suspense>
    </div>
  );
};

export default MyApplications;
