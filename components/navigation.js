import React from "react";

const Navigation = () => {
  return (
    <div>
      <button className="lg:hidden flex flex-col w-12 [&>*:not(:last-child)]:mb-1">
        <span className="bg-very-dark-blue w-full h-1"></span>
        <span className="bg-very-dark-blue w-full h-1"></span>
        <span className="bg-very-dark-blue w-full h-1"></span>
      </button>
      <div className="hidden lg:flex items-center [&>*:not(:last-child)]:mr-4">
        <button className="text-dark-grayish-blue hover:text-soft-orange">
          Home
        </button>
        <button className="text-dark-grayish-blue hover:text-soft-orange">
          New
        </button>
        <button className="text-dark-grayish-blue hover:text-soft-orange">
          Popular
        </button>
        <button className="text-dark-grayish-blue hover:text-soft-orange">
          Trending
        </button>
        <button className="text-dark-grayish-blue hover:text-soft-orange">
          Categories
        </button>
      </div>
    </div>
  );
};

export default Navigation;
