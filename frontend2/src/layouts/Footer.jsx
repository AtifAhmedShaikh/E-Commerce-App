import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="w-full h-[33vh] bg-gray-800 text-gray-100 px-5 flex justify-between place-items-center gap-3">
        <div className="w-1/3 flex flex-col items-start">
          <h4 className="text-left mb-4 text-2xl">About Projects</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium quos voluptates voluptatum cupiditate cumque dolor
            consequatur totam iste iure voluptatem excepturi architecto, qui non
            vero quo recusandae sapiente soluta, facere fugit. Aperiam,
            perspiciatis?
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-start">
          <h4 className="text-left mb-4 text-2xl">Project Dependencies</h4>
          <ul>
            <li className="mb-1">react-dom</li>
            <li className="mb-1">react-router-dom</li>
            <li className="mb-1">redux redux/Toolkit</li>
            <li className="mb-1">axios</li>
          </ul>
        </div>
        <div className="w-1/3 flex flex-col items-start">
          <h4 className="text-left mb-4 text-2xl">Project Technologies</h4>
          <ul>
            <li className="mb-1">React</li>
            <li className="mb-1">Nodejs</li>
            <li className="mb-1">Express</li>
            <li className="mb-1">Mongo Db Atlas/campus</li>
          </ul>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
