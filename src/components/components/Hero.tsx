"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router";

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const slides = [
    {
      id: 1,
      title: "Journey Through Pages",
      subtitle: "Dive into stories that shape the world.",
      image: img1,
      buttonText: "Read Now",
    },
    {
      id: 2,
      title: "Unlock Your Imagination",
      subtitle: "Books are a gateway to endless creativity.",
      image: img2,
      buttonText: "Explore Books",
    },
    {
      id: 3,
      title: "Learn Something New",
      subtitle: "Knowledge is just one page away.",
      image: img3,
      buttonText: "Start Learning",
    },
    {
      id: 4,
      title: "Fictional Worlds Await",
      subtitle: "Escape reality through powerful storytelling.",
      image: img4,
      buttonText: "Browse Fiction",
    },
    {
      id: 5,
      title: "Feed Your Mind",
      subtitle: "Grow smarter with every chapter.",
      image: img5,
      buttonText: "Grow Now",
    },
    {
      id: 6,
      title: "Discover Rare Classics",
      subtitle: "Timeless books for timeless minds.",
      image: img6,
      buttonText: "View Classics",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mx-auto h-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative p-1">
              <div className="overflow-hidden">
                <CardContent className="relative aspect-[18/7] p-0">
                  {/* 🖼️ Book Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full rounded-t-2xl object-cover"
                  />

                  {/* 🔤 Overlay Content */}
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center sm: px-2 lg:px-4">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                      {slide.title}
                    </h2>
                    <p className="mb-4">{slide.subtitle}</p>
                    <Link
                      to={"/all-books"}
                      className="btn sm:rounded-xl lg:rounded-3xl"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </CardContent>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-15 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-15 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
}
