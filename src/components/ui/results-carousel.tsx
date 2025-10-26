
'use client';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const studentResults = [
  {
    src: "https://i.postimg.cc/j2D7VDJb/002-1759538735160-BRt3Iiiq.jpg",
    alt: "Resultado de aluno 1",
    hint: "sales chart"
  },
  {
    src: "https://i.postimg.cc/brZtXZ2f/004-1759538735161-1ug-A2zur.jpg",
    alt: "Resultado de aluno 2",
    hint: "sales notification"
  },
  {
    src: "https://i.postimg.cc/Qt4TnQVh/006-1759538735159-C2YZ2O4m.png",
    alt: "Resultado de aluno 3",
    hint: "earnings screenshot"
  },
  {
    src: "https://i.postimg.cc/Kj1MX1gy/007-1759538735159-C3rs-qpl.jpg",
    alt: "Resultado de aluno 4",
    hint: "testimonial message"
  },
];

export function ResultsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
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
        {studentResults.map((result, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden border-2 border-border/40">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={result.src}
                    alt={result.alt}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    data-ai-hint={result.hint}
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
