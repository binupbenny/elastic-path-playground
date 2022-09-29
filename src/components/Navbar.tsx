import React from "react";


const Navbar : React.FC = () => {

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-blue-700">
        <img alt="my logo " className="w-40" src="https://www.elasticpath.com/themes/custom/bootstrap_sass/logo.svg" />
    </div>
  );
};

export default Navbar;
