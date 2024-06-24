import { cn } from "@/utils";

const MainCard = (props) => {
  const { className, children, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={cn(
        " bg-white shadow-md   rounded-[10px] pt-[10px] pb-[10px] p-4   ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MainCard;
