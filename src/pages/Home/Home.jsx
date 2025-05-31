import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import { Suspense } from "react";

const jobsPromise = fetch("http://localhost:5000/jobs").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={"loading hot jobs"}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
