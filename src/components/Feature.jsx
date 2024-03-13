import React from "react";
import { FEATURES } from "../contants";
import { DownBounce, FadeIn } from "../contants/framervariants";
import { motion } from "framer-motion";

function Feature() {
  return (
    <section className=" pb-20 md:pb-0 flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat pt-24">
      <div className="max-container padding-container relative w-full justify-end flex">
        <div className="flex flex-1 lg:min-h-[900px]">
          <motion.img
            initial={{ rotate: 0, x: -100, opacity: 0 }}
            whileInView={{
              rotate: 15,
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 200,
                bounce: 0.5,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            src="phone.png"
            alt="phone"
            width={400}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <motion.img
              variants={DownBounce}
              initial="hidden"
              whileInView={"animate"}
              viewport={{ once: true, amount: "full" }}
              src="camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px] z-10"
            />
            <motion.h2
              variants={FadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              className="bold-40 lg:bold-64 z-0"
            >
              Our Features
            </motion.h2>
          </div>
          <motion.ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature, i) => (
              <FeatureItem
                i={i}
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ i, title, icon, description }) => {
  return (
    <motion.li
      variants={FadeIn("up", i * 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="w-full flex flex-1 flex-col items-start"
    >
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <img src={icon} alit="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </motion.li>
  );
};

export default Feature;
