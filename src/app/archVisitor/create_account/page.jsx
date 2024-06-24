"use client";
import architectLogo from "@/assets/ArchitectLogo.svg";

import StepOneImage from "@/assets/StepOneImage.svg";
import StepThreeImage from "@/assets/StepThreeImage.svg";
import StepTwoImage from "@/assets/StepTwoImage.svg";
import { HStepper, HStepperActions, PageLayout } from "@/components";
import { useCreateAccountArchitect } from "@/services/queries";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {
  first_step_validation,
  second_step_validation,
  third_step_validation,
} from "./validations";

const architect_creation_account_page = (props) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const validations = [
    {
      step: "1",
      formik: useFormik({
        ...first_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
          console.log(validations[0].formik.values);
        },
      }),
    },
    {
      step: "2",
      formik: useFormik({
        ...second_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
        },
      }),
    },
    {
      step: "3",
      formik: useFormik({
        ...third_step_validation,
        onSubmit: () => {
          handleSubmit({
            ...validations[0].formik.values,
            ...validations[1].formik.values,
            ...validations[2].formik.values,
          });
        },
      }),
    },
  ];
  const CreateRequestMutation = useCreateAccountArchitect("", {}, setOpen);

  const handleSubmit = (values) => {
    CreateRequestMutation.mutate({ ...values });
  };
  const steps = [
    {
      id: 1,
      title: "Profil",
      component: (
        <Step1 handleNext={handleNext} formik={validations[0].formik} />
      ),
    },
    {
      id: 2,
      title: "Personal info",
      component: <Step2 formik={validations[1].formik} />,
    },
    {
      id: 3,
      title: "Rendez-Vous",
      component: (
        <Step3 formik={validations[2].formik} open={open} setOpen={setOpen} />
      ),
    },
  ];
  const {} = props;

  return (
    <PageLayout className="pt-10">
      <div className="max-w-[1024px] h-full flex flex-col  m-auto px-2 z-10">
        <img
          className="hidden lg:block w-40 mr-4  cursor-pointer self-center"
          src={architectLogo.src}
          onClick={() => router.push("/archVisitor")}
        />
        <HStepper
          className="mt-14"
          activeStep={activeStep}
          isLastStep={isLastStep}
          isFirstStep={isFirstStep}
          setActiveStep={setActiveStep}
          setIsLastStep={setIsLastStep}
          setIsFirstStep={setIsFirstStep}
          architect={true}
          steps={steps}
          validations={validations}
        />

        {steps[activeStep]?.component}
        {activeStep !== 0 && (
          <HStepperActions
            isFirstStep={isFirstStep}
            handleNext={() => {
              validations[activeStep].formik.submitForm();
            }}
            handlePrev={handlePrev}
            className="max-w-[1024px] w-[100%] basis-0 self-center mt-4 z-50"
          />
        )}
      </div>
      {activeStep === 0 && (
        <Image
          src={StepOneImage}
          className="hidden lg:block absolute  bottom-0 left-0 w-[400px] !z-0 "
          alt=""
        />
      )}
      {activeStep === 1 && (
        <Image
          src={StepTwoImage}
          className="hidden lg:block absolute  bottom-0 left-0 w-[500px] !z-0 "
          alt=""
        />
      )}
      {activeStep === 2 && (
        <Image
          src={StepThreeImage}
          className="hidden lg:block absolute  bottom-0 left-0 w-[450px] !z-0 "
          alt=""
        />
      )}
    </PageLayout>
  );
};

export default architect_creation_account_page;
