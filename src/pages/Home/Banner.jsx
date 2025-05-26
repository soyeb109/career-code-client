import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{
              y: [100, 150, 100],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-2xl shadow-3xl"
          />
          <motion.img
            src={team2}
            animate={{
              x: [100, 150, 100],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-2xl shadow-3xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            Remote {""}
            <motion.span
              animate={{
                color: ["#163ece", "#18bedb", "#13bf2a"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              Jobs {""}
            </motion.span>
            For you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
