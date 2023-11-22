import * as React from "react";
import "../../global.css";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const calloutVariants = cva(
  "border border-neutral-3 bg-panelDefault shadow-sm",
  {
    variants: {
      size: {
        "1": "p-3 rounded-3",
        "2": "p-4  rounded-4",
        "3": "p-5 rounded-5",
        "4": "p-6 rounded-5",
        "5": "p-7 rounded-6",
      },
    },
    defaultVariants: {
      size: "1",
    },
  }
);

export interface CalloutProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, size, asChild = false, children, ...props }, ref) => {
    if (!size) {
      size = "1";
    }

    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(
          calloutVariants({
            size,

            className,
          })
        )}
        // className="font-"
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Card.displayName = "Card";

export { Card, calloutVariants };
