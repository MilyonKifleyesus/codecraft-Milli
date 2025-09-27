"use client";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio11() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Work</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Selected projects that define my journey
          </h2>
          <p className="text-medium">
            A curated showcase of digital solutions that solve real-world
            challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="heading-h5 mb-2 font-bold">
              <a href="#">E-commerce platform</a>
            </h3>
            <p>
              Responsive web application integrating modern payment systems and
              user-friendly design.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">React</a>
              </Badge>
              <Badge>
                <a href="#">TypeScript</a>
              </Badge>
              <Badge>
                <a href="#">Supabase</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="heading-h5 mb-2 font-bold">
              <a href="#">Data visualization tool</a>
            </h3>
            <p>
              Interactive dashboard transforming complex data into clear,
              actionable insights.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">D3.js</a>
              </Badge>
              <Badge>
                <a href="#">React</a>
              </Badge>
              <Badge>
                <a href="#">Three.js</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="heading-h5 mb-2 font-bold">
              <a href="#">Mobile game prototype</a>
            </h3>
            <p>
              Innovative mobile game exploring unique interaction design and
              immersive gameplay mechanics.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Unity</a>
              </Badge>
              <Badge>
                <a href="#">C#</a>
              </Badge>
              <Badge>
                <a href="#">Game design</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all projects" variant="secondary">
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
}
