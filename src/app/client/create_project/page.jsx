"use client";
import ClientLogo from "@/assets/ClientLogo.svg";
import ClientProject2 from "@/assets/ClientProject2.svg";
import ClientProject4 from "@/assets/ClientProject4.svg";
import CreateProject from "@/assets/CreateProject.svg";

import ClientProject10 from "@/assets/ClientProject10.svg";
import ClientProject11 from "@/assets/ClientProject11.svg";
import ClientProject5 from "@/assets/ClientProject5.svg";
import ClientProject7 from "@/assets/ClientProject7.svg";
import ClientProject8 from "@/assets/ClientProject8.svg";
import ClientProject9 from "@/assets/ClientProject9.svg";
import { MainCard } from "@/components";
import {
  Button,
  Progress,
  Rating,
  Typography,
} from "@/components/RemoteComponents";
import { PhoneVerificationPopup } from "@/components/popups";
import { useCreateAnnoucementLoggedIn, useFetchData } from "@/services/queries";
import { cn } from "@/utils";
import { ArrowLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step10 from "./Step10";
import Step11 from "./Step11";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import {
  eigtth_step_validation,
  eleventh_step_validation,
  fifth_step_validation,
  first_step_validation,
  fourth_step_validation,
  nineth_step_validation,
  second_step_validation,
  seventh_step_validation,
  sixth_step_validation,
  tenth_step_validation,
  third_step_validation,
} from "./validations";
const page = () => {
  const cookiesdata = Cookies.get("id");
  const { data: client, isLoading } = useFetchData(
    `/archimatch_app/client/find_client_by_user/${cookiesdata}/`,
    "client",
  );
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [finalData, setApiData] = useState();
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

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
          console.log(validations[5].formik.values);
        },
      }),
    },
    {
      step: "7",
      formik: useFormik({
        ...seventh_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
          console.log(validations[6].formik.values);
        },
      }),
    },
    {
      step: "8",
      formik: useFormik({
        ...eigtth_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
          console.log(validations[7].formik.values);
        },
      }),
    },
    {
      step: "9",
      formik: useFormik({
        ...nineth_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
          console.log(validations[8].formik.values);
        },
      }),
    },
    {
      step: "10",
      formik: useFormik({
        ...tenth_step_validation,
        onSubmit: () => {
          setActiveStep(activeStep + 1);
          console.log(validations[9].formik.values);
        },
      }),
    },
    {
      step: "11",
      formik: useFormik({
        ...eleventh_step_validation,
        onSubmit: () => {
          console.log("<aaaaaaa></aaaaaaa>");
          let api_data = validations.reduce((acc, validation, index) => {
            if (index === 5) {
              return { ...acc, needed_pieces: validation.formik.values };
            }
            return { ...acc, ...validation.formik.values };
          }, {});
          setApiData(api_data);

          console.log(validations[10].formik.values);
        },
      }),
    },
  ];

  const steps = [
    {
      id: 1,
      component: <Step1 formik={validations[0].formik} />,
      image: CreateProject,
    },
    {
      id: 2,
      component: <Step2 formik={validations[1].formik} />,
      image: ClientProject2,
    },
    {
      id: 3,
      component: <Step3 formik={validations[2].formik} />,
      image: ClientProject2,
    },
    {
      id: 4,
      component: (
        <Step4
          formik={validations[3].formik}
          category={validations[2].formik.values.categories}
        />
      ),
      image: ClientProject4,
    },
    {
      id: 5,
      component: (
        <Step5
          formik={validations[4].formik}
          house_type={validations[3].formik.values.house_type}
        />
      ),
      image: ClientProject5,
    },
    {
      id: 6,
      component: <Step6 formik={validations[5].formik} />,
      image: ClientProject5,
    },
    {
      id: 7,
      component: <Step7 formik={validations[6].formik} />,
      image: ClientProject7,
    },
    {
      id: 8,
      component: <Step8 formik={validations[7].formik} />,
      image: ClientProject8,
    },
    {
      id: 9,
      component: (
        <Step9
          formik={validations[8].formik}
          category={validations[2].formik.values.categories}
          house_type={validations[3].formik.values.house_type}
          handleNext={handleNext}
        />
      ),
      image: ClientProject9,
    },
    {
      id: 10,
      component: (
        <Step10
          formik={validations[9].formik}
          category={validations[2].formik.values.categories}
          house_type={validations[3].formik.values.house_type}
        />
      ),
      image: ClientProject10,
    },
    {
      id: 11,
      component: <Step11 formik={validations[10].formik} />,
      image: ClientProject11,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const CreateAnnoucementMutation = useCreateAnnoucementLoggedIn(
    "",
    {},
    router,
  );

  const handleSubmit = (values) => {
    CreateAnnoucementMutation.mutate({ ...values, id: client.data.client.id });
  };

  useEffect(() => {
    if (finalData) {
      handleSubmit(finalData);
    }
    console.log(finalData);
  }, [finalData]);
  const handlePrevious = () => {
    console.log(activeStep);
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      if (
        activeStep === 9 &&
        validations[2].formik.values.categories === "Industrielle"
      ) {
        setActiveStep(activeStep - 2);
      }
    }
  };
  return (
    <div className="flex flex-row w-full  bg-[#F5F5F5] !overflow-hidden">
      <div className="hidden xl:flex flex-col items-start py-12 gap-8 w-[30%] max-w-[513px] min-w-[400px] bg-[#FEFEFE]  ">
        <Image src={ClientLogo} className="ml-16" />
        <Image src={steps[activeStep].image} className="w-[100%]  " />
        <MainCard className="w-[90%] self-center p-2 ">
          <Rating value={5} />
          <Typography className="text-14 text-architect-secondary_text_color ">
            Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et
            cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat
            tellus, congue malesuada sit nisl donec
          </Typography>
          <Typography className="text-14 text-architect-font_gris font-bold mt-2">
            Simon Lauren
          </Typography>
        </MainCard>
      </div>
      <div className="w-full flex items-center h-screen    justify-center  pb-4  ">
        <div className="w-full flex flex-col h-full items-center border-2 p-10 overflow-y-auto">
          <div
            className={cn(
              "w-full  max-w-[1100px]    flex flex-col pt-7  pb-7",
              activeStep === 11 && "items-center",
            )}
          >
            {activeStep < 11 && (
              <>
                <div className="mb-14">
                  <Typography className="text-14 text-architect-font_gris font-semibold">
                    {activeStep + 1}/11 Question
                  </Typography>
                  <Progress
                    size="sm"
                    color="blue"
                    className=" w-full lg:w-[85%]"
                    value={(100 / 11) * (activeStep + 1)}
                  ></Progress>
                </div>
              </>
            )}
            <Typography
              className={cn(
                "text-12  text-architect-font_gris font-semibold flex gap-2 items-center mb-4 cursor-pointer ",
                activeStep === 11 && "self-start lg:self-center w-[60%]",
              )}
              onClick={() => {
                if (activeStep === 0) router.back();
                else handlePrevious();
              }}
            >
              <ArrowLeftIcon
                className="w-5 h-5  text-architect-font_gris "
                color="text-architect-font_gris"
              />
              Retour
            </Typography>
            {steps[activeStep]?.component}

            {/* <div className="w-full lg:w-[80%] flex flex-row justify-between">
              <Button
                size="md"
                className="flex items-center justify-center  gap-2 mt-24 cursor-pointer "
                onClick={handlePrevious}
                //disabled={isLoading}
              >
                <ArrowLongLeftIcon className="h-4 w-4" />
                Precedent
              </Button>
            </div> */}
            {activeStep < 11 ? (
              <Button
                type="submit"
                size="md"
                className="flex items-center justify-center   gap-2 mt-24 cursor-pointer self-start "
                onClick={() => {
                  validations[activeStep].formik.submitForm();
                }}
                //disabled={isLoading}
              >
                Suivant
                <ArrowLongRightIcon className="h-4 w-4" />
              </Button>
            ) : (
              <div className="w-full flex flex-col items-start  lg:w-[60%] mt-10 ">
                <Button
                  type="submit"
                  size="md"
                  className="w-[90%] text-[12px] sm:text-[16px] self-start     "
                  onClick={() => {
                    validations[activeStep].formik.submitForm();
                  }}
                  //disabled={isLoading}
                >
                  Demarrer votre projet
                </Button>
                <div className="self-start flex flex-col  sm:flex-row sm:justify-center  items-center w-[90%]  gap-1 ">
                  <Typography
                    variant="paragraph"
                    className="text-architect-secondary_text_color text-[14px] mt-3"
                  >
                    {" "}
                    Vous avez déjà un compte?{" "}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-client-primary  text-[14px] self-center sm:self-end  underline cursor-pointer font-bold"
                    onClick={() => router.replace("/clientVisitor/loginClient")}
                  >
                    {" "}
                    se connecter
                  </Typography>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <PhoneVerificationPopup
        open={open}
        setOpen={setOpen}
        handleClick={handleSubmit}
        data={finalData}
        mutation={CreateAnnoucementMutation}
      />
    </div>
  );
};

export default page;
