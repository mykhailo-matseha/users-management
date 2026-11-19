import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  variation?: "section" | "block";
}

function Heading({
  as: Component = "h2",
  variation = "block",
  children,
  className,
  ...props
}: HeadingProps) {
  const finalClasses = cn(
    `font-normal text-xl `,
    variation == "section" && `text-2-xl font-karla tracking-[6px] font-medium`,
    className,
  );
  return (
    <Component className={finalClasses} {...props}>
      {children}
    </Component>
  );
}

export default Heading;
