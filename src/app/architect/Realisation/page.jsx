"use client";
import { MainCard } from "@/components";
import { Button, Progress, Typography } from "@/components/RemoteComponents";
import { useCreateRealisation } from "@/services/queries";
import { ArrowLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import {
  fifth_step_validation,
  first_step_validation,
  fourth_step_validation,
  second_step_validation,
  sixth_step_validation,
  third_step_validation,
} from "./validations";
const ArchitectRealisationPage = () => {
  const [finalData, setfinalData] = useState();
  const router = useRouter();
  useEffect(() => {
    console.log("ddddddddd", finalData);
  }, [finalData]);
  const CreateRealisationMutation = useCreateRealisation(
    "realisations",
    router,
  );

  const handleCreate = (values) => {
    CreateRealisationMutation.mutate(values);
  };
  const [isUpdate, setUpdate] = useState(false);
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
          console.log(validations[1].formik.values);
        },
      }),
    },
    {
      step: "3",
      formik: useFormik({
        ...third_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
          console.log(validations[2].formik.values);
        },
      }),
    },
    {
      step: "4",
      formik: useFormik({
        ...fourth_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
          console.log(validations[3].formik.values);
        },
      }),
    },
    {
      step: "5",
      formik: useFormik({
        ...fifth_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
          console.log(validations[4].formik.values);
        },
      }),
    },
    {
      step: "6",
      formik: useFormik({
        ...sixth_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
          const allFormValues = validations.reduce((acc, validation) => {
            return { ...acc, ...validation.formik.values };
          }, {});
          setfinalData(allFormValues);
          validations[6].formik.setValues(allFormValues);
        },
      }),
    },
    {
      step: "7",
      formik: useFormik({
        initialValues: finalData || {},
        validationSchema: Yup.object({
          categories: Yup.string().required(
            "La categorie est obligatoire obligatoire",
          ),
        }),

        onSubmit: () => {
          setActiveStep(activeStep + 1);
          console.log(validations[6].formik.values);
        },
      }),
    },
  ];

  const steps = [
    {
      id: 1,
      component: <Step1 formik={validations[0].formik} />,
    },
    {
      id: 2,

      component: <Step2 formik={validations[1].formik} />,
    },
    {
      id: 3,

      component: <Step3 formik={validations[2].formik} />,
    },
    {
      id: 4,

      component: <Step4 formik={validations[3].formik} />,
    },
    {
      id: 5,

      component: <Step5 formik={validations[4].formik} />,
    },
    {
      id: 6,

      component: <Step6 formik={validations[5].formik} />,
    },
    {
      id: 7,

      component: (
        <Step7
          formik={validations[6].formik}
          isUpdate={isUpdate}
          setUpdate={setUpdate}
          handleSubmit={handleCreate}
        />
      ),
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    if (activeStep >= 0 && activeStep < 5) {
      setActiveStep(activeStep + 1);
    }
  };
  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };
  return (
    <>
      {!isUpdate ? (
        <div className="flex flex-col lg:mx-auto mt-16 lg:w-[800px] items-center">
          <Typography
            variant="h1"
            className="text-architect-font_gris text-[25px] text-center lg:text-[36px] font-extrabold flex justify-center   "
          >
            Partager vos travaux avec les clients
          </Typography>
          <Typography
            variant="paragraph"
            className="text-architect-secondary_text_color  text-[15px] text-center lg:text-[20px]  flex justify-center"
          >
            Optimisez la communication et la gestion de vos travaux en
            partageant vos projets avec vos clients sur Archimatch
          </Typography>
        </div>
      ) : (
        <div className="flex flex-col lg:mx-auto  max-w-screen-2xl w-[100%]">
          <div className="flex  mt-9">
            <Typography
              variant="paragraph"
              className="text-architect-font_gris text-[15px] font-semibold flex items-center gap-2 cursor-pointer"
              onClick={() => setUpdate(false)}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              retour
            </Typography>
          </div>
          <Typography
            variant="h1"
            className="text-architect-font_gris text-[25px] lg:text-[30px] font-semibold   mt-5"
          >
            Modifier le projet{" "}
          </Typography>
        </div>
      )}

      <MainCard className="max-w-screen-2xl w-[100%] basis-0 mx-auto mt-[38px] py-8 z-50 mb-24 shadow-xl">
        <div className=" w-[90%] m-auto">
          {activeStep <= 5 && (
            <div>
              <Typography
                variant="h1"
                className="text-architect-font_gris self-start text-[15px] font-semibold "
              >
                {activeStep + 1}/6 Question
              </Typography>
              <Progress
                color={"red"}
                className="   w-[90%] self-center  mt-2"
                value={(100 / 6) * (activeStep + 1)}
                size="sm"
              />
            </div>
          )}
          {activeStep <= 5 && (
            <div className="flex items-center mt-9">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[15px] font-semibold flex items-center gap-2 cursor-pointer"
                onClick={handlePrevious}
              >
                <ArrowLeftIcon className="h-4 w-4" />
                retour
              </Typography>
            </div>
          )}

          {steps[activeStep].component}
          {activeStep <= 5 && (
            <Button
              type="submit"
              size="sm"
              className=" md:text-[14px] text-[12px] font-normal  flex items-center justify-center gap-2 mt-16 cursor-pointer"
              onClick={() => validations[activeStep].formik.submitForm()}
              //disabled={isLoading}
            >
              Suivant
              <ArrowLongRightIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
      </MainCard>
    </>
  );
};
export default ArchitectRealisationPage;
