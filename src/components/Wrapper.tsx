import { classNames } from "@/lib";
import React from "react";

type WrapperProps = {
  className?: string;
  children: React.ReactNode | JSX.Element;
};
export const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div
      className={classNames(
        className ?? "",
        "bg-white w-fit border-2 border-black px-4 py-2"
      )}
    >
      {children}
    </div>
  );
};
