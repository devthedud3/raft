import React from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  return (
    <header className="absolute w-full flex justify-between py-10 px-24">
      <Logo />
      <Button name="Hire Engineers Now" />
    </header>
  );
};
