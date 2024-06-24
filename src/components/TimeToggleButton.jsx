/* eslint-disable react/prop-types */
import { Chip } from "@/components/RemoteComponents";

const TimeToggleButton = (props) => {
  const { active, content, onChange } = props;
  return (
    <div onClick={onChange}>
      <Chip
        variant={active ? "filled" : "outlined"}
        value={content}
        className="rounded-[8px] cursor-pointer items-center flex flex-row justify-center py-[10px] border-dashed"
        onClick={onChange}
      />
    </div>
  );
};

export default TimeToggleButton;
