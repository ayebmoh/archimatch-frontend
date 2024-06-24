import Chaise from "@/assets/Chaise.svg";
import Right from "@/assets/Right.svg";
import { MainCard } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { useFetchData } from "@/services/queries";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Update from "./Update";

const Step7 = (props) => {
  const router = useRouter();
  const [formValues, setForm] = useState();
  const { isUpdate, setUpdate, formik, handleSubmit } = props;
  const cookiesdata = Cookies.get("id");

  const { data: arch, isLoading } = useFetchData(
    `/archimatch_app/user/${cookiesdata}/`,
    "arch",
  );
  // Function to convert data URL to File object
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

    formData.append("aa", "bb");
    formData.append("id", cookiesdata); // Add other fields
    formData.append("categories", formik.values.categories);
    formData.append("work_style", formik.values.work_style);
    formData.append("town", formik.values.town);
    formData.append("surface_travaux", formik.values.surface_travaux);
    formData.append("need", formik.values.need);
    formData.append("details", formik.values.details);
    formData.append("project_title", formik.values.project_title);
    let images = [];
    // Debugging: Print images to console
    console.log("Images:", formik.values.images);

    const files = await Promise.all(
      formik.values.images.map(async (image) => {
        const file = await blobURLtoFile(image.url, image.name);
        return file;
      }),
    );

    // Append File objects to FormData
    files.forEach((file, index) => {
      formData.append(`images`, file);
    });
    await handleSubmit(formData);
  };
  return (
    <>
      {!isUpdate ? (
        <div>
          <img
            className=" cursor-pointer self-start w-[50px] "
            src={Right.src}
          />{" "}
          <Typography
            variant="h1"
            className="text-architect-font_gris text-[20px]  lg:text-[35px] font-bold mt-5 "
          >
            Terminé !
          </Typography>
          <Typography
            variant="paragraph"
            className="text-architect-secondary_text_color  text-[10px] lg:text-[15px]  "
          >
            Voici un aperçu de votre projet nouvellement créée{" "}
          </Typography>
          <Typography
            variant="h1"
            className="text-architect-font_gris text-[10px]  lg:text-[25px] font-bold mt-10 "
          >
            {formik.values.project_title}
          </Typography>
          <div className="flex lg:flex-row flex-col  justify-between mt-4 ">
            <div className="flex flex-col gap-8 lg:w-[60%] w-full">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-justify text-[15px] lg:text-[17px]  "
              >
                {formik.values.details}
              </Typography>
            </div>
            <MainCard className="flex flex-col  lg:w-[30%] w-full self-start">
              <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue ">
                Catégorie de projet
              </Typography>
              <Typography className=" text-[16px] self-start text-architect-secondary_text_color mt-1 ">
                {formik.values.categories}
              </Typography>
              <div className="border-dashed border-t-2   border-y-5  mt-4">
                <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
                  Style
                </Typography>
                <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
                  {formik.values.work_style}
                </Typography>
              </div>
              <div className="border-dashed border-t-2   border-y-5  mt-4  ">
                <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
                  Superficie
                </Typography>
                <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
                  {formik.values.surface_travaux}
                </Typography>
              </div>
              <div className="border-dashed border-t-2   border-y-5  mt-4  ">
                <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
                  Localisation
                </Typography>
                <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
                  {formik.values.town}
                </Typography>
              </div>
            </MainCard>
          </div>
          <Typography className="font-semibold text-[25px]  text-architect-dark_blue mt-2 ">
            Les services
          </Typography>
          <Typography className=" text-[15px] self-center text-architect-secondary_text_color  ">
            Services approuvés requis pour le projet :
          </Typography>
          <div className="flex flex-col space-y-3 mt-4">
            <div className="flex  flex-row   items-center gap-3  ">
              <img
                className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                src={Chaise.src}
              />
              <Typography className=" text-[17px] self-center ">
                {formik.values.need}
              </Typography>
            </div>
            {/* <div className="flex  flex-row   items-center gap-3  ">
              <img
                className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                src={Peinture.src}
              />
              <Typography className=" text-[17px] self-center ">
                Choisir les couleurs et les matériaux
              </Typography>
            </div>
            <div className="flex  flex-row   items-center gap-3   ">
              <img
                className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                src={MaisonArch.src}
              />
              <Typography className=" text-[17px] self-center ">
                Créer un design moderne et fonctionnel
              </Typography>
            </div> */}
          </div>
          <Typography className="font-semibold text-[25px]  text-architect-dark_blue mt-7 ">
            Galerie
          </Typography>
          <div className="flex flex-row   mt-3 w-full gap-6  justify-center">
            <div className="   rounded-md flex-grow basis-0">
              <img
                className=" cursor-pointer  w-full h-full self-start rounded-lg "
                src={formik.values.images[0].url}
              />
            </div>

            <div className="flex flex-col  gap-2 flex-grow basis-0">
              <div className="flex flex-row gap-2 flex-wrap">
                {formik.values.images.map((element, index) => {
                  if (index !== 0) {
                    return (
                      <div className="rounded-md md:w-[45%] w-full min-w-[200px] ">
                        <img
                          className=" cursor-pointer w-full h-full  self-end rounded-md"
                          src={element.url}
                        />
                      </div>
                    );
                  }
                })}
              </div>
              {/* <div className="flex flex-row gap-2">
                <img
                  className=" cursor-pointer   self-start "
                  src={ValidationImage4.src}
                />
                <img
                  className=" cursor-pointer  self-end "
                  src={ValidationImage5.src}
                />
              </div> */}
            </div>
          </div>
          <div className="flex flex-row justify-end self-end gap-3  h-full ">
            <Button
              color="gray"
              variant="outlined"
              className=" mt-16 font-semibold w-[170px] md:text-[16px] text-[14px]"
              type="submit"
              size="md"
              onClick={() => setUpdate(true)}
            >
              Modifier
            </Button>
            <Button
              type="submit"
              size="md"
              className=" mt-16 w-[170px] font-semibold  md:text-[16px] text-[14px]"
              onClick={async () => await handleData()}
              //disabled={isLoading}
            >
              Publier
            </Button>
          </div>
        </div>
      ) : (
        <Update isUpdate={isUpdate} setUpdate={setUpdate} formik={formik} />
      )}
    </>
  );
};

export default Step7;
