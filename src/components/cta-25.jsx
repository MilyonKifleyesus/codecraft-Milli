"use client";

import { Button } from "./ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="heading-h2 mb-5 font-bold md:mb-6">
          Let's build something great
        </h2>
        <p className="text-medium">
          Ready to turn your digital vision into reality? Connect with me to
          start your project.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Get started">Get started</Button>
          <Button title="Contact me" variant="secondary">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}
