import {
  Dialog,
  DialogBody,
  DialogHeader,
} from "@/components/RemoteComponents";
import { cn } from "@/utils";

function Popup(props) {
  const {
    open,
    handleOpen,
    header,
    children,
    headerClassName,
    bodyClassName,
    size,
    className,
  } = props;

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size={size}
        className={ className}
        onClick={(e) => e.stopPropagation()}
      >
        <DialogHeader className={cn("", headerClassName)}>
          {header}
        </DialogHeader>
        <DialogBody className={bodyClassName}>{children}</DialogBody>
      </Dialog>
    </>
  );
}
export default Popup;
