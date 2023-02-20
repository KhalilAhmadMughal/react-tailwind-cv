import React from "react";

const SocialMedia = (props) => {
  return (
    <div className="flex justify-center gap-6 text-2xl text-gray-500 first-line:text-2xl">
      <props.icons.twitter />
      <props.icons.linkedin />
      <props.icons.facebook />
      <props.icons.instagram />
      <props.icons.youtube />
    </div>
  );
};

export default SocialMedia;
