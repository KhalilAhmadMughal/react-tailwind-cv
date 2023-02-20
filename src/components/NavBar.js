import React from "react";

const NavBar = (props) => {
  return (
    <nav className="flex justify-between py-2">
      <h1 className="pl-2 font-burtons text-lg font-bold">Developer</h1>
      <ul className="mr-2 flex space-x-4">
        <li>
          <props.icons.moon className="min-h-full cursor-pointer" />
        </li>
        <li>
          <a
            className="rounded-lg bg-gradient-to-r from-blue-400 to-teal-500 px-2 py-1 text-white"
            href="./App.js/#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
