import { cn } from "@/utils";

const PageLayout = (props) => {
  const { children, className } = props;
  return (
    <div className={cn("min-h-screen bg-page_bg", className)}>{children}</div>
  );
};

export default PageLayout;
