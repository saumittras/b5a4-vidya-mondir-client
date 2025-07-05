import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionTitle from "../SectionTitle";

export function GetInTouch() {
  return (
    <div className="w-full bg-red-500 h-96 flex flex-col justify-center ">
      <div>
        <SectionTitle title="Stay in Touch with Our Updates" details="" />
      </div>
      <div className="flex w-full max-w-sm mx-auto items-center gap-2">
        <Input className="" type="email" placeholder="Email" />
        <Button type="submit" variant="outline">
          Get in Touch
        </Button>
      </div>
    </div>
  );
}
