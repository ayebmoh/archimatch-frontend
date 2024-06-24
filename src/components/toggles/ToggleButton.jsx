/* eslint-disable react/prop-types */
import { Chip } from "@/components/RemoteComponents";
import { cn } from "@/utils";

const ToggleButton = (props) => {
  const { active, content, onChange } = props;
  return (
    <div onClick={onChange}>
      <Chip
        variant={active ? "filled" : "outlined"}
        value={content}
        className={cn(
          "rounded-full cursor-pointer min-w-[70px] px-4 py-3 text-center",
          !active && "bg-white",
        )}
        onClick={onChange}
      />
    </div>
  );
};

export default ToggleButton;
