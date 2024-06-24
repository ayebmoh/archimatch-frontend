import { Checkbox, Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";

const CheckToggle = (props) => {
  const { active, content, onChange, image, tip, third, architect } = props;
  return (
    <div
      className={cn(
        "border  border-gray-300 px-3 py-4 bg-white rounded-[10px] flex flex-row justify-between  w-full md:w-[48.5%]",
        third && "md:w-[45%] lg:w-[30%]  ",
      )}
    >
      <Checkbox
        color={architect ? "red" : "blue"}
        className=""
        label={
          <Typography className="flex flex-col gap-1 font-medium text-[14px] ml-3  text-architect-font_gris">
            {content}
            {tip && (
              <span className="text-[12px] text-architect-secondary_text_color">
                {tip}
              </span>
            )}
          </Typography>
        }
        checked={active}
        onChange={onChange}
      />
      {image && (
        <img className=" cursor-pointer flex justify-end " src={image.src} />
      )}
    </div>
  );
};

export default CheckToggle;
