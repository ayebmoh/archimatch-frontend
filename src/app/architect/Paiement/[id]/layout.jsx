"use client";
import Cartee from "@/assets/Cartee.png";
import { Image, MainCard, PageLayout } from "@/components";
import { useFetchData } from "@/services/queries";
import { Spinner, Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
const architectPaiementPage = (props) => {
  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const { data: sub, isLoading } = useFetchData(
    `/archimatch_app/subscriptions/${id}/`,
    "sub",
  );
  const { children } = props;
  if (isLoading) {
    return <Spinner />;
  } else
    return (
      <PageLayout className="flex justify-center   ">
        <div className="max-w-screen-xl flex flex-col md:flex-row  m-auto w-[90%] justify-between lg:gap-52 mt-10 gap-12 ">
          <MainCard className=" basis-0 flex-grow shadow-2xl flex flex-col justify-between h-[668px] px-4 ">
            <div className="flex flex-col ">
              <Image
                src={Cartee}
                alt="Carte"
                className="  w-60 h-60  self-center  mt-4"
              />

              <Typography className="font-bold text-[25px] flex justify-start mt-7">
                Résumé
              </Typography>
              <div className="flex flex-col mt-4 space-y-4  ">
                <div className="flex justify-between flex-row ">
                  <Typography className="text-architect-secondary_text_color font-bold text-[15px] ">
                    Abonnement
                  </Typography>
                  <Typography className="text-architect-primary  font-extrabold text-[15px] ">
                    {sub.data.sub_name}
                  </Typography>
                </div>
                <div className="flex justify-between flex-row ">
                  <Typography className="text-architect-secondary_text_color font-bold text-[15px] ">
                    Prix d'abonnement
                  </Typography>
                  <Typography className="text-architect-secondary_text_color  font-bold text-[15px] ">
                    {sub.data.price} Dt
                  </Typography>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border-neutral-600 border-b border-1 border-dashed  w-full ">
                <div className="flex flex-row justify-end gap-1">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris text-[27px] font-extrabold flex justify-center  "
                  >
                    {sub.data.price}
                  </Typography>
                  <div className=" flex-row flex items-center">
                    <Typography
                      variant="paragraph"
                      className="text-architect-font_gris font-extrabold text-[15px] mt-3   "
                    >
                      DT
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-architect-secondary_text_color text-[16px]   mt-3 "
                    >
                      /mois
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-row  ">
                <Typography className=" font-semibold text-[17px] ">
                  Montant total
                </Typography>
                <Typography className="  font-semibold text-[17px] ">
                  {sub.data.price} DT
                </Typography>
              </div>
            </div>
          </MainCard>
          <div className=" flex flex-col basis-0 flex-grow ">{children}</div>
        </div>
      </PageLayout>
    );
};
export default architectPaiementPage;
