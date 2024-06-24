"use client";
import architectLogo from "@/assets/ArchitectLogo.svg";
import carteEdinar from "@/assets/CarteEdinar.svg";
import virement from "@/assets/Virement.svg";
import visa from "@/assets/Visa.svg";
import { Button, Typography } from "@/components/RemoteComponents";
import {
  ArrowLongRightIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { Checkbox } from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const architectPaiementOnePage = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [checkboxState, setCheckboxState] = useState("virementBancaire");
  const toggleCheckbox = (checkboxName) => {
    setCheckboxState(checkboxName);
  };

  console.log(pathname);
  console.log(pathname.split("/")[3]);
  const handleChangePage = () => {
    if (checkboxState === "virementBancaire") {
      router.push(`${pathname}/Virement/`);
    }
  };

  return (
    <div className="flex flex-col  ">
      <img
        className="hidden lg:block w-40 mr-4 ml-2 cursor-pointer py-0.5 mb-[60px]"
        src={architectLogo.src}
      />
      <Typography variant="h4" className="lg:text-[30px] text-[20px] font-bold">
        {" "}
        Mode de paiement
      </Typography>
      <Typography
        variant="paragraph"
        className="text-architect-secondary_text_color text-[15px]"
      >
        {" "}
        Choisissez la méthode qui vous convient le mieux et procédez en toute
        confiance
      </Typography>
      <div className="flex items-center  ">
        <Button
          type="submit"
          size="md"
          className="w-full mt-10 p-2 flex items-center justify-center gap-2 text-[15px]"
          onClick={() => router.push("/architect/Paiement/Konnect")}
          //disabled={isLoading}
        >
          <RectangleGroupIcon className="h-6 w-6" />
          Payer avec konnect
        </Button>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center gap-2 h-full mt-2">
          <div className="border-t border-1 border-black my-4 w-full"></div>{" "}
          {/* Ligne horizontale simple */}
          <div className="my-2 text-[12px]">ou</div> {/* Texte "ou" */}
          <div className="border-b  border-1 border-black my-4  w-full"></div>{" "}
          {/* Ligne horizontale plus épaisse */}
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {/* Cadre pour la carte E-dinar */}
        <div className="border  border-gray-300 p-3 rounded-md flex flex-row justify-between">
          <Checkbox
            color="red"
            className="rounded-full"
            label={
              <Typography className="flex font-medium text-[16px] ml-3">
                Carte Bancaire
              </Typography>
            }
            checked={checkboxState === "carteBancaire"}
            onChange={() => toggleCheckbox("carteBancaire")}
          />

          <img
            className=" cursor-pointer flex justify-end mr-2"
            src={visa.src}
          />
        </div>

        {/* Cadre pour la carte binaire */}
        <div className="border  border-gray-300 p-3 rounded-md flex flex-row justify-between">
          <Checkbox
            color="red"
            className="rounded-full    "
            label={
              <Typography className="flex font-medium text-[16px] ml-3">
                Carte E-dinar
              </Typography>
            }
            checked={checkboxState === "carteEdinar"}
            onChange={() => toggleCheckbox("carteEdinar")}
          />

          <img
            className=" cursor-pointer flex justify-end mr-2"
            src={carteEdinar.src}
          />
        </div>

        {/* Cadre pour le virement bancaire */}
        <div className="border  border-gray-300 p-2 rounded-md flex flex-row justify-between">
          <Checkbox
            color="red"
            className="rounded-full    "
            label={
              <Typography className="flex font-medium text-[16px] ml-3">
                Virement bancaire
              </Typography>
            }
            checked={checkboxState === "virementBancaire"}
            onChange={() => toggleCheckbox("virementBancaire")}
          />

          <img
            className=" cursor-pointer flex justify-end mr-2"
            src={virement.src}
          />
        </div>
      </div>
      <div className="flex items-center  ">
        <Button
          type="submit"
          size="md"
          className="w-full mt-10 p-2 flex items-center justify-center gap-2 text-[15px]"
          onClick={handleChangePage}
          //disabled={isLoading}
        >
          Suivant
          <ArrowLongRightIcon className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex flex-col self-center ">
        <Typography variant="paragraph" className=" text-[14px] mt-6">
          Paiement sécurisé par carte de crédit
        </Typography>
        <Typography
          variant="paragraph"
          className="text-architect-secondary_text_color text-[12px] self-center  cursor-pointer font-bold"
        >
          Il s'agit d'un paiement sécurisé
        </Typography>
      </div>
    </div>
  );
};
export default architectPaiementOnePage;
