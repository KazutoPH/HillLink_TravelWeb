import React from "react";
import { DownBounce, FadeIn, ScaleAnimation } from "../contants/framervariants";
import { motion } from "framer-motion";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <motion.img
          variants={DownBounce}
          initial="hidden"
          whileInView={"animate"}
          viewport={{ once: true, amount: "full" }}
          src="camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <motion.p
          variants={FadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          className="uppercase regular-18 -mt-1 mb-3 text-green-50"
        >
          we are here for you
        </motion.p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <motion.h2
            variants={FadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="bold-40 lg:bold-64 xl:max-w-[390px]"
          >
            Guide you to Easy Path
          </motion.h2>
          <motion.p
            variants={FadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="regular-16 text-gray-30 xl:max-w-[520px]"
          >
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </motion.p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <img
          src="boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <motion.div
          variants={ScaleAnimation}
          initial="hidden"
          whileInView={"animate"}
          viewport={{ once: true, amount: 0.5 }}
          className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20"
        >
          <img
            src="meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <p className="bold-16 text-green-50">48 min</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guide;
