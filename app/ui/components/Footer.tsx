import React from "react";
import { Logo } from "./Logo";
import { footer, socials } from "@/app/lib/data";
import { IC } from "@/public/Icons";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="border-t border-[--border]">
      <div className="px-24">
        <div className="py-10 flex lg:space-x-10">
          <div className="space-y-6">
            <Logo />
            <p className="text-xs w-96 opacity-60">
              Partner with TechSynergy Solutions and unlock the full potential
              of your business in the digital world.
            </p>
            <div className="flex space-x-4 ">
              {socials.map(({ name, link }: any, index: number) => {
                return (
                  <div
                    className="cursor-pointer transition hover:scale-105"
                    key={index}
                  >
                    {IC[name]}
                  </div>
                );
              })}
            </div>
            <p className="text-xs w-fit px-3 py-1 border rounded-full opacity-30">
              🟢 In development
            </p>
          </div>
          {footer.map(({ name, tabs }: any, index: number) => {
            return (
              <div className="w-32">
                <h2 className="text-sm font-bold">{name}</h2>
                <div className="pt-6 space-y-2 opacity-60">
                  {tabs.map((v: any, i: number) => {
                    return (
                      <div className="transition-w duration-100 text-xs border-[--primary] hover:border-l-4 hover:pl-3 cursor-pointer">
                        <p className="">{v}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-[--border] py-10 text-xs">
          <div className="flex w-full justify-between">
            <p>Copywrite © 2024 Chain Spark LLC. All rights reserved.</p>
            <div className="flex space-x-3">
              <p>Privacy Policy</p>
              <p>Terms</p>
              <p>Code of Conduct</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
