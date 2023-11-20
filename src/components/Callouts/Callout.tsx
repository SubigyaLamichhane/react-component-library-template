import * as React from "react";
import "../../global.css";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import {
  CheckCircled,
  ExclamationTriangle,
  InfoCircled,
  LockClosed,
} from "@harness-ui/icons";
import { cn } from "../../lib/utils";

const iconVariants = cva("", {
  variants: {
    size: {
      small: "w-4 h-4 mr-2",
      medium: "w-4 h-4 mr-3",
      large: "w-4 h-4 mr-4",
    },
  },
});

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
  ({ className, size, colour, asChild = false, children, ...props }, ref) => {
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
      >
        <div className="flex items-center mr-">
          <div>
            {
              {
                accents: (
                  <InfoCircled
                    className={cn(
                      iconVariants({
                        size,
                        className,
                      })
                    )}
                  />
                ),
                error: (
                  <ExclamationTriangle
                    className={cn(
                      iconVariants({
                        size,
                        className,
                      })
                    )}
                  />
                ),
                success: (
                  <CheckCircled
                    className={cn(
                      iconVariants({
                        size,
                        className,
                      })
                    )}
                  />
                ),
                warning: (
                  <LockClosed
                    className={cn(
                      iconVariants({
                        size,
                        className,
                      })
                    )}
                  />
                ),
              }[colour]
            }
          </div>
          <div>{children}</div>
        </div>
      </Comp>
    );
  }
);
Callout.displayName = "Callout";

export { Callout, calloutVariants };
