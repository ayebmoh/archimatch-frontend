import Watch from "@/assets/Watch.svg";
import {
  CustomDatePicker,
  MainCard,
  Popup,
  TimeToggleButtonList,
} from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { ClockIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { useState } from "react";
function Step3(props) {
  const { formik, open, setOpen } = props;
  const time_options = [
    { id: 1, content: "8h30" },
    { id: 2, content: "9h00" },
    { id: 3, content: "9h30" },
    { id: 4, content: "10h00" },
    { id: 5, content: "10h30" },
    { id: 6, content: "11h00" },
    { id: 7, content: "11h30" },
    { id: 8, content: "12h00" },
    { id: 9, content: "12h30" },
    { id: 10, content: "13h00" },
  ];
  const [time, setTime] = useState();

  const handle_change_time = (id) => {
    console.log(id);
    time_options.forEach((element) => {
      if (element.id === id) {
        formik.setFieldValue("meeting_time", element.content);
      }
    });
  };
  return (
    <MainCard className="max-w-[1024px] gap-8 w-[100%] basis-0  self-center mt-[38px] py-8 z-50 flex flex-col lg:flex-row px-4">
      <div className="w-full lg:w-[38%] h-full flex flex-col lg:border-r-2 pr-4">
        <Typography
          variant="h1"
          className="text-architect-font_gris text-[20px] lg:text-[30px]"
        >
          Rejoignez Archimatch
        </Typography>
        <Typography
          variant="paragraph"
          className="text-architect-secondary_text_color text-[15px] mt-4"
        >
          Nous avons hâte d'échanger avec vous. Il suffit de fixer le créneau
          qui vous correspond le plus
        </Typography>
        <div className="flex flex-row justify-between lg:flex-col lg:flex-grow ">
          <div className="flex items-center ">
            <Typography
              variant="paragraph"
              className="text-architect-primary text-[15px] font-medium flex items-center gap-1"
            >
              <ClockIcon className="h-6 w-6" />
              20min
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography
              variant="h1"
              className="text-architect-font_gris text-[16px] font-bold"
            >
              Time zone
            </Typography>
            <Typography
              variant="paragraph"
              className="text-architect-secondary_text_color text-[15px] flex items-center gap-1"
            >
              <GlobeAsiaAustraliaIcon className="h-6 w-6" /> West Africa Time
              (11:09)
            </Typography>
          </div>
        </div>
      </div>
      <div className="py-2 px-4 lg:w-[65%]">
        <Typography
          variant="h1"
          className="text-architect-font_gris text-[20px] "
        >
          Select a Date & Time
        </Typography>
        <div className="flex flex-col gap-3 md:flex-row ">
          <div className="self-center">
            <CustomDatePicker onChange={formik.setFieldValue} />
          </div>

          <div className=" w-full">
            {formik.values.meeting_date && (
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[15px] font-bold mb-3"
              >
                {format(formik.values.meeting_date, "PP")}
              </Typography>
            )}
            <TimeToggleButtonList
              data={time_options}
              value={formik.values.meeting_time}
              errorMessage={
                formik.errors.meeting_time && formik.errors.meeting_time
              }
              onChange={handle_change_time}
              // errorMessage={
              //   formik.errors.architect_type && formik.errors.architect_type
              // }
              className="w-full max-h-[300px] "
            />
          </div>
        </div>
      </div>
      <Popup
        open={open}
        handleOpen={() => setOpen(!open)}
        size="sm"
        bodyClassName="flex flex-col items-center"
      >
        <img
          className=" w-[25%] mr-4 ml-2  mb-6 cursor-pointer  "
          src={Watch.src}
        />
        <Typography
          variant="paragraph"
          className="font-bold text-[20px] lg:text-[30px] md:w-[500px] flex items-center  text-center text-architect-font_gris"
        >
          Nous venons de planifier une démonstration pour vous
        </Typography>
        <Typography
          variant="paragraph"
          className=" text-[14px] lg:text-[18px] md:w-[500px] flex items-center  text-center "
        >
          Une invitation à la session de démonstration à venir a été envoyée à
          votre adresse e-mail A.Legrand@gmail.com
        </Typography>

        <div className="flex flex-row justify-between w-full mt-4 space-y-1 md:w-[60%] rounded-md px-[18px] py-[12px] md:min-w-[429px]  bg-[#FAFBFF]">
          <div className="flex justify-between flex-col ">
            <Typography className="text-architect-secondary_text_color font-bold text-[16px] ">
              Date
            </Typography>
            <Typography className=" font-semibold text-architect-font_gris text-[18px] ">
              {new Date(formik.values.meeting_date)?.toLocaleDateString()}
            </Typography>
          </div>
          <div className="flex justify-between flex-col ">
            <Typography className="text-architect-secondary_text_color  font-bold text-[16px] ">
              Temps
            </Typography>

            <div className="flex flex-row items-center ">
              <Typography
                variant="paragraph"
                className="flex gap-2 items-center font-semibold text-architect-font_gris text-[18px]  "
              >
                {formik.values.meeting_time}
                <span
                  variant="paragraph"
                  className=" text-[14px]  font-bold text-architect-secondary_text_color"
                >
                  (GMT+1)
                </span>
              </Typography>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          size="md"
          className="w-[150px] mt-10 p-3 flex  justify-center text-[15px]"
          onClick={() => setOpen(false)}

          //disabled={isLoading}
        >
          Confirmer
        </Button>
      </Popup>
    </MainCard>
  );
}

export default Step3;
