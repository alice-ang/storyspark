"use client";

import React, { useState } from "react";
import { Logo } from ".";
import { FaHamburger } from "react-icons/fa";
import { classNames } from "@/lib";

export const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={"md:hidden overflow-hidden"}
      onClick={() => setToggle(!toggle)}
    >
      <nav className="md:hidden flex justify-between items-center p-4">
        <Logo />

        <button
          type="button"
          className="p-2 border-2 border-black rounded-xl bg-yellow-500"
          onClick={() => setToggle(!toggle)}
        >
          <FaHamburger size={28} />
        </button>
      </nav>

      <div
        className={classNames(
          toggle ? "translate-x-0" : "-translate-x-full",
          "bg-white  top-0 min-h-screen fixed w-full p-4 border-r-2 border-black space-y-4 ease-in-out duration-300"
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            className="font-bold text-3xl p-2"
            onClick={() => setToggle(!toggle)}
          >
            X
          </button>
        </div>

        <ul className="space-y-2">
          {[0, 1, 2, 3].map((index) => (
            <li key={index} className="font-semibold text-xl">
              item
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
