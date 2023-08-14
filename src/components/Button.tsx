import { classNames } from "@/lib";
import React from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode | JSX.Element;
  type?: "button" | "submit" | "reset" | undefined;
};
export const Button = ({
  className,
  children,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(
        className ?? "bg-yellow-500 hover:bg-black hover:text-white",
        "font-semibold border-2 border-black rounded-xl px-4 py-2 hover:scale-105 ease-in-out duration-200"
      )}
    >
      {children}
    </button>
  );
};
