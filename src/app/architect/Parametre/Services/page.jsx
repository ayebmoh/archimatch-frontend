"use client";
import Chantier from "@/assets/Chantier.svg";
import Construire from "@/assets/Construire.svg";
import DecoExter from "@/assets/DecoExter.svg";
import DecoInter from "@/assets/DecoInter.svg";
import DocTech from "@/assets/DocTech.svg";
import Peinture from "@/assets/Peinture.svg";
import { useUpdateService } from "@/services/queries";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";

import { useEffect, useState } from "react";

const architectServicesPage = (props) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const cookiesdata = Cookies.get("id");

  const formik = useFormik({
    initialValues: {
      id: cookiesdata,
      services: [],
    },
    validationSchema: null,
    onSubmit: (values) => {
      console.log("id values:", cookiesdata);
      console.log("rights values:", selectedServices);
      const formValues = {
        id: cookiesdata,
        services: selectedServices,
      };
      handleServices(formValues);
    },
  });
  const ServicesMutation = useUpdateService("", {});

  const handleServices = async (values) => {
    console.log("form values:", values);
    try {
      const response = await ServicesMutation.mutateAsync(values);
      console.log("service Updated successfully", response);
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  useEffect(() => {
    console.log(selectedServices);
  }, [selectedServices]);

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography className="self-start text-semibold text-[18px] ">
        Les services
      </Typography>
      <Typography className="self-start text-architect-secondary_text_color text-[15px]">
        un aperçu des services que vous offrez
      </Typography>
      <div className="flex flex-col  ">
        <div className="flex flex-col gap-4 lg:flex-row mb-4 mt-3">
          <div className="border  border-gray-300 p-3 rounded-md flex flex-row justify-between gap-7 w-full lg:w-[50%]">
            <Checkbox
              color="red"
              className=""
              label={
                <Typography className="flex font-medium text-[14px] ml-3  text-architect-font_gris">
                  Plans permis et suivi chantier
                </Typography>
              }
              onChange={() =>
                toggleServiceSelection("Plans permis et suivi chantier")
              }
              checked={selectedServices.includes(
                "Plans permis et suivi chantier",
              )}
            />

            <img
              className=" cursor-pointer flex justify-end "
              src={Chantier.src}
            />
          </div>
          <div className="border  border-gray-300 p-2 rounded-md flex flex-row justify-between gap-7 w-full lg:w-[50%]">
            <Checkbox
              color="red"
              className=""
              label={
                <Typography className="flex font-medium text-[14px] ml-3 text-architect-font_gris">
                  Plan 3d de décoration intérieur
                </Typography>
              }
              onChange={() =>
                toggleServiceSelection("Plan 3d de décoration intérieur")
              }
              checked={selectedServices.includes(
                "Plan 3d de décoration intérieur",
              )}
            />

            <img
              className=" cursor-pointer flex justify-end mr-2"
              src={DecoInter.src}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row mb-4 mt-3">
          <div className="border  border-gray-300 p-3 rounded-md flex flex-row justify-between gap-7 w-full lg:w-[50%]">
            <Checkbox
              color="red"
              className=""
              label={
                <Typography className="flex font-medium text-[14px] ml-3 text-architect-font_gris ">
                  Plans et permis de construire
                </Typography>
              }
              onChange={() =>
                toggleServiceSelection("Plans et permis de construire")
              }
              checked={selectedServices.includes(
                "Plans et permis de construire",
              )}
            />

            <img
              className=" cursor-pointer flex justify-end mr-2"
              src={Construire.src}
            />
          </div>
          <div className="border  border-gray-300 p-2 rounded-md flex flex-row justify-between gap-7 w-full lg:w-[50%]">
            <Checkbox
              color="red"
              className="    "
              label={
                <Typography className="flex font-medium text-[14px] ml-3 text-architect-font_gris">
                  Plans et documents techniques{" "}
                </Typography>
              }
              onChange={() =>
                toggleServiceSelection("Plans et documents techniques")
              }
              checked={selectedServices.includes(
                "Plans et documents techniques",
              )}
            />

            <img
              className=" cursor-pointer flex justify-end mr-2"
              src={DocTech.src}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row mb-4 mt-3">
          <div className="border  border-gray-300 p-3 rounded-md flex flex-row justify-between gap-7 w-full lg:w-[50%]">
            <Checkbox
              color="red"
              className=""
              label={
                <Typography className="flex font-medium text-[14px] ml-3 text-architect-font_gris">
                  Plan 3d de décoration extérieur
                </Typography>
              }
              onChange={() =>
                toggleServiceSelection("Plan 3d de décoration extérieur")
              }
              checked={selectedServices.includes(
                "Plan 3d de décoration extérieur",
              )}
            />

            <img
              className=" cursor-pointer flex justify-end mr-2"
              src={Peinture.src}
            />
          </div>
          <div className="border  border-gray-300 p-2 rounded-md flex flex-row justify-between gap-7 w-full lg:w-[50%]">
            <Checkbox
              color="red"
              className="    "
              label={
                <Typography className="flex font-medium text-[14px] ml-3 text-architect-font_gris">
                  Plan 3d de décoration{" "}
                </Typography>
              }
              onChange={() => toggleServiceSelection("Plan 3d de décoration")}
              checked={selectedServices.includes("Plan 3d de décoration")}
            />

            <img
              className=" cursor-pointer flex justify-end mr-2"
              src={DecoExter.src}
            />
          </div>
        </div>
        <div className="border  border-gray-300 p-3 py-6 rounded-md w-full lg:w-[49%] ">
          <Checkbox
            color="red"
            className=""
            label={
              <Typography className="flex font-medium text-[14px] ml-3 text-architect-font_gris ">
                Autre
              </Typography>
            }
            onChange={() => toggleServiceSelection("Autre")}
            checked={selectedServices.includes("Autre")}
          />
        </div>
      </div>
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
            // onClick={formik.handleSubmit}

            //disabled={isLoading}
          >
            Enregistrer
          </Button>
        </div>
      </div>
    </form>
  );
};

export default architectServicesPage;
