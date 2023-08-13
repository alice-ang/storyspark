import React from "react";
import { Logo, Button } from "./";

export const Menu = () => {
  return (
    <nav className="hidden md:flex justify-between items-center p-4 max-w-7xl mx-auto">
      <Logo />
      <ul className="flex items-center space-x-4">
        {[0, 1, 2, 3].map((index) => (
          <li key={index} className="font-semibold">
            item
          </li>
        ))}
      </ul>
      <Button>Login</Button>
    </nav>
  );
};
