import * as React from "react";
import "../../global.css";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const calloutVariants = cva(
  "inline-flex items-center font-regular justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        small: "p-3 text-2 rounded-3",
        medium: "p-4 text-2 rounded-4",
        large: "text-3 p-5 rounded-5",
      },
      colour: {
        accents: "bg-accents-3 text-text ",
        error: "bg-error-3 text-text ",
        success: "bg-success-3 text-text ",
        warning: "bg-warning-3 text-text ",
      },
    },
    defaultVariants: {
      size: "medium",
      colour: "accents",
    },
  }
);

export interface CalloutProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  asChild?: boolean;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, size, colour, asChild = false, ...props }, ref) => {
    if (!size) {
      size = "medium";
    }

    if (!colour) {
      colour = "accents";
    }
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(
          calloutVariants({
            size,
            colour,
            className,
          })
        )}
        // className="font-"
        ref={ref}
        {...props}
      />
    );
  }
);
Callout.displayName = "Callout";

export { Callout, calloutVariants };
