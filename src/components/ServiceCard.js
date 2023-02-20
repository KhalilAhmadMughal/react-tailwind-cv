import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="my-10 rounded-xl border p-10 text-center shadow-lg">
      <div className="mx-auto mb-5 h-20 w-20">
        <img
          src={props.picture}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <h2 className="font-burtons text-lg font-bold capitalize">
        {props.title}
      </h2>
      <p className="font-burtons text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo omnis
        exercitationem laboriosam consectetur.
      </p>
      <h3 className="text-md font-burtons font-bold capitalize text-teal-500 ">
        Designing tool i use
      </h3>
      <p className="font-burtons text-sm font-bold capitalize leading-6">
        photoshop
      </p>
      <p className="font-burtons text-sm font-bold capitalize leading-6">
        illistrator
      </p>
      <p className="font-burtons text-sm font-bold capitalize leading-6">
        figma
      </p>
    </div>
  );
};
export default ServiceCard;
