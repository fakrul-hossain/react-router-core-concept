import React from "react";


const Link = ({route}) => {

    const{name,path} = route;

  return (
    <div>
      <li className="mr-6 font-semibold text-xl py-2 hover:bg-purple-600 hover:text-white  rounded-lg">
        <a className="p-3 text-center transition-transform" href={path}>{name}</a>
      </li>
    </div>
  );
};

export default Link;
