"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="heading-h2 mb-5 font-bold md:mb-6">
          Let's build something remarkable
        </h2>
        <p className="text-medium">
          Interested in collaborating or want to discuss a potential project?
          I'm always open to innovative challenges.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Contact me">Contact me</Button>
          <Button title="View resume" variant="secondary">
            View resume
          </Button>
        </div>
      </div>
    </section>
  );
}
