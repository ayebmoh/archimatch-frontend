import { cn } from "@/utils";
import Image from "next/image";
const CustomImage = (props) => {
  const { className, src, alt, priority } = props;
  return (
    <div className={cn("relative", className)}>
      <Image src={src} alt={alt} fill priority={priority} />
    </div>
  );
};

export default CustomImage;
