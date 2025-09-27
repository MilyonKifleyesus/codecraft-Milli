"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import React from "react";

export function Faq3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Common questions about working together and my development approach.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              What technologies do you use?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              I specialize in React, TypeScript, Supabase, and Three.js. My tech
              stack is modern and flexible, designed to solve complex problems
              efficiently.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              How long are project timelines?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Timelines vary based on project complexity. Typically, small
              projects take 2-4 weeks, while larger initiatives can range from
              2-6 months.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              Do you offer consulting?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, I provide technical consulting for startups and businesses
              looking to optimize their software development strategies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              What are your rates?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Rates depend on project scope and complexity. I offer competitive
              pricing and can discuss custom packages during our initial
              consultation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Can you work remotely?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely. I'm experienced in remote collaboration and can
              integrate seamlessly with your team using modern communication
              tools.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
