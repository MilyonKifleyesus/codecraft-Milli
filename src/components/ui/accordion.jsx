import React, { useState } from "react";

export function Accordion({ className = "", children, ...props }) {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function AccordionItem({ className = "", children, ...props }) {
  return (
    <div className={`border-b ${className}`} {...props}>
      {children}
    </div>
  );
}

export function AccordionTrigger({ className = "", children, ...props }) {
  return (
    <button
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`}
      {...props}
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

export function AccordionContent({ className = "", children, ...props }) {
  return (
    <div
      className={`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${className}`}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
}
