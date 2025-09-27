"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio11() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Recent projects</h2>
          <p className="text-medium">
            Innovative solutions that demonstrate technical skill and creative
            problem-solving.
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
              <a href="#">Web application</a>
            </h3>
            <p>
              Responsive and dynamic platform integrating modern web
              technologies.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">React</a>
              </Badge>
              <Badge>
                <a href="#">Frontend</a>
              </Badge>
              <Badge>
                <a href="#">Fullstack</a>
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
              Interactive dashboard for complex data analysis and
              representation.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">D3.js</a>
              </Badge>
              <Badge>
                <a href="#">Data</a>
              </Badge>
              <Badge>
                <a href="#">Analytics</a>
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
              <a href="#">Mobile application</a>
            </h3>
            <p>
              Cross-platform mobile solution with intuitive user experience.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">React Native</a>
              </Badge>
              <Badge>
                <a href="#">Mobile</a>
              </Badge>
              <Badge>
                <a href="#">UI/UX</a>
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
