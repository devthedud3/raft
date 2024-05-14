import Image from "next/image";
import { Button } from "./ui/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-center px-24">
      <section className="w-full flex ">
        <div className="w-1/2">
          <h1 className="text-6xl text-[--primary] font-black pb-4">
            Hire top Remote Software Engineers now.
          </h1>
          <p className="text-sm text-[--primary-light]">
            Get exclusive access to top quality, verified, Software Engineers
            who are available to work within your timezone.
          </p>
          <div className="border-b border-[--border] flex items-end justify-between pt-24">
            <p className="p-3 text-[--primary-light] text-sm">
              your_email@gmail.com
            </p>
            <Button name="Find Engineer" />
          </div>
        </div>
        {/* <div>
          <h1 className="text-6xl text-[--primary] font-black">
            Hire top Remote Software Engineers now.
          </h1>
        </div> */}
      </section>
    </main>
  );
}
