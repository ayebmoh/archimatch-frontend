import Chantier from "@/assets/Chantier.svg";
import Construire from "@/assets/Construire.svg";
import DecoExter from "@/assets/DecoExter.svg";
import DecoInter from "@/assets/DecoInter.svg";
import DocTech from "@/assets/DocTech.svg";
import File from "@/assets/File.svg";
import Peinture from "@/assets/Peinture.svg";
import { Popup } from "@/components";
import CheckToggleList from "@/components/toggles/CheckToggleList";
import { useFetchData, useUpdateService } from "@/services/queries";
import { Button, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
function ServicesTab() {
  const cookiesdata = Cookies.get("id");
  const { data: architect, isLoading } = useFetchData(
    `/archimatch_app/architect/find_architect_by_user/${cookiesdata}/`,
    "architect",
  );
  const needs_values = [
    { id: 1, content: "Plans permis et suivi chantier", image: Chantier },
    { id: 2, content: "Plan 3d de décoration intérieur", image: DecoInter },
    { id: 3, content: "Plans et permis de construire", image: Construire },
    { id: 4, content: "Plans et documents techniques", image: DocTech },
    { id: 5, content: "Plan 3d de décoration extérieur", image: DecoExter },
    { id: 6, content: "Plan 3d de décoration extérieurr", image: Peinture },
  ];
  const [value, setValue] = useState([]);

  useEffect(() => {
    console.log(value);
  }, [value]);
  const [showPopup, setShowPopup] = useState(false);
  const [checkboxState, setCheckboxState] = useState({
    DecoInterr: false,
    Chantierr: false,
    Construiree: false,
    DocTechh: false,
    Peinturee: false,
    Autree: false,
  });

  // Fonction pour basculer l'état d'une case à cocher
  const toggleCheckbox = (checkboxName) => {
    setCheckboxState({
      ...checkboxState,
      [checkboxName]: !checkboxState[checkboxName],
    });
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const UpdateServiceMutation = useUpdateService("services");

  const handleCreate = (values) => {
    if (value.length > 0) {
      UpdateServiceMutation.mutate({ id: cookiesdata, services: value });
    }
  };
  return (
    <>
      <div className="flex flex-row gap-2 flex-wrap">
        {architect?.data.architect.services.length > 0 ? (
          <>
            {architect?.data.architect.services.map((element, index) =>
              index === 0 ? (
                <div className="flex flex-row gap-2">
                  {" "}
                  <div
                    className=" border-2 border-gray-300 border-dashed w-ful  rounded-lg p-[6px] mt-6 cursor-pointer min-w-[250px]"
                    onClick={togglePopup}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-13 cursor-pointer py-0.5  "
                        src={File.src}
                      />
                      <Typography className="p-0 m-0 self-center text-[15px] text-architect-dark_blue font-semibold  ">
                        Modifier les services
                      </Typography>
                    </div>
                  </div>{" "}
                  <div className=" border-gray-100 border-solid shadow-md rounded-lg border-2 self-end p-4 pt-0 min-w-[200px] mt-[30px]">
                    {/* <img
          className="cursor-pointer flex justify-end mt-[-35px]"
          src={Peinture.src}
        /> */}
                    <Typography className=" self-center text-[12px] text-architect-dark_blue font-semibold  mt-3">
                      {element.display}
                    </Typography>
                  </div>{" "}
                </div>
              ) : (
                <div className=" border-gray-100 border-solid shadow-md rounded-lg border-2 self-end p-4 pt-0 min-w-[200px] mt-[30px]">
                  {/* <img
            className="cursor-pointer flex justify-end mt-[-35px]"
            src={Peinture.src}
          /> */}
                  <Typography className=" self-center text-[12px] text-architect-dark_blue font-semibold  mt-3">
                    {element.display}
                  </Typography>
                </div>
              ),
            )}
          </>
        ) : (
          <div
            className=" border-2 border-gray-300 border-dashed w-ful  rounded-lg p-[6px] mt-6 cursor-pointer min-w-[250px]"
            onClick={togglePopup}
          >
            <div className="flex flex-col items-center justify-center">
              <img className="w-13 cursor-pointer py-0.5  " src={File.src} />
              <Typography className="p-0 m-0 self-center text-[15px] text-architect-dark_blue font-semibold  ">
                Ajouter vos services
              </Typography>
            </div>
          </div>
        )}

        {/* <div className=" border-gray-100 border-solid shadow-md rounded-lg border-2 self-end p-4 pt-0 min-w-[200px] mt-[30px]">
          <img
            className="cursor-pointer flex justify-end mt-[-35px]"
            src={Chaise.src}
          />
          <Typography className=" self-center text-[12px] text-architect-dark_blue font-semibold  mt-3">
            Choisir le mobilier et les accessoires
          </Typography>
        </div>
        <div className=" border-gray-100 border-solid shadow-md rounded-lg border-2 self-end p-4 pt-0 min-w-[200px] mt-[30px]">
          <img
            className=" cursor-pointer flex justify-end mt-[-28px]"
            src={MapConstruction.src}
          />
          <Typography className=" self-center text-[12px] text-architect-dark_blue font-semibold  mt-3">
            Conception du plan 2D et 3D
          </Typography>
        </div>
        <div className=" border-gray-100 border-solid shadow-md rounded-lg border-2 self-end p-4 pt-0 min-w-[200px] mt-[30px]">
          <img
            className=" cursor-pointer flex justify-end mt-[-30px]"
            src={Peinturee.src}
          />
          <Typography className=" self-center text-[12px] text-architect-dark_blue font-semibold  mt-3">
            Choix de décoration et peinture
          </Typography>
        </div>
        <div className=" border-gray-100 border-solid shadow-md rounded-lg border-2 self-end p-4 pt-0 min-w-[200px] mt-[30px]">
          <img
            className=" cursor-pointer flex justify-end mt-[-30px]"
            src={MaisonArch.src}
          />
          <Typography className=" self-center text-[12px] text-architect-dark_blue font-semibold  mt-3">
            Réaménager dans un espace de vie
          </Typography>
        </div> */}
      </div>
      <Popup
        header="Pouvez-vous me donner un aperçu des services que vous offrez ?"
        headerClassName="text-center self-center lg:w-[60%] md:w-[70%] text-center"
        open={showPopup}
        handleOpen={togglePopup}
        size="md"
        bodyClassName="flex flex-col items-center"
      >
        <CheckToggleList
          data={needs_values}
          value={value}
          onChange={setValue}
          className=""
          multi
          architect
        />

        <div className="flex flex-row  self-end gap-3 ">
          <Button
            type="submit"
            size="md"
            className=" mt-16 self-end font-semibold  md:text-[14px] text-[12px] "
            onClick={() => {
              handleCreate();
              setShowPopup(false);
            }}
            //disabled={isLoading}
          >
            Enregistrer
          </Button>
        </div>
      </Popup>
    </>
  );
}

export default ServicesTab;
