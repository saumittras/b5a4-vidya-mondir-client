import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent } from "../ui/card";
import ItemCard from "./ItemCard";

export function CardCarousel() {
  return (
    <Carousel className="w-11/12 mx-auto">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <ItemCard />
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
