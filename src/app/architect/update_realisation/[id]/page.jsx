"use client";
import Chantier from "@/assets/Chantier.svg";
import Construire from "@/assets/Construire.svg";
import DecoExter from "@/assets/DecoExter.svg";
import DecoInter from "@/assets/DecoInter.svg";
import DocTech from "@/assets/DocTech.svg";
import FirstRealisationn from "@/assets/FirstRealisationn.svg";
import FourthRealisationn from "@/assets/FourthRealisationn.svg";
import Peinture from "@/assets/Peinture.svg";
import SecondRealisationn from "@/assets/SecondRealisationn.svg";
import ThirdRealisationn from "@/assets/ThirdRealisationn.svg";
import {
  CustomSelect,
  CustomTextArea,
  FileUploader,
  MainCard,
  ToggleButtonList,
} from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import CheckToggleList from "@/components/toggles/CheckToggleList";
import SmallImageToggleList from "@/components/toggles/SmallImageToggleList";
import { useFetchData, useUpdateRealisation } from "@/services/queries";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Spinner } from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Step7 = (props) => {
  // ------------------------------ states ---------------------------------------------
  const [value, setValue] = useState();
  const [workStyle, setworkStyle] = useState();
  const [needss, setneedss] = useState();
  const [images, setImages] = useState([]);

  // ------------------------------ end states ---------------------------------------------
  const router = useRouter();
  const pathname = usePathname();
  const [update, setUpdate] = useState(true);
  const cookiesdata = Cookies.get("id");
  const {
    data: realisation,
    isLoading,
    isFetching,
    isPending,
    isSuccess,
  } = useFetchData(
    `/archimatch_app/Realization/${
      pathname.split("/")[3]
    }/view_realization_by_id/`,
    "realisation",
  );
  useEffect(() => {
    console.log(realisation);
  }, [realisation]);
  const formik = useFormik({
    initialValues: {
      categories: realisation && realisation?.data.realization.categorie,
      images: "",
      work_style: "",
      town: "",
      surface_travaux: "",
      details: "",
      need: "",
    },
    onSubmit: () => {
      handleData();
      console.log(validations[0].formik.values);
    },
  });
  const CreateUpdateMutation = useUpdateRealisation("realisations", router);

  async function blobURLtoFile(blobUrl, filename) {
    try {
      const response = await fetch(blobUrl);
      const blob = await response.blob();
      return new File([blob], filename);
    } catch (error) {
      console.error("Error converting Blob URL to File:", error);
      return null;
    }
  }

  const handleData = async () => {
    const formData = new FormData();

    formData.append("id", realisation.data.realization.id); // Add other fields
    formData.append("categories", formik.values.categories);
    formData.append("work_style", formik.values.work_style);
    formData.append("town", formik.values.town);
    formData.append("surface_travaux", formik.values.surface_travaux);
    formData.append("need", formik.values.need);
    formData.append("details", formik.values.details);
    formData.append("project_title", formik.values.project_title);

    const files = await Promise.all(
      formik.values.images.map(async (image) => {
        if (typeof image === "object" && image.url && image.name) {
          // For images with object type
          return await blobURLtoFile(image.url, image.name);
        } else if (typeof image === "string") {
          // For image URLs
          const filename = image.substring(image.lastIndexOf("/") + 1); // Extract filename from URL
          return await blobURLtoFile("http://localhost:8000" + image, filename);
        }
      }),
    );

    // Append File objects to FormData
    files.forEach((file, index) => {
      formData.append(`images`, file);
    });

    await CreateUpdateMutation.mutate(formData);
  };

  useEffect(() => {
    if (realisation && update) {
      setValue(realisation?.data.realization?.categorie?.display);
      setworkStyle(realisation?.data.realization.style);
      formik.setFieldValue(
        "details",
        realisation?.data.realization.description,
      );
      setneedss(realisation?.data.realization.service);
      setUpdate(false);
      formik.setFieldValue(
        "surface_travaux",
        realisation?.data.realization.surface,
      );
      formik.setFieldValue("town", realisation?.data.realization.city);
      formik.setFieldValue(
        "images",
        realisation?.data.realization.images?.map((img) => img.image),
      );
      setImages(realisation?.data.realization?.images?.map((img) => img.image));
    }
  }, [realisation]);

  //   useEffect(() => {
  //     console.log(formik.values);
  //   }, [formik]);
  useEffect(() => {
    formik.setFieldValue("images", images);
  }, [images]);
  //   useEffect(() => {
  //     console.log(update);
  //   }, [update]);

  const needss_values = [
    { id: 1, content: "Plans permis et suivi chantier", image: Chantier },
    { id: 2, content: "Plan 3d de décoration intérieur", image: DecoInter },
    { id: 3, content: "Plans et permis de construire", image: Construire },
    { id: 4, content: "Plans et documents techniques", image: DocTech },
    { id: 5, content: "Plan 3d de décoration extérieur", image: DecoExter },
    { id: 6, content: "Plan 3d de décoration extérieurr", image: Peinture },
  ];
  const needs_values = [
    { id: 1, content: "Architecture Moderne" },
    { id: 2, content: "Architecture Contemporaine" },
    { id: 3, content: "Architecture Méditerranéenne" },
    { id: 4, content: "Style Traditionnel" },
    { id: 5, content: "Architecture de Tourisme" },
    { id: 6, content: "Architecture Institutionnelle et Publique" },
  ];

  const architect_type_initial_values = [
    { id: 1, content: "< 40m²" },
    { id: 2, content: "40m² - 90m²" },
    { id: 3, content: "90m² - 200m²" },
    { id: 4, content: "200m² - 500m²" },
    { id: 5, content: "> 500m²" },
  ];
  const villes = [
    { id: 1, content: "Tunis", value: "Tunis" },
    { id: 2, content: "Monastir", value: "Monastir" },
    { id: 3, content: "Sousse", value: "Sousse" },
    { id: 4, content: "Mahdia", value: "Mahdia" },
  ];

  const categories_values = [
    { id: 1, content: "Construction logement", image: FirstRealisationn },
    { id: 2, content: "Point vente et commercial", image: FourthRealisationn },
    { id: 3, content: "Grand œuvre immobilier", image: SecondRealisationn },
    { id: 4, content: "Industrielle", image: ThirdRealisationn },
  ];

  // Function to convert data URL to File object
  const backend = "http://localhost:8000";

  return (
    <>
      <div>
        <>
          <div className="flex flex-col lg:mx-auto  max-w-screen-2xl w-[100%]">
            <div className="flex  mt-9">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[15px] font-semibold flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/architect/Profile")}
              >
                <ArrowLeftIcon className="h-4 w-4" />
                retour
              </Typography>
            </div>
            <Typography
              variant="h1"
              className="text-architect-font_gris text-[25px] lg:text-[30px] font-semibold   mt-5"
            >
              Details du projet{" "}
            </Typography>
          </div>

          <MainCard className="max-w-screen-2xl w-[100%] basis-0 mx-auto mt-[38px] py-8 z-50 mb-24 shadow-xl p-4">
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="flex flex-col">
                <div className="flex flex-row justify-between ">
                  <div className="flex flex-col">
                    <Typography
                      variant="h1"
                      className="text-architect-font_gris text-[15px]  lg:text-[20px] font-bold   "
                    >
                      La Catégorie de Projet
                    </Typography>
                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[10px] font-normal lg:text-[15px]  mt-2 "
                    >
                      Pour commencer, veuillez sélectionner votre spécialité
                    </Typography>
                  </div>

                  <div className="flex flex-col w-[60%]">
                    <Typography
                      variant="h1"
                      className="text-architect-font_gris text-[15px]  lg:text-[20px] font-bold   "
                    >
                      Catégorie de projet{" "}
                    </Typography>
                    <div className="mt-2">
                      <SmallImageToggleList
                        data={categories_values}
                        value={value}
                        onChange={setValue}
                        className="m-auto"
                        formik={formik}
                        formikValue={"categories"}
                        architect
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between  ">
                  <div className=" mt-4 flex flex-col">
                    <Typography
                      variant="h1"
                      className="text-architect-font_gris text-[15px]  lg:text-[20px] font-bold   "
                    >
                      Plus de détails
                    </Typography>
                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[10px] font-normal lg:text-[15px] mt-4 "
                    >
                      Titre, localisation, superficie, description...{" "}
                    </Typography>
                  </div>
                  <div className="  flex flex-col w-[60%]">
                    <Typography
                      variant="h1"
                      className="text-architect-font_gris text-[15px]  lg:text-[20px] font-bold mt-4  "
                    >
                      détails d'exécution
                    </Typography>
                    <div className="mt-2">
                      <CustomSelect
                        options={villes}
                        label="Ville"
                        containerClassName="mt-4 w-full w-full"
                        value={formik.values.town}
                        onChange={(value) =>
                          formik.setFieldValue("town", value)
                        }
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.town && formik.errors.town
                            ? true
                            : false
                        }
                        success={
                          formik.touched.town && !formik.errors.town
                            ? true
                            : false
                        }
                        errorMessage={
                          formik.touched.town && formik.errors.town
                            ? formik.errors.town
                            : undefined
                        }
                        name="town"
                      />
                    </div>
                    <Typography className="text-architect-dark_blue font-semibold text-[14px] mt-2">
                      Surface des travaux
                    </Typography>

                    <ToggleButtonList
                      className="mt-2"
                      data={architect_type_initial_values}
                      value={formik.values.surface_travaux}
                      formikValue={"surface_travaux"}
                      formik={formik}
                    />
                    <CustomTextArea
                      containerClassName=" w-full lg:w-full mt-5 "
                      placeholder="Write something awesome..."
                      value={formik.values.details}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.details && formik.errors.details
                          ? true
                          : false
                      }
                      success={
                        formik.touched.details && !formik.errors.details
                          ? true
                          : false
                      }
                      errorMessage={
                        formik.touched.details && formik.errors.details
                          ? formik.errors.details
                          : undefined
                      }
                      label="Description du projet "
                      name="details"
                      rows="7"
                      cols="50"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className=" mt-4 flex flex-col">
                    <Typography
                      variant="h1"
                      className="text-architect-font_gris text-[15px]  lg:text-[20px] font-bold   "
                    >
                      Style
                    </Typography>
                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[10px] font-normal lg:text-[15px]  mt-4 "
                    >
                      Style adopter pour le projet{" "}
                    </Typography>
                  </div>

                  <div className=" mt-4 w-[60%]">
                    <Typography className="text-architect-dark_blue font-semibold  text-[15px]  lg:text-[20px] ">
                      Le style adopter pour le projet
                    </Typography>
                    <CheckToggleList
                      data={needs_values}
                      value={workStyle}
                      onChange={setworkStyle}
                      className=" mt-4"
                      formik={formik}
                      architect
                      formikValue={"work_style"}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col mt-4">
                    <Typography
                      variant="h1"
                      className="text-architect-font_gris text-[15px]  lg:text-[20px] font-bold   "
                    >
                      Les services
                    </Typography>
                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[10px] font-normal lg:text-[15px]  mt-4 "
                    >
                      Les services approuvée pour le projet{" "}
                    </Typography>
                  </div>
                  <div className="mt-4 w-[60%]">
                    <Typography className="text-architect-dark_blue font-semibold  text-[15px]  lg:text-[20px] ">
                      Les services approuvée
                    </Typography>
                    <CheckToggleList
                      data={needss_values}
                      value={needss}
                      onChange={setneedss}
                      className="mt-4"
                      formik={formik}
                      formikValue={"need"}
                      architect
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col mt-4">
                    <Typography
                      variant="h1"
                      className="text-architect-font_gris text-[15px]  lg:text-[20px] font-bold   "
                    >
                      Galerie
                    </Typography>
                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[10px] font-normal lg:text-[15px]  mt-4 "
                    >
                      Des photos pour le projet
                    </Typography>
                  </div>
                  <div className=" mt-4 w-[60%]">
                    <Typography className="text-architect-dark_blue font-semibold  text-[15px]  lg:text-[20px] ">
                      Galerie
                    </Typography>
                    <FileUploader
                      className="w-[780px] h-[237px]"
                      formik={formik}
                      formikValue="images"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-end self-end gap-3  h-full ">
                  <Button
                    color="gray"
                    variant="outlined"
                    className=" mt-16 font-semibold w-[170px] md:text-[16px] text-[14px]"
                    type="submit"
                    size="md"
                    onClick={() => setUpdate(false)}
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    size="md"
                    className=" mt-16 font-semibold  md:text-[16px] text-[14px]"
                    onClick={formik.handleSubmit}
                    //disabled={isLoading}
                  >
                    Enregistrer les changements
                  </Button>
                </div>
              </div>
            )}
          </MainCard>
        </>
      </div>
    </>
  );
};

export default Step7;
