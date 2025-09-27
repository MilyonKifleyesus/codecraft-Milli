"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="heading-h2 mb-5 font-bold md:mb-6">
          Ready to build something great
        </h2>
        <p className="text-medium">
          Let's discuss your project and turn your digital vision into reality
          with precision and creativity.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Contact">Contact</Button>
          <Button title="Learn more" variant="secondary">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
