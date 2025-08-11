import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const Logo = ({ size = "md", className }: Props) => {
  return (
    <div
      className={cn("font-bold", className, {
        "text-sm": size === "sm",
        "text-lg": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      rabire.com
    </div>
  );
};

export default Logo;
