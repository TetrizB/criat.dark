
'use client';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const videos = [
    "https://cdn.shopify.com/videos/c/o/v/78792378591140d0a3dde5c5a7d6f792.mp4",
    "https://cdn.shopify.com/videos/c/o/v/a4717d4733244d59a6f51a6fac6bccd4.mp4",
    "https://cdn.shopify.com/videos/c/o/v/dbde91bc97d64006b4e6ba172f6ae881.mp4",
    "https://cdn.shopify.com/videos/c/o/v/2bc8d8cf4851497d9929b01ee07cfe48.mp4",
    "https://cdn.shopify.com/videos/c/o/v/5776afcecb164b6eafbfeba793e6b2c0.mp4",
    "https://cdn.shopify.com/videos/c/o/v/b3250f252c094aa68993084deb43f1c6.mp4"
];

export function VideoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mt-12"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {videos.map((videoSrc, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 flex justify-center">
            <div className="p-1 w-full max-w-[280px]">
              <Card className="overflow-hidden border-2 border-border/40 aspect-[9/16]">
                <CardContent className="flex items-center justify-center p-0 bg-black h-full">
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
