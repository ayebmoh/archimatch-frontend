import { Button } from "@/components/RemoteComponents";
import { cn } from "@/utils";

const HStepperActions = (props) => {
  const { isFirstStep, handleNext, handlePrev, className } = props;

  return (
    <div className={cn("flex justify-between", className)}>
      <Button onClick={handlePrev} disabled={isFirstStep}>
        {" "}
        Précedent
      </Button>
      <Button onClick={handleNext}> Suivant</Button>
    </div>
  );
};

export default HStepperActions;
