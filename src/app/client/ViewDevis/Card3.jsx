"use client";
import devis from "@/assets/devis.svg";
import MainCard from "@/components/MainCard";
import { Button, Chip, Typography } from "@/components/RemoteComponents";
import Image from "next/image";
import { MdFileDownload } from "react-icons/md";
const Card3 = () => {
  return (
    <div className=" w-full flex flex-col   bg-[#FAFBFF] ">
      <div className="w-full mt-5 lg:w-[800px]  items-center">
        <div className="flex flex-col space-y-4  ">
          <MainCard className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300  p-[16px]  ">
            <Image src={devis} className="md:self-center self-center" alt="" />
            <Typography className="md:self-center text-extrabold text-[17px] md:w-[100px] self-center text-architect-text_hover ">
              Devis-2
            </Typography>
            <Typography className="md:self-center text-extrabold text-[17px] md:w-[100px] self-center text-[#888FA7] ">
              01 Feb 2024
            </Typography>
            <Chip
              size="lg"
              value="Accepté"
              color="green"
              className=" self-center text-architect-success font-extrabold bg-[#22C55E] bg-opacity-15 border-0 ml-5 justify-center  "
            />
            <div className="flex flex-row gap-5 ml-7  justify-center">
              <Button
                className="bg-[#08D3BB] text-white border-solid border text-[14px] border-[#08D3BB]"
                size="sm"
              >
                Voir Devis
              </Button>
              <div className="flex flex-row items-center gap-2">
                <MdFileDownload className="self-center text-[#344054] size-5 cursor-pointer" />
                <Typography className=" self-center text-[#344054] font-semibold">
                  PDF
                </Typography>
              </div>
            </div>
          </MainCard>
          <MainCard className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300 p-[16px] ">
            <Image src={devis} className="md:self-center self-center" alt="" />
            <Typography className="md:self-center text-extrabold text-[17px] md:w-[100px] self-center text-architect-text_hover ">
              Devis-2
            </Typography>
            <Typography className="md:self-center text-extrabold text-[17px] md:w-[100px] self-center text-[#888FA7] mr-3 ">
              01 Feb 2024
            </Typography>
            <Chip
              size="lg"
              value="Refusé"
              color="red"
              className="self-center text-[#B71D18] font-extrabold bg-[#FF5630] bg-opacity-15 border-0 ml-5 justify-center "
            />
            <div className="flex flex-row gap-5 ml-7  justify-center">
              <Button
                className="bg-[#08D3BB] text-white border-solid border text-[14px] border-[#08D3BB]"
                size="sm"
              >
                Voir Devis
              </Button>
              <div className="flex flex-row items-center gap-2">
                <MdFileDownload className="self-center text-[#344054] size-5 cursor-pointer" />
                <Typography className=" self-center text-[#344054] font-semibold">
                  PDF
                </Typography>
              </div>
            </div>
          </MainCard>
          <MainCard className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300 p-[16px] ">
            <Image src={devis} className="md:self-center self-center" alt="" />
            <Typography className="md:self-center text-extrabold text-[17px] md:w-[100px] self-center text-architect-text_hover ">
              Devis-2
            </Typography>
            <Typography className="md:self-center text-extrabold text-[17px] md:w-[100px] self-center text-[#888FA7] ">
              01 Feb 2024
            </Typography>
            <Chip
              size="lg"
              value="en attente"
              color="brown"
              className="self-center text-[#B76E00] font-extrabold bg-[#FFAB00] bg-opacity-15 border-0 ml-5 justify-center "
            />
            <div className="flex flex-row gap-5 ml-7  justify-center">
              <Button
                className="bg-[#08D3BB] text-white border-solid border text-[14px] border-[#08D3BB]"
                size="sm"
              >
                Voir Devis
              </Button>
              <div className="flex flex-row items-center gap-2">
                <MdFileDownload className="self-center text-[#344054] size-5 cursor-pointer" />
                <Typography className=" self-center text-[#344054] font-semibold">
                  PDF
                </Typography>
              </div>
            </div>
          </MainCard>
        </div>
      </div>
    </div>
  );
};

export default Card3
