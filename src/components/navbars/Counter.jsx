import { Button, Typography } from "@/components/RemoteComponents";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const Counter = (props) => {
  const { active, content, value, onChange, image, tip, formik, formikValue } =
    props;
  const handleAdd = () => {
    if (formik) {
      formik.setFieldValue([formikValue], value + 1);
    } else {
      onChange(value + 1);
    }
  };

  const handleMin = () => {
    if (value > 0) {
      if (formik) {
        formik.setFieldValue([formikValue], value - 1);
      } else {
        onChange(value - 1);
      }
    }
  };
  return (
    <div className="border  border-gray-300 items-center px-3 py-4 bg-white rounded-[10px] flex flex-row justify-between min-w-[300px]  w-full md:w-[31%]">
      <Typography className="flex flex-col gap-1 font-medium text-[16px] ml-3  text-architect-font_gris">
        {content}
      </Typography>

      <div className="flex flex-row gap-2 items-center">
        <Button size="sm" onClick={handleAdd}>
          {" "}
          <PlusIcon color="white" className="w-4 h-4" />{" "}
        </Button>
        <Typography className="flex flex-col gap-1 font-medium text-[16px]   text-architect-secondary_text_color">
          <Typography className="text-[20px] text-architect-secondary_text_color">
            {" "}
            {value !== 0 ? value : "- -"}
          </Typography>
        </Typography>
        <Button size="sm" onClick={handleMin}>
          {" "}
          <MinusIcon color="white" className="w-4 h-4" />{" "}
        </Button>
      </div>
    </div>
  );
};

export default Counter;
