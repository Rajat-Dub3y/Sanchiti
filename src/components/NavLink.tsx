import Link, { type LinkProps } from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends LinkProps {
  className?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, href, ...props }, ref) => {
    return <Link ref={ref} href={href} className={cn(className)} {...props} />;
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
