import { Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";

const ImageToggle = (props) => {
  const { active, content, onChange, image, architect } = props;
  return (
    <figure
      onClick={onChange}
      className={cn(
        "relative h-[350px] w-[250px] cursor-pointer ",
        active && !architect && "border-4 border-client-primary rounded-xl",
        active &&
          architect === true &&
          "border-4 border-architect-primary rounded-xl",
      )}
    >
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={image.src}
        alt=""
      />
      <figcaption className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className=" px-4 py-2 rounded-xl">
          <Typography
            variant="h5"
            color="white"
            className="text-center text-[14px] font-semibold"
          >
            {content}
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
};

export default ImageToggle;
