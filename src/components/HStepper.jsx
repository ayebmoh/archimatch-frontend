import { Step, Stepper, Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";
import { CheckIcon } from "@heroicons/react/24/outline";
const HStepper = (props) => {
  const {
    activeStep,
    isFirstStep,
    isLastStep,
    setActiveStep,
    setIsFirstStep,
    setIsLastStep,
    steps,
    architect,
    className,
    validations,
  } = props;
  return (
    <div className={cn("w-[65%] py-4 px-8 m-auto", className)}>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        activeLineClassName={cn(
          activeStep === 1 && "!w-[50%]",
          activeStep === 2 && "!w-full",
          architect ? "bg-architect-primary" : "bg-client-primary",
        )}
      >
        {steps.map((element, index) => (
          <Step
            key={index}
            onClick={() => {
              console.log(index);
              if (index > 0 && index > activeStep) {
                validations[activeStep].formik.submitForm();
              } else if (index == 0 || index == activeStep) {
                setActiveStep(activeStep);
              } else if (index <= activeStep) {
                setActiveStep(index);
              }
            }}
            className="rounded-[8px]"
            activeClassName={
              architect ? "bg-architect-primary" : "bg-client-primary"
            }
            completedClassName={
              architect ? "bg-architect-primary" : "bg-client-primary"
            }
          >
            <Typography
              variant="h6"
              color={activeStep > index ? "white" : "text-architect-font_gris"}
              className="cursor-pointer  text-[18px] font-semibold"
            >
              {activeStep > index ? (
                <CheckIcon className="h-6 w-6" />
              ) : (
                index + 1
              )}
            </Typography>
            <div className="absolute -bottom-6 w-max text-center ">
              <Typography
                variant="small"
                className="font-normal text-architect-font_gris text-[13px]"
              >
                {element.title}
              </Typography>
            </div>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default HStepper;
