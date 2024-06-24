"use client";
import JetonRose from "@/assets/JetonRose.svg";
import Portefeuille from "@/assets/Portefeuille.svg";
import { MainCard } from "@/components";
import { useFetchData, useFindSub } from "@/services/queries";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const architectPortefeuilleJetonPage = () => {
  const cookiesdata = Cookies.get("id");
  const { data: subscription, isLoading, isError } = useFindSub(cookiesdata);
  const { data: architect, isloading } = useFetchData(
    `/archimatch_app/architect/find_architect_by_user/${cookiesdata}`,
  );
  const [expirationDate, setExpirationDate] = useState();
  const router = useRouter();
  useEffect(() => {
    if (subscription) {
      console.log(subscription);
    }
  }, [subscription]);

  const handleDate = (createdAt) => {
    // Given date in ISO 8601 format
    // Parse the date string to a Date object
    const createdDate = new Date(createdAt);

    // Add 30 days to the date
    const expirationDate = new Date(createdDate);
    expirationDate.setDate(createdDate.getDate() + 30);

    // Convert the expiration date back to ISO string if needed
    const expirationDateString = expirationDate.toLocaleDateString();
    console.log(expirationDateString);
    return expirationDateString;
  };

  useEffect(() => {
    if (subscription) {
      setExpirationDate(handleDate(subscription.data.Archisub.created_at));
    }
  }, [subscription]);

  useEffect(() => {
    console.log(expirationDate);
  }, [expirationDate]);
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="flex flex-col  ">
        <div className=" lg:w-[55%]  w-full mb-[-130px] z-50 flex items-center justify-center ">
          <img
            className="w-[250px] cursor-pointer  py-0.5  "
            src={JetonRose.src}
          />
        </div>
        <MainCard className="flex flex-col items-center lg:flex-row pt-20 lg:pt-16 ">
          <div className=" basis-0 flex-grow ">
            <Typography className="text-center font-semibold text-[20px] text-architect-dark_blue ">
              Nombre tokens
            </Typography>
            <div className=" flex-row flex items-center gap-1 justify-center">
              <Typography
                variant="paragraph"
                className="text-architect-dark_blue font-extrabold text-[30px]  text-center  "
              >
                {architect?.data?.architect?.tokens}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-architect-dark_blue mt-2  text-[28px] text-center   "
              >
                jetons
              </Typography>
            </div>
            <Typography className="text-center  text-[15px] text-architect-secondary_text_color  mt-2">
              date d'expiration {expirationDate}
            </Typography>
            <div className="border-t w-[400px]  border-dashed border-gray-500 my-8"></div>
            <div className="flex flex-col justify-center">
              <Typography className="text-center self-center text-[15px] text-architect-secondary_text_color w-[330px] mt-4">
                Investissez vos jetons pour soumissionner sur des projets
              </Typography>

              <Button
                type="submit"
                size="md"
                className=" w-[325px] h-[48px] self-center flex items-center justify-center gap-2 text-[15px] mt-5 "
                onClick={() =>
                  router.push("/architect/Parametre/GestionAbonnement")
                }
              >
                Charger de nouveau
              </Button>
            </div>
          </div>

          <div className="flex flex-col  basis-0 flex-grow items-center">
            <img
              className="w-[310px] cursor-pointer py-0.5 "
              src={Portefeuille.src}
            />
          </div>
        </MainCard>
      </div>
    );
  }
};
export default architectPortefeuilleJetonPage;
