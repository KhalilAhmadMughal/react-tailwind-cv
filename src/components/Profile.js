import React from "react";

const Profile = (props) => {
  return (
    <div className="mx-auto mt-10 h-64 w-64 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-96 md:w-96">
      <img
        src={props.images.devWave}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Profile;
