import React from "react";

type ButtonProps = {
  name: string;
};

export const Button = ({ name }: ButtonProps) => {
  return (
    <div className="p-1 bg-[--background] border-2 border-[--border] w-fit rounded-tl-full rounded-tr-full rounded-bl-full">
      <div className="p-2 px-6 bg-[--primary] border border-black w-fit rounded-tl-full rounded-tr-full rounded-bl-full">
        <p className="text-[--background] text-sm">{name}</p>
      </div>
    </div>
  );
};
