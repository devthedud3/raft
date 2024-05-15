import React from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import Link from "next/link";

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  return (
    <header className=" flex justify-center ">
      <div className="py-5 px-24 flex items-center w-full justify-between">
        <Logo />
        <div className="inline-flex space-x-6 text-[--primary] items-center">
          <div className="flex tex-sm group flex-col">
            <Link href="/">Login</Link>
            <div
              className={`transition-w ease-in duration-100 border-b w-0 group-hover:border-black group-hover:w-full`}
            />
          </div>
          <Button name="Schedule a demo" />
        </div>
      </div>
    </header>
  );
};
