"use client";
import architectLogo from "@/assets/architectLogo.svg";
import architecteLogoo from "@/assets/architecteLogoo.svg";
import { MainCard } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { useCreateSubRequest, useFetchData } from "@/services/queries";
import { CheckIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const architectVirementPage = ({}) => {
  const router = useRouter();
  const [checkboxState, setCheckboxState] = useState("virementBancaire");
  const currentDate = new Date();

  const toggleCheckbox = (checkboxName) => {
    setCheckboxState(checkboxName);
  };
  const cookiesdata = Cookies.get("id");

  const { data: arch, isLoading } = useFetchData(
    `/archimatch_app/user/${cookiesdata}/`,
    "arch",
  );
  useEffect(() => {
    if (cookiesdata) {
      console.log("id:", cookiesdata);
      console.log("data", arch);
    }
  }, [arch]);

  const CreateRequestMutation = useCreateSubRequest("", {});

  const handleCreateRequest = async () => {
    try {
      await CreateRequestMutation.mutateAsync({
        arch_id: cookiesdata,
        first_name: arch.data.first_name,
        last_name: arch.data.last_name,
        email: arch.data.email,
        sub_name: "Premium Pro",
        request_date: currentDate,
        active: false,
      });
      console.log("Admin created successfully.");
    } catch (error) {
      console.error("Error creating admin:", error);
    }
  };
  const handleSubmit = () => {
    handleCreateRequest();
    router.push("/architect/search_projects");
  };

  return (
    <div className="flex flex-col pb-4 w-full ">
      <img
        className="hidden lg:block w-40 mr-4 ml-2 cursor-pointer py-0.5 mb-[50px]"
        src={architectLogo.src}
      />

      <Typography variant="h4" className="lg:text-[30px] text-[20px] font-bold">
        {" "}
        Virement bancaire
      </Typography>
      <Typography
        variant="paragraph"
        className="text-architect-secondary_text_color text-[15px]"
      >
        Les Virement ( versement) bancaire doivent être adressés :
      </Typography>
      <MainCard className="  shadow-lg border-2 rounded-3xl mt-4 px-4">
        <div className="flex flex-row justify-between items-center">
          <Typography className=" font-bold text-[18px] ">
            Identité bancaire
          </Typography>
          <img
            className="  w-4  cursor-pointer py-0.5 "
            src={architecteLogoo.src}
          />
        </div>
        <div className="flex flex-col  space-y-4  ">
          <div className="flex  flex-row  w-full mt-6 justify-between  ">
            <Typography className=" font-bold text-[15px] ">
              A l’ordre de:
            </Typography>
            <Typography className="  text-[15px] ">STE Archimatch</Typography>
          </div>
          <div className="flex  flex-row  w-full mt-6 justify-between ">
            <Typography className=" font-bold text-[15px] ">Banque:</Typography>
            <Typography className="   text-[15px] ">Attijari</Typography>
          </div>
          <div className="flex  flex-row  w-full mt-6 justify-between  ">
            <Typography className=" font-bold text-[15px] ">
              Domiciliation:
            </Typography>
            <Typography className="text-[15px] ">Lac 2</Typography>
          </div>
          <div className="flex  flex-row  w-full mt-6 justify-between ">
            <Typography className=" font-bold text-[15px] ">RIB:</Typography>
            <Typography className="text-[15px] ">
              {" "}
              0452336954566565654
            </Typography>
          </div>
        </div>
      </MainCard>
      <div className="mt-11">
        <div>
          <div className=" flex flex-col  gap-y-2">
            <div className="flex items-center ">
              <div className="flex flex-row items-center gap-1">
                <CheckIcon className="h-5 w-5 mb-5 text-client-primary " />
                <Typography variant="paragraph" className=" text-[14px]  ">
                  L’ordre de virement doivent être communiqués par e-mail à
                  cette adresse :
                  <span
                    variant="paragraph"
                    className=" text-[14px] gap-1 font-bold text-client-primary"
                  >
                    Support@archimatch.com
                  </span>
                </Typography>
              </div>
            </div>

            <div className="flex flex-row items-center gap-1">
              <CheckIcon className="h-5 w-5 mb-5 text-client-primary " />
              <Typography variant="paragraph" className=" text-[14px]  ">
                Une fois le virement effectué, l'admin Archimatch activera votre
                abonnement
              </Typography>
            </div>
          </div>
          <Button
            type="submit"
            size="md"
            className="w-full mt-10 p-4 flex items-center "

            //disabled={isLoading}
          >
            <Typography className="font-semibold self-center flex justify-center text-[15px] w-[100%]">
              Confirmer{" "}
            </Typography>

            <LockClosedIcon className=" flex justify-end  h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default architectVirementPage;