import Link from "next/link";
import React from "react";

type ButtonProps = {
  name: string;
  link?: string;
};

export const Button = ({ name, link }: ButtonProps) => {
  return (
    <Link
      href={link || "/"}
      className="transition duration-200 p-1 bg-[--background] border border-[--border] w-fit rounded-tl-full rounded-tr-full rounded-bl-full hover:border-[--primary]"
    >
      <div className="py-3 px-6 bg-[--primary] w-fit rounded-tl-full rounded-tr-full rounded-bl-full">
        <p className="text-[--background] text-sm font-semibold text-nowrap">
          {name}
        </p>
      </div>
    </Link>
  );
};
