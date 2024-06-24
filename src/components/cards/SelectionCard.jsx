import TokenImage from "@/assets/token.svg";
import {
  Avatar,
  Button,
  Chip,
  Progress,
  Typography,
} from "@/components/RemoteComponents";
import { useCheckSelection } from "@/services/queries";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MainCard } from "..";

const SelectionCard = ({ data }) => {
  const router = useRouter();
  const cookiesdata = Cookies.get("id");

  const { data: selection } = useCheckSelection(cookiesdata, data.id);
  function calculateDaysDifference(createdDate) {
    const today = new Date();
    const createdDateObj = new Date(createdDate);

    const diffInMs = createdDateObj - today;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    console.log("diffInDays:", diffInDays);
    if (diffInDays < 0) {
      return 0;
    } else if (diffInDays > 5) {
      return 0;
    } else {
      return diffInDays;
    }
  }

  function progressBarColor(daysDifference) {
    if (daysDifference > 4) {
      return "green";
    } else if (daysDifference === 4) {
      return "green";
    } else if (daysDifference === 3) {
      return "orange";
    } else if (daysDifference === 2) {
      return "orange";
    } else {
      return "red";
    }
  }
  function progressBarValue(daysDifference) {
    if (daysDifference > 4) {
      return 0;
    } else if (daysDifference === 4) {
      return 20;
    } else if (daysDifference === 3) {
      return 40;
    } else if (daysDifference === 2) {
      return 70;
    } else if (daysDifference === 1) {
      return 90;
    } else {
      return 100;
    }
  }
  const handlepush = () => {
    router.push(`/architect/ManagerSelection/${data.id}`);
  };
  const [progressValue, setProgressValue] = useState(null);
  const [progressColor, setProgressColor] = useState(null);

  useEffect(() => {
    if (
      selection &&
      selection.data &&
      selection.data.selection.expiration_date
    ) {
      const createdDate = selection.data.selection.expiration_date;
      const daysDifference = calculateDaysDifference(createdDate);
      const color = progressBarColor(daysDifference);
      const value = progressBarValue(daysDifference);
      setProgressColor(color);
      setProgressValue(value);
    }
  }, [selection]);

  console.log(selection);
  return (
    <MainCard className="relative w-full sm:w-[540px] self-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <Typography className="text-architect-secondary_text_color text-[12px]">
            {" "}
            Publié le
            {new Date(data.created_at).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
          <Chip
            variant="ghost"
            color="yellow"
            size="sm"
            value="Pending"
            className="px-6 py-2"
          />
        </div>

        <div className="mt-1">
          <Typography className="text-architect-font_gris text-[16px] font-bold">
            {" "}
            {data.work_type}{" "}
          </Typography>
          <Typography className="text-client-primary text-[14px]">
            {" "}
            {data.architect_type.display}{" "}
          </Typography>
        </div>
        <div className="flex flex-row items-center gap-1 my-3">
          <MapPinIcon className="h-6 w-6 text-architect-secondary_text_color " />
          <Typography className="text-architect-secondary_text_color text-[12px]">
            {" "}
            {data.town}
          </Typography>
        </div>
        <div className="flex flex-row gap-4 items-center  mt-4 pb-4 border-b-[1px] border-dashed">
          <div className="flex items-center -space-x-4 blur-sm">
            <Avatar
              variant="circular"
              size="sm"
              alt="user 1"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <Avatar
              variant="circular"
              alt="user 2"
              size="sm"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
            />
            <Avatar
              variant="circular"
              alt="user 3"
              size="sm"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
            />
          </div>
          <Typography className="text-architect-success text-[12px]">
            {" "}
            {data.selection_count} Architectes intéressés par le projet
          </Typography>
        </div>

        <div className="flex flex-row  mt-4 mb-4">
          <div className="flex flex-col basis-0 flex-grow">
            <div className="flex flex-row items-center p-[8px] gap-1">
              <BuildingOfficeIcon className="h-6 w-6 text-architect-secondary_text_color " />
              <Typography className="text-architect-secondary_text_color text-[12px]">
                {" "}
                {data.house_type}
              </Typography>
            </div>
            <div className="flex flex-row items-center p-[8px] gap-1 ">
              <MapIcon className="h-6 w-6 text-architect-secondary_text_color " />
              <Typography className="text-architect-secondary_text_color text-[12px]">
                {" "}
                {data.surface_terrain}{" "}
              </Typography>
            </div>
          </div>
          <div className="flex flex-col basis-0 flex-grow">
            <div className="flex flex-row items-center p-[8px] gap-1">
              <BanknotesIcon className="h-6 w-6 text-architect-secondary_text_color " />
              <Typography className="text-architect-secondary_text_color text-[12px]">
                {" "}
                {data.budget}{" "}
              </Typography>
            </div>
            <div className="flex flex-row items-center p-[8px] gap-1 ">
              <Image src={TokenImage} className="" alt="" />
              <Typography className="text-architect-font_gris">
                {" "}
                5 Jetons
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-4 ">
          <Typography
            variant="h6"
            onClick={handlepush}
            className="text-architect-font_gris flex items-center text-[15px] underline cursor-pointer"
            // onClick={() =>
            //   router.push(
            //     `/architect/realisation_details/${element.id}`,
            //   )
            // }
          >
            Consulter projet
            <ChevronRightIcon className="h-5 w-5" />
          </Typography>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <div className=" items-center rounded-md flex flex-col gap-2 lg:flex-row mt-7 ">
            <Progress
              value={progressValue}
              size="md"
              color={progressColor}
              className="   w-[95%]"
            />
            <Typography className="hidden lg:flex font-semibold text-architect-font_gris text-[15px]  ">
              {calculateDaysDifference(
                selection?.data?.selection?.expiration_date,
              ) <= 0
                ? 0
                : calculateDaysDifference(
                    selection?.data?.selection?.expiration_date,
                  )}
              J
            </Typography>
          </div>
          {calculateDaysDifference(
            selection?.data?.selection?.expiration_date,
          ) > 1 ? null : (
            <div className="flex flex-row items-center gap-1  mt-2">
              <ExclamationCircleIcon className="lg:h-7 w-7   text-[#FDB022] " />
              <Typography className="text-[#FDB022] lg:text-[16px] text-[13px] font-semibold">
                {" "}
                On vous invite a contacter le client il vous reste un jour,
                attention le projet va être clôturer
              </Typography>
            </div>
          )}
        </div>
        <div className="flex gap-2  items-center justify-center">
          <Button
            variant="outlined"
            color="architect-front_gris"
            size="sm"
            className="flex-grow basis-0"
          >
            Abandonner le projet
          </Button>
          <Button size="sm" className="flex-grow basis-0" onClick={handlepush}>
            Detail de projet
          </Button>
        </div>
      </div>
    </MainCard>
  );
};

export default SelectionCard;
