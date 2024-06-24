"use client";
import Agriculture from "@/assets/Agriculture.svg";
import Appartement from "@/assets/Appartement.svg";
import CentreDivertsement from "@/assets/CentreDivertsement.svg";
import Commerce from "@/assets/Commerce.svg";
import Entrepôt from "@/assets/Entrepôt.svg";
import HôtelPalace from "@/assets/HôtelPalace.svg";
import Immeuble from "@/assets/Immeuble.svg";
import Maison from "@/assets/Maison.svg";
import MaisonHOte from "@/assets/MaisonHOte.svg";
import PreferenceDiv from "@/assets/PreferenceDiv.svg";
import Premium from "@/assets/Premium.svg";
import Usine from "@/assets/Usine.svg";
import { MainCard, ToggleButtonList } from "@/components";
import {
  useFindArchi,
  useFindArchiRights,
  useUpdatePreference,
} from "@/services/queries";
import {
  Button,
  Checkbox,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const architectPreferencePage = (props) => {
  const cookiesdata = Cookies.get("id");

  const { data: architect, isLoading, isError } = useFindArchi(cookiesdata);
  const [initialData, setInitialarchData] = useState();
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedWorktypes, setSelectedWorktypes] = useState([]);
  const [selectedGoodtypes, setSelectedGoodtypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedWorksurfaces, setSelectedWorksurfaces] = useState([]);
  const [selectedProjectbudgets, setSelectedProjectbudgets] = useState([]);

  const { data: rights, isloading, iserror } = useFindArchiRights(cookiesdata);

  const formik = useFormik({
    initialValues: {
      id: cookiesdata,
      service: [],
      work_type: ["Aménagement de combles"],
      good_type: [],
      location: [],
      work_surface: [],
      project_budget: [],
    },
    validationSchema: null,
    onSubmit: (values) => {
      console.log("id values:", cookiesdata);
      const formValues = {
        id: cookiesdata,
        service: selectedServices,
        good_type: selectedGoodtypes,
        work_type: selectedWorktypes,
        location: selectedLocations,
        work_surface: selectedWorksurfaces,
        project_budget: selectedProjectbudgets,
      };
      handllePreference(formValues);
    },
  });
  const PreferenceMutation = useUpdatePreference("", {});

  const handllePreference = async (values) => {
    console.log("form values:", values);
    try {
      const response = await PreferenceMutation.mutateAsync(values);
      console.log("Preference Updated successfully", response);
    } catch (error) {
      console.error("Error updating Preference:", error);
    }
  };

  useEffect(() => {
    console.log(selectedWorktypes);
  }, [selectedWorktypes]);

  const toggleServiceSelection = (serviceId) => {
    setSelectedServices((prevSelectedServices) => {
      const isSelected = prevSelectedServices.includes(serviceId);
      const updatedServices = isSelected
        ? prevSelectedServices.filter((id) => id !== serviceId)
        : [...prevSelectedServices, serviceId];
      console.log("Updated services:", updatedServices);

      return updatedServices;
    });
  };
  const toggleGoodtypeSelection = (gtId) => {
    setSelectedGoodtypes((prevSelectedServices) => {
      const isSelected = prevSelectedServices.includes(gtId);
      const updatedgt = isSelected
        ? prevSelectedServices.filter((id) => id !== gtId)
        : [...prevSelectedServices, gtId];
      console.log("Updated gt:", updatedgt);

      return updatedgt;
    });
  };
  const handleList = (list) => {
    if (!Array.isArray(list)) return [];
    console.log("list:", list);
    return list.map((element) => element.display);
  };

  useEffect(() => {
    if (architect && !initialData) {
      setInitialarchData(architect);

      setSelectedServices(
        handleList(architect?.data?.architect?.preference?.service),
      );
      setSelectedWorktypes(
        handleList(architect?.data?.architect?.preference?.work_type),
      );
      setSelectedGoodtypes(
        handleList(architect?.data?.architect?.preference?.good_type),
      );
      setSelectedLocations(
        handleList(architect?.data?.architect?.preference?.location),
      );
      setSelectedWorksurfaces(
        handleList(architect?.data?.architect?.preference?.work_surface),
      );
      setSelectedProjectbudgets(
        handleList(architect?.data?.architect?.preference?.project_budget),
      );
    }
  }, [architect]);
  useEffect(() => {
    if (rights && rights.data) console.log("waa", rights.data.realization);
  }, [rights]);
  const Budget_initial_values = [
    { id: 1, content: "5.000€ - 10.000€" },
    { id: 2, content: "20.000€ - 40.000€" },
    { id: 3, content: "40.000€ - 120.000€" },
    { id: 4, content: "120.000€ - 250.000€" },
    { id: 5, content: "250.000€ - 500.000€" },
    { id: 6, content: "> 500.000€" },
  ];
  const [BudgetValue, setBudgetValue] = useState([
    "20.000€ - 40.000€",
    "120.000€ - 250.000€",
  ]);
  const Surface_initial_values = [
    { id: 1, content: "< 40m²" },
    { id: 2, content: "40m² - 90m²" },
    { id: 3, content: "90m² - 200m²" },
    { id: 4, content: "200m² - 500m²" },
    { id: 5, content: "> 500m²" },
  ];
  const [SurfaceValue, setSurfaceValue] = useState([
    "40m² - 90m²",
    "200m² - 500m²",
  ]);
  const architect_type_initial_values = [
    { id: 1, content: "Aménagement de combles" },
    { id: 2, content: "Extension & aménagement" },
    { id: 3, content: "Surélévation" },
    { id: 4, content: "Construction neuve" },
    { id: 5, content: "Rénovation extérieure" },
    { id: 6, content: "Rénovation intérieure" },
    { id: 7, content: "Autre" },
  ];
  const [value, setValue] = useState([
    "Extension & aménagement",
    "Rénovation extérieure",
    "Autre",
  ]);
  const Localisation_initial_values = [
    { id: 1, content: "Paris" },
    { id: 2, content: "Lyon" },
    { id: 3, content: "Nice" },
    { id: 4, content: "Lille" },
    { id: 5, content: "Strasbourg" },
    { id: 6, content: "Nantes" },
    { id: 7, content: "Toulouse" },
    { id: 8, content: "Marseille" },
  ];
  if (isloading) {
    return <Spinner />;
  } else {
    return (
      <>
        <form className="relative">
          {" "}
          {rights && !rights.data.realization.prop_selon_pref ? (
            <div className="absolute py-[50%] top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2  flex flex-col gap-2">
              <img
                src={Premium.src}
                alt="Premium icon"
                className="h-12 w-12 self-center"
              ></img>
              <Typography className="self-center text-center justify-center font-semibold text-[18px] text-architect-text_hover ">
                Passez au premium pro pour déverrouiller cette fonctionnalité !{" "}
              </Typography>
            </div>
          ) : null}
          <div
            className={`relative ${
              rights && rights.data.realization.prop_selon_pref
                ? ""
                : "bg-cover bg-center w-full h-full blur-md pointer-events-none"
            }`}
          >
            <Typography className="self-start font-semibold text-[18px] text-architect-text_hover ">
              Préférences de Projet
            </Typography>
            <Typography className="self-start text-architect-secondary_text_color text-[15px]">
              Filtrage Personnalisé et Opportunités Ciblées :
            </Typography>
            <MainCard className="p-6 flex flex-col items-center justify-center lg:flex-row bg-gradient-to-r from-[#daf2ff] to-[#f3fdff] mt-6 ">
              <div className=" flex flex-col self-center justify-center items-center">
                <img
                  className="w-[120px] self-center cursor-pointer py-0.5 "
                  src={PreferenceDiv.src}
                />
                <Typography
                  variant="paragraph"
                  className="text-architect-font_gris text-[16px] font-bold self-center lg:w-[620px] "
                >
                  Définissez vos critères, recevez des notifications dès qu'un
                  projet aligné avec vos préférences est disponible. Gagnez du
                  temps ne ratez aucune opportunité.
                </Typography>
              </div>
            </MainCard>
            <Typography className="self-start font-normal text-[16px] text-architect-text_hover mt-5">
              Types de travaux
            </Typography>
            <ToggleButtonList
              className="lg:w-full lg:h-[85px] mt-4"
              data={architect_type_initial_values}
              value={selectedWorktypes}
              onChange={setSelectedWorktypes}
              multi
            />
            <Typography className="self-start font-normal text-[16px] text-architect-text_hover mt-7">
              Type de bien
            </Typography>
            <div className="flex lg:flex-row  flex-col space-x-2 mt-2 ">
              <div className="border-2 border-slate-500 px-10 flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px] "
                  src={Maison.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Maison
                </Typography>
              </div>
              <div className="border-2 border-slate-500 px-10  flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px] "
                  src={Commerce.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Commerce
                </Typography>
              </div>
              <div className="border-2 border-slate-500 px-10  flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px] "
                  src={Appartement.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Appartement
                </Typography>
              </div>
              <div className="border-2 border-slate-500 px-10 flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px] "
                  src={Immeuble.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Immeuble
                </Typography>
              </div>
              <div className="border-2 border-slate-500 px-10 flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px] "
                  src={CentreDivertsement.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Centre de divertsement
                </Typography>
              </div>
            </div>
            <div className="flex lg:flex-row  flex-col space-x-2 mt-3">
              <div className="border-2 border-slate-500 px-10 flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px] "
                  src={MaisonHOte.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Maison d’hôte
                </Typography>
              </div>
              <div className="border-2 border-slate-500 px-10 flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px]"
                  src={HôtelPalace.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Hôtel Palace
                </Typography>
              </div>
              <div className="border-2 border-slate-500 px-10  flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px] "
                  src={Entrepôt.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Entrepôt
                </Typography>
              </div>
              <div className="border-2 border-slate-500 px-10  flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px] "
                  src={Agriculture.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Agriculture
                </Typography>
              </div>
              <div className="border-2 border-slate-500 px-10  flex flex-col gap-2 items-center py-2 rounded mb-2">
                <img
                  className=" cursor-pointer flex justify-center w-[63px] h-[44px] "
                  src={Usine.src}
                />
                <Typography className="text-center font-bold text-[13px] w-[70px] text-architect-dark_blue">
                  Usine
                </Typography>
              </div>
            </div>
            <Typography className="self-start font-normal text-[16px] text-architect-text_hover mt-3">
              Services
            </Typography>
            <div className="flex flex-row items-center gap-2 mt-2">
              <Checkbox
                color="red"
                checked={selectedServices.includes(
                  "Créer des détails architecturaux uniques et personnalisés",
                )}
                onChange={() =>
                  toggleServiceSelection(
                    "Créer des détails architecturaux uniques et personnalisés",
                  )
                }
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Créer des détails architecturaux uniques et personnalisés
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox
                checked={selectedServices.includes(
                  "Estimation des coûts des travaux",
                )}
                onChange={() =>
                  toggleServiceSelection("Estimation des coûts des travaux")
                }
                color="red"
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Estimation des coûts des travaux
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox
                checked={selectedServices.includes("Concevoir une extension")}
                onChange={() =>
                  toggleServiceSelection("Concevoir une extension")
                }
                color="red"
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Concevoir une extension
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox
                checked={selectedServices.includes(
                  "Rénover mon espace intérieur",
                )}
                onChange={() =>
                  toggleServiceSelection("Rénover mon espace intérieur")
                }
                color="red"
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Rénover mon espace intérieur
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox
                checked={selectedServices.includes(
                  "Créer des aménagements extérieurs personnalisés",
                )}
                onChange={() =>
                  toggleServiceSelection(
                    "Créer des aménagements extérieurs personnalisés",
                  )
                }
                color="red"
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Créer des aménagements extérieurs personnalisés
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox
                checked={selectedServices.includes(
                  "Estimation de la durée des travaux",
                )}
                onChange={() =>
                  toggleServiceSelection("Estimation de la durée des travaux")
                }
                color="red"
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Estimation de la durée des travaux
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox
                checked={selectedServices.includes(
                  "Obtenir un rendez-vous pour avoir des conseils et des clarifications",
                )}
                onChange={() =>
                  toggleServiceSelection(
                    "Obtenir un rendez-vous pour avoir des conseils et des clarifications",
                  )
                }
                color="red"
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Obtenir un rendez-vous pour avoir des conseils et des
                clarifications
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox
                checked={selectedServices.includes(
                  "Gérer l'ensemble du processus de construction",
                )}
                onChange={() =>
                  toggleServiceSelection(
                    "Gérer l'ensemble du processus de construction",
                  )
                }
                color="red"
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Gérer l'ensemble du processus de construction
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox
                checked={selectedServices.includes(
                  "Superviser et coordonner les travaux de construction de mon projet",
                )}
                onChange={() =>
                  toggleServiceSelection(
                    "Superviser et coordonner les travaux de construction de mon projet",
                  )
                }
                color="red"
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Superviser et coordonner les travaux de construction de mon
                projet
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Checkbox
                checked={selectedServices.includes(
                  "Obtenir les autorisations nécessaires auprès des autorités locales",
                )}
                onChange={() =>
                  toggleServiceSelection(
                    "Obtenir les autorisations nécessaires auprès des autorités locales",
                  )
                }
                color="red"
              ></Checkbox>
              <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
                Obtenir les autorisations nécessaires auprès des autorités
                locales
              </Typography>
            </div>
            <Typography className="self-start font-normal text-[16px] text-architect-text_hover mt-3">
              Localisation du projet
            </Typography>
            <ToggleButtonList
              className="lg:w-full lg:h-[85px] mt-4"
              data={Localisation_initial_values}
              value={selectedLocations}
              onChange={setSelectedLocations}
              multi
            />
            <Typography className="self-start font-normal text-[16px] text-architect-text_hover mt-5">
              Surface des travaux
            </Typography>
            <ToggleButtonList
              className="lg:w-full mt-4"
              data={Surface_initial_values}
              value={selectedWorksurfaces}
              onChange={setSelectedWorksurfaces}
              multi
            />
            <Typography className="self-start font-normal text-[16px] text-architect-text_hover mt-5">
              Budget du projet
            </Typography>
            <ToggleButtonList
              className="lg:w-full mt-4"
              data={Budget_initial_values}
              value={selectedProjectbudgets}
              onChange={setSelectedProjectbudgets}
              multi
            />
            <div className="flex flex-col   ">
              <div className="flex flex-row  self-end gap-3 ">
                <Button
                  color="gray"
                  variant="outlined"
                  className=" mt-16 font-semibold  md:text-[14px] text-[12px] "
                  type="submit"
                  size="md"
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  size="md"
                  className=" mt-16 self-end font-semibold  md:text-[14px] text-[12px] "
                  onClick={formik.handleSubmit}
                  //disabled={isLoading}
                >
                  Enregistrer
                </Button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
};
export default architectPreferencePage;
