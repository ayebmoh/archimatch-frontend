"use client";
import architectLogo from "@/assets/ArchitectLogo.svg";
import LogoKonnect from "@/assets/LogoKonnect.svg";
import Qr from "@/assets/Qr.svg";
import QrGris from "@/assets/QrGris.svg";
import { MainCard, Popup } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const architectKonnectPage = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const { children } = props;
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [checkboxState, setCheckboxState] = useState("virementBancaire");
  const toggleCheckbox = (checkboxName) => {
    setCheckboxState(checkboxName);
  };
  return (
    <div className="flex flex-col pb-4  w-[70%] md:w-full self-center ">
      <img
        className="hidden lg:block w-40 mr-4 ml-2 cursor-pointer py-0.5 mb-[60px]"
        src={architectLogo.src}
      />

      <Typography
        variant="h4"
        className="lg:text-[30px] text-[20px] font-bold "
      >
        {" "}
        Mode de paiement
      </Typography>
      <Typography
        variant="paragraph"
        className="text-architect-secondary_text_color text-[15px]"
      >
        Choisissez la méthode qui vous convient le mieux et procédez en toute
        confiance
      </Typography>
      <MainCard className=" shadow-lg border-2 rounded-3xl mt-6">
        <img
          className="self-start w-[100px] cursor-pointer py-0.5 "
          src={LogoKonnect.src}
        />
        <Typography className=" text-[13px] mt-2 ">
          Paiement konnect  sélectionné
        </Typography>
        <div className="border-neutral-600 border-b border-1 border-dashed  w-full mt-4 "></div>
        <div className="flex-row flex items-center self-start gap-3 mt-4">
          <img
            className="self-start w-[20px] cursor-pointer py-0.5 "
            src={QrGris.src}
          />
          <Typography className=" text-[14px] flex items-center text-architect-secondary_text_color">
            Après avoir passé votre commande, scannez le code QR à l'aide de
            konnect
          </Typography>
        </div>
      </MainCard>

      <div className="md:mt-10  ">
        <Button
          type="submit"
          size="md"
          className="w-full mt-10 p-4 flex items-center "
          onClick={togglePopup}
          //disabled={isLoading}
        >
          <Typography className="font-semibold self-center flex justify-center text-[15px] w-[100%]">
            Révéler le code QR
          </Typography>

          <LockClosedIcon className=" flex justify-end  h-5 w-5" />
        </Button>
      </div>
      <Popup
        open={showPopup}
        handleOpen={setShowPopup}
        size="sm"
        className=""
        bodyClassName="flex flex-col items-center"
      >
        <div className="flex flex-col shadow-lg items-center border-2 p-0 pt-0 justify-center rounded-3xl">
          <img
            className=" cursor-pointer flex items-center   w-[200px]   "
            src={Qr.src}
          />
          <img
            className="mb-1 w-[100px] flex justify-center cursor-pointer py-0.5 "
            src={LogoKonnect.src}
          />
        </div>

        <Typography className=" text-[14px] flex items-center justify-center self-center text-center text-architect-secondary_text_color mt-3 w-[300px]">
          Utilisez Konnect ou l'appareil photo de votre téléphone pour scanner
          et payer.
        </Typography>
      </Popup>
    </div>
  );
};
export default architectKonnectPage;
