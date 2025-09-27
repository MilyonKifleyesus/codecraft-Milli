"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing18() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Build</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Flexible pricing
          </h2>
          <p className="text-medium">
            Scalable solutions designed to meet your unique business
            requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
            <div>
              <div className="mb-6 text-center md:mb-8">
                <h6 className="heading-h6 font-bold">Starter</h6>
                <h1 className="heading-h1 my-2 font-bold">$1500</h1>
                <p>One-time project fee</p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Basic website development</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Responsive design</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Standard SEO optimization</p>
                </div>
              </div>
            </div>
            <div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </div>
          </Card>
          <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
            <div>
              <div className="mb-6 text-center md:mb-8">
                <h6 className="heading-h6 font-bold">Professional</h6>
                <h1 className="heading-h1 my-2 font-bold">$3000</h1>
                <p>Comprehensive project package</p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Custom web application</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced performance optimization</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Integrated CMS</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Ongoing support</p>
                </div>
              </div>
            </div>
            <div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </div>
          </Card>
          <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
            <div>
              <div className="mb-6 text-center md:mb-8">
                <h6 className="heading-h6 font-bold">Enterprise</h6>
                <h1 className="heading-h1 my-2 font-bold">$5000</h1>
                <p>Full digital transformation</p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Complex web ecosystem</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced security protocols</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Custom API integrations</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Dedicated support team</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Unlimited revisions</p>
                </div>
              </div>
            </div>
            <div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
