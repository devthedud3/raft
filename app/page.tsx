import Image from "next/image";
import { Button } from "./ui/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <section className="inline-flex h-fit pt-48 px-24 justify-between">
        <div className="w-1/2 h-full">
          <h1 className="text-6xl text-[--primary] font-black pb-4">
            Hire top Remote Software Engineers now.
          </h1>
          <p className="text-sm text-[--primary-light]">
            Get exclusive access to top quality, verified, Software Engineers
            who are available to work within your timezone.
          </p>
          <div className=" flex items-end space-x-3 pt-24">
            <input
              type="email"
              className="p-3 text-[--primary] text-sm bg-transparent w-1/2 outline-none border-b border-[--border]"
              placeholder="your_email@gmail.com"
            />

            <Button name="Join waiting list" />
          </div>
          {/* <div className=" h-full rotate-90 animate-pulse flex items-end translate-x-12">
            <div className="flex items-center w-fit">
              <p className="text-xs text-[--primary] text-nowrap pr-2">
                learn more
              </p>
              <div className="border-b border-[--primary] h-1 w-32" />
            </div>
          </div> */}
          <Image
            className="pt-10 animate-pulse"
            src="/learn-more.svg"
            alt=""
            width={15}
            height={200}
            style={{ width: "auto", height: "300px" }}
          />
        </div>
        <div className="relative r-0 flex items-center justify-center -translate-y-24">
          <Image
            src="/group.png"
            alt=""
            width={2000}
            height={2000}
            priority
            style={{ width: "auto", height: "900px" }}
          />
        </div>
      </section>
    </main>
  );
}
