import { classNames } from "@/lib";
import React from "react";

type ContainerProps = {
  children: React.ReactNode | JSX.Element;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={classNames(className ?? "", "p-4 flex justify-center")}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};
