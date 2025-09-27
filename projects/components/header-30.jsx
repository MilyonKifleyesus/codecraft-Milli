"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header30() {
  return (
    <section className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <h1 className="heading-h1 mb-5 font-bold text-white md:mb-6">
              Crafting digital experiences that matter
            </h1>
            <p className="text-medium text-white">
              A collection of projects that push the boundaries of web
              development and design. Each line of code tells a story of
              innovation and precision.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Projects">Projects</Button>
              <Button title="Contact" variant="secondary-alt">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
