"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaCirclePlay } from "react-icons/fa6";

export function Testimonial14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div className="order-last md:order-first">
            <Dialog>
              <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                  alt="Relume placeholder image"
                  className="size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="heading-h5 font-bold">
              "Milyon's work transforms complex technical challenges into
              elegant digital solutions that exceed expectations."
            </blockquote>
            <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
              <div>
                <p className="font-semibold">Project stakeholder</p>
                <p>Digital innovation team</p>
              </div>
              <div className="mx-4 w-px self-stretch bg-scheme-border sm:mx-0" />
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo 1"
                  className="max-h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
