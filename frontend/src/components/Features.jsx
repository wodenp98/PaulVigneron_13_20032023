import React from "react";
import features from "../data/dataFeatures";
import Feature from "./Feature";

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((item) => {
        return (
          <Feature
            key={item.title}
            icon={item.icon}
            title={item.title}
            paragraph={item.paragraph}
          />
        );
      })}
    </section>
  );
};

export default Features;
