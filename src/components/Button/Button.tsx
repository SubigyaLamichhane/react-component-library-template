import * as React from "react";
import "../../global.css";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center font-medium justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        classic: "border-blue-700 shadow-inner classic-shadow",
        soft: "",
        surface: "",
        outline: "",
        ghost: "",
      },
      highContrast: {
        true: "",
        false: "",
      },
      disable: {
        true: "!text-neutral-8 !border-neutral-3 !bg-neutral-1",
      },
      size: {
        small: "h-[24px] px-2 text-1",
        medium: "h-[32px] px-3 text-2 ",
        large: "h-[40px] px-4 text-3",
      },
      colour: {
        accents: "bg-accents-9 text-white hover:bg-accents-9/90",
        error: "bg-error-9 text-white hover:bg-error/90",
        neutral: "bg-neutral-9 text-white hover:bg-neutral/90",
      },
    },

    compoundVariants: [
      {
        variant: "soft",
        colour: "accents",
        class: "bg-accents-3 text-accents-11 hover:bg-accents-5/90",
      },
      {
        variant: "soft",
        colour: "error",
        class: "bg-error-3 text-error-11 hover:bg-error-5/90",
      },
      {
        variant: "soft",
        colour: "neutral",
        class: "bg-neutral-3 text-neutral-11 hover:bg-neutral-5/90",
      },
      {
        variant: "surface",
        colour: "accents",
        class:
          "bg-[#0582FF0A] border border-accents-7 text-accents-11 hover:bg-accents-5/90 ",
      },
      {
        variant: "surface",
        colour: "error",
        class:
          "bg-[#FF000A0A] border border-error-7 text-error-11 hover:bg-error-5/90",
      },
      {
        variant: "surface",
        colour: "neutral",
        class:
          "bg-[#A0AEC00A] border border-neutral-7 text-neutral-11 hover:bg-neutral-5/90",
      },
      {
        variant: "outline",
        colour: "accents",
        class:
          "border bg-white border-accents-8 text-accents-11 hover:bg-accents-5/90",
      },
      {
        variant: "outline",
        colour: "error",
        class:
          "border bg-white border-error-8 text-error-11 hover:bg-error-5/90",
      },
      {
        variant: "outline",
        colour: "neutral",
        class:
          "border bg-white border-neutral-8 text-neutral-11 hover:bg-neutral-5/90",
      },

      {
        variant: "ghost",
        colour: "accents",
        class: "text-accents-11 hover:bg-accents-5/90 bg-white",
      },
      {
        variant: "ghost",
        colour: "error",
        class: "text-error-11 hover:bg-error-5/90 bg-white",
      },
      {
        variant: "ghost",
        colour: "neutral",
        class: "text-neutral-11 hover:bg-neutral-5/90 bg-white",
      },
      {
        highContrast: true,
        colour: "accents",
        variant: "default",
        class: "bg-accents-12 text-white hover:bg-accents-12/90",
      },
      {
        highContrast: true,
        colour: "error",
        variant: "default",
        class: "bg-error-12 text-white hover:bg-error-12/90",
      },
      {
        variant: "default",
        colour: "neutral",
        highContrast: true,
        class: "bg-neutral-12 text-white hover:bg-neutral-12/90",
      },
      {
        variant: "surface",
        colour: "accents",
        highContrast: true,
        class: "!text-accents-11 bg-[#0582FF0A] border !border-accents-7",
      },
      {
        variant: "surface",
        colour: "error",
        highContrast: true,
        class: "!text-error-11 bg-[#FF000A0A] border !border-error-7",
      },
      {
        variant: "surface",
        colour: "neutral",
        highContrast: true,
        class: "!text-neutral-11 bg-[#A0AEC00A] border !border-neutral-7",
      },

      {
        variant: "ghost",
        colour: "accents",
        highContrast: true,
        class: "text-accents-12 bg-white",
      },
      {
        variant: "ghost",
        colour: "error",
        highContrast: true,
        class: "text-error-12 bg-white",
      },
      {
        variant: "ghost",
        colour: "neutral",
        highContrast: true,
        class: "text-neutral-12 bg-white",
      },
    ],

    defaultVariants: {
      variant: "default",
      size: "medium",
      colour: "accents",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      colour,
      highContrast = false,
      disable = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    if (!size) {
      size = "medium";
    }
    if (!variant) {
      variant = "classic";
    }
    if (!colour) {
      colour = "accents";
    }
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            colour,
            highContrast,
            className,
            disable,
          })
        )}
        // className="font-"
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
