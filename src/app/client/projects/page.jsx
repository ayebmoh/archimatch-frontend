"use client";

import Typebien from "@/assets/Typebien.svg";
import {
  Button,
  Option,
  Select,
  Typography,
} from "@/components/RemoteComponents";
import { useFetchData } from "@/services/queries";
import { Spinner } from "@material-tailwind/react";
import Cookies from "js-cookie";
import Image from "next/image";
import { useState } from "react";
import { CiSearch, CiSettings } from "react-icons/ci";
import { IoCubeOutline } from "react-icons/io5";
import ClientCards from "./ClientCards";

const page = () => {
  const cookiesdata = Cookies.get("id");
  const { data: announcements, isLoading } = useFetchData(
    `/archimatch_app/announcement/get_announcements_by_client/${cookiesdata}/`,
    "ann",
  );
  console.log(announcements);
  const [input, setInput] = useState("");
  const handleChange = (value) => {
    setInput(value);
    console.log(value);
  };
  console.log(announcements);
  return (
    <div className="flex flex-col pb-10">
      <div className=" w-full flex flex-col  items-center  bg-[#E5EBFF] ">
        <Typography
          variant="h1"
          className=" text-[#344054]  text-[17px] text-center lg:text-[20px]  flex  items-center mt-14"
        >
          Gestion de projets
        </Typography>
        <Typography className="text-[14px] text-architect-secondary_text_color  mt-4 ">
          Bénéficiez d'avantages exclusifs et de tarifs compétitifs pour
        </Typography>
        <Typography className="text-[14px] text-architect-secondary_text_color ">
          {" "}
          concrétiser vos projets
        </Typography>

        <div className="mt-8  p-3  pb-8 rounded-lg ">
          <div className="flex flex-col lg:flex-row gap-7">
            <Select label=" Type Traveaux" className="bg-white  w-64">
              <Option>
                <span className="flex flex-rox items-center gap-1">
                  {" "}
                  <CiSettings className=" size-5" />
                  Type Traveaux
                </span>
              </Option>
              <Option>
                <span className="flex flex-rox items-center gap-1">
                  {" "}
                  <CiSettings className=" size-5" />
                  Type Traveaux
                </span>
              </Option>
            </Select>
            <Select label=" Type du Bien" className="bg-white w-64">
              <Option>
                <span className="flex flex-rox items-center gap-1">
                  <Image
                    alt="Typebien"
                    className="size-5  "
                    src={Typebien}
                    priority={true}
                  />
                  Type du Bien
                </span>
              </Option>
              <Option>
                <span className="flex flex-rox items-center gap-1">
                  <Image
                    alt="Typebien"
                    className=" size-5 "
                    src={Typebien}
                    priority={true}
                  />
                  Type du Bien
                </span>
              </Option>
            </Select>
            <Select label="Status" className="bg-white w-64">
              {" "}
              IoCubeOutline
              <Option>
                <span className="flex flex-rox items-center gap-1">
                  {" "}
                  <IoCubeOutline className=" size-5" />
                  Statut
                </span>
              </Option>
              <Option>
                <span className="flex flex-rox items-center gap-1">
                  {" "}
                  <IoCubeOutline className=" size-5" />
                  Statut
                </span>
              </Option>
            </Select>
            <Button
              size="sm"
              className=" lg:w-20  bg-[#11ABEC] rounded-[9px] flex justify-center items-center lg:mx-auto  "
            >
              <CiSearch className="text-white h-5 w-5 font-bold " />
            </Button>
          </div>
        </div>
      </div>
      <div className="  bg-[#FAFBFF]">
        {isLoading ? (
          <Spinner />
        ) : (
          <ClientCards announcements={announcements?.data?.announcements} />
        )}
      </div>
    </div>
  );
};

export default page;
