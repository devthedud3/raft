import { Button } from "./ui/components";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h2>
        This site is either currently in development or being used for portfolio
        purposes.
      </h2>
      <p className="my-6">Check back in a few days for possible updates.</p>
      <Button name="Return Home" link="/" />
    </div>
  );
}
