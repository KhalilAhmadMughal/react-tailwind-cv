import React from "react";
const ServiceDescription = (props) => {
  return (
    <div className="mx-5">
      <h3 className="mb-3 font-burtons text-3xl capitalize">{props.title}</h3>
      <p className="mb-2 text-justify font-burtons leading-5 text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        laudantium provident beatae aspernatur perferendis corporis facere
        perspiciatis, <span className="text-teal-500 ">pariatur</span> sequi
        enim voluptas accusantium{" "}
        <span className="text-teal-500">consectetur</span> quibusdam iusto
        quaerat, numquam quam repellendus tempore quasi. quibusdam iusto
        quaerat, numquam quam repellendus tempore quasi.
      </p>
      <p className="text-justify font-burtons leading-5 text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        laudantium provident beatae aspernatur perferendis corporis.
      </p>
    </div>
  );
};

export default ServiceDescription;
