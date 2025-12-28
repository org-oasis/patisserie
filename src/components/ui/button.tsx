import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Patisserie custom variants
        elegant: "bg-primary text-primary-foreground hover:bg-[hsl(25_35%_25%)] font-serif tracking-wide shadow-[0_4px_20px_-4px_hsl(25_25%_20%/0.08)] hover:shadow-[0_8px_30px_-8px_hsl(25_25%_20%/0.1)]",
        gold: "bg-gradient-to-br from-[hsl(43_55%_70%)] to-[hsl(43_65%_55%)] text-[hsl(25_35%_25%)] font-serif tracking-wide shadow-[0_4px_20px_-4px_hsl(25_25%_20%/0.08)] hover:shadow-[0_8px_30px_-8px_hsl(25_25%_20%/0.1)] hover:scale-[1.02]",
        cream: "bg-[hsl(40_40%_96%)] text-[hsl(25_35%_25%)] border border-[hsl(43_55%_75%)/0.5] font-serif tracking-wide hover:bg-[hsl(43_55%_75%)/0.2] hover:border-[hsl(43_55%_75%)]",
        hero: "bg-[hsl(25_35%_25%)] text-[hsl(40_40%_96%)] font-serif tracking-widest uppercase text-sm px-8 py-4 hover:bg-[hsl(25_35%_25%)/0.9] shadow-[0_8px_30px_-8px_hsl(25_25%_20%/0.1)]",
        heroOutline: "bg-transparent text-[hsl(25_35%_25%)] border-2 border-[hsl(25_35%_25%)] font-serif tracking-widest uppercase text-sm px-8 py-4 hover:bg-[hsl(25_35%_25%)] hover:text-[hsl(40_40%_96%)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
