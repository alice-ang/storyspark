import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <h1 className="text-4xl font-bold text text-blue-500">S</h1>
        <h1 className="text-4xl font-bold text text-green-500">T</h1>
        <h1 className="text-4xl font-bold text text-orange-500">O</h1>
        <h1 className="text-4xl font-bold text text-red-500">R</h1>
        <h1 className="text-4xl font-bold text text-yellow-500">Y</h1>
      </div>
      <h1 className="hidden md:block text-4xl font-bold text px-2">SPARK</h1>
      <h1 className="text-4xl font-bold text">✨</h1>
    </div>
  );
};
