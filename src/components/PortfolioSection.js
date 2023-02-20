import React from "react";

const PortfolioSection = (props) => {
  return (
    <section className="mx-2 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="flex-1 basis-1/3">
        <img
          src={props.images.web1}
          className="h-full w-full rounded-lg object-cover "
          alt=""
        />
      </div>
      <div className="flex-1 basis-1/3">
        <img
          src={props.images.web2}
          className="h-full w-full rounded-lg object-cover "
          alt=""
        />
      </div>
      <div className="flex-1 basis-1/3">
        <img
          src={props.images.web3}
          className="h-full w-full rounded-lg object-cover "
          alt=""
        />
      </div>
      <div className="flex-1 basis-1/3">
        <img
          src={props.images.web4}
          className="h-full w-full rounded-lg object-cover "
          alt=""
        />
      </div>
      <div className="flex-1 basis-1/3">
        <img
          src={props.images.web5}
          className="h-full w-full rounded-lg object-cover "
          alt=""
        />
      </div>
      <div className="flex-1 basis-1/3">
        <img
          src={props.images.web6}
          className="h-full w-full rounded-lg object-cover "
          alt=""
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
