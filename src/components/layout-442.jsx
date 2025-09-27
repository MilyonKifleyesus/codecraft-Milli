"use client";

import { Button } from "./ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout442() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">Ship</p>
            <h2 className="heading-h2 font-bold text-white">
              Mobile app development expertise
            </h2>
          </div>
          <div className="mx-[7.5%] md:mt-48">
            <p className="text-medium text-white">
              Creating cross-platform mobile applications that deliver seamless
              user experiences and robust performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="View apps" variant="secondary-alt">
                View apps
              </Button>
              <Button
                title="Portfolio"
                variant="link-alt"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Portfolio
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
