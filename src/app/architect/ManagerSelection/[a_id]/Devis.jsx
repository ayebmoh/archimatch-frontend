"use client";
import DevisAccepter from "@/assets/DevisAccepter.svg";
import DevisRefuser from "@/assets/DevisRefuser.svg";
import { MainCard } from "@/components";
import { useFetchDevisDetails } from "@/services/queries";
import { Button, Chip, Spinner, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import MyPdfViewerComponent from "./Pdfviewer";

const architectManagerSelectionOnePage = ({ id }) => {
  const { data: devis, isLoading } = useFetchDevisDetails(id);
  const backend = "http://localhost:8000";
  const handleChipColor = (status) => {
    switch (status) {
      case "Accepted":
        return "text-[#118D57] bg-[#22C55E]";
      case "Refused":
        return "text-[#B71D18]  bg-[#ff5732]";
      case "Pending":
        return "text-[#B76E00]  bg-[#FFAB00]";
    }
  };

  useEffect(() => {
    if (devis && devis.data && devis.data.devis && devis.data.devis.file) {
    }
  }, [devis]);

  const renderMainCard = (status) => {
    switch (status) {
      case "Refused":
        return (
          <MainCard className="flex flex-col justify-center items-center mt-6  p-0 pb-4">
            <div className="w-full h-32 rounded-t-md bg-gradient-to-r from-architect-primary  "></div>
            <img
              className="w-[180px] cursor-pointer py-0.5 mt-[-100px] "
              src={DevisRefuser.src}
            />
            <Typography className="text-architect-dark_blue font-bold text-[30px]  ">
              Votre devis a été refusé
            </Typography>
            <Typography className=" text-[17px] mt-2 ">
              le client a décidé de poursuivre avec vous mais souhaite explorer
              d'autres propositions.
            </Typography>
            <Typography className=" text-[17px] text-center lg:w-[750px] ">
              Ne vous découragez pas ! Continuez à offrir des services de
              qualité et à répondre aux besoins de vos clients.
            </Typography>

            <div className="flex flex-row gap-4 mt-7">
              <Button
                className=" bg-[#e7e7e7] text-architect-dark_blue font-bold flex items-center justify-center  w-[200px]"
                type="submit"
                size="md"

                //disabled={isLoading}
              >
                Clôturer le projet
              </Button>
              <Button
                className="   flex items-center justify-center   w-[200px] "
                type="submit"
                size="md"

                //disabled={isLoading}
              >
                Charger un devis
              </Button>
            </div>
          </MainCard>
        );
      case "Accepted":
        return (
          <MainCard className="flex flex-col justify-center items-center mt-6 p-0 pb-4 ">
            <div className="w-full h-32 rounded-t-md bg-gradient-to-r from-client-primary  "></div>
            <img
              className="w-[180px] cursor-pointer py-0.5 mt-[-100px]  "
              src={DevisAccepter.src}
            />
            <Typography className="text-architect-dark_blue font-bold text-[30px]  ">
              Votre devis a été accepté
            </Typography>
            <Typography className=" text-[17px] mt-2 ">
              Félicitations ! Votre proposition a été sélectionnée
            </Typography>
            <Typography className=" text-[17px] text-center lg:w-[750px] ">
              C'est maintenant le moment de passer à l'action et de donner vie à
              ce projet. Contactez rapidement le client pour discuter des
              prochaines étapes et commencer à travailler sur leur vision
            </Typography>

            <Button
              className=" bg-client-primary  flex items-center justify-center mt-6  w-[200px] "
              type="submit"
              size="md"

              //disabled={isLoading}
            >
              Clôturer le projet
            </Button>
          </MainCard>
        );
      case "Pending":
        return null;
      case "permenantlyRefused":
        return (
          <MainCard className="flex flex-col justify-center items-center mt-6  p-0 pb-4">
            <div className="w-full h-32 rounded-t-md bg-gradient-to-r from-architect-primary  "></div>
            <img
              className="w-[180px] cursor-pointer py-0.5 mt-[-100px] "
              src={DevisRefuser.src}
            />
            <Typography className="text-architect-dark_blue font-bold text-[30px]  ">
              Votre devis a été refusé
            </Typography>
            <Typography className=" text-[17px] text-center lg:w-[750px] mt-2 ">
              Désolé, le client a décidé d'explorer d'autres options avec un
              nouvel architecte pour trouver la solution parfaite pour son
              projet.
            </Typography>
            <Typography className=" text-[17px] text-center lg:w-[750px] ">
              Ne vous découragez pas ! Continuez à offrir des services de
              qualité et à répondre aux besoins de vos clients.
            </Typography>
            <Typography className=" text-[17px] text-center lg:w-[750px] ">
              Restez à l'écoute, car de nouvelles opportunités pourraient se
              présenter à vous
            </Typography>
          </MainCard>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isLoading ? <Spinner /> : renderMainCard(devis.data.devis.status)}

      <MainCard className="flex flex-col mt-5 relative">
        <Chip
          size="lg"
          value={devis?.data?.devis?.status}
          className={`self-end w-[100px] text-center font-extrabold ${handleChipColor(
            devis?.data?.devis?.status,
          )} bg-opacity-15 border-0 mb-4`}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <div className=" w-full flex justify-center ">
            {devis?.data?.devis?.file ? (
              <div className="max-w-[800px] w-full">
                {" "}
                {/* Added this div */}
                <MyPdfViewerComponent
                  pdfurl={`${backend}${devis.data.devis.file}`}
                />
              </div>
            ) : (
              <div>Loading PDF...</div>
            )}
          </div>
        )}
      </MainCard>
    </>
  );
};

export default architectManagerSelectionOnePage;
