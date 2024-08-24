"use client";
import React, { useState } from "react";
import MenuOverlay from "./menu-overlay";

const navigationItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "New",
    path: "/",
  },
  {
    label: "Popular",
    path: "/",
  },
  {
    label: "Trending",
    path: "/",
  },
  {
    label: "Categories",
    path: "/",
  },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <button
        className="lg:hidden flex flex-col w-8 [&>*:not(:last-child)]:mb-1"
        onClick={() => setMenuOpen(true)}
      >
        <span className="bg-very-dark-blue w-full h-1"></span>
        <span className="bg-very-dark-blue w-full h-1"></span>
        <span className="bg-very-dark-blue w-full h-1"></span>
      </button>

      <div className="hidden lg:flex items-center [&>*:not(:last-child)]:mr-4">
        {navigationItems.map((item, index) => {
          return (
            <button
              key={index}
              className="text-dark-grayish-blue hover:text-soft-orange"
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {true && (
        <MenuOverlay
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          navigationItems={navigationItems}
        />
      )}
    </div>
  );
};

export default Navigation;
