import Image from "next/image";
import { Button } from "./ui/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <section className="block lg:flex h-fit pt-48 px-24 justify-between">
        <div className="lg:w-1/2 h-full">
          <h1 className="text-6xl text-[--primary] font-black pb-4">
            Hire top Remote Freelance Engineers now.
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
