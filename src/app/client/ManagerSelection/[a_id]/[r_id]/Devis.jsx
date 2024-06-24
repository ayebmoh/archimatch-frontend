"use client";
import Confirm from "@/assets/Confirm.svg";
import DevisAccepter from "@/assets/DevisAccepter.svg";
import DevisRefuser from "@/assets/DevisRefuser.svg";
import Reject from "@/assets/Reject.svg";
import { MainCard, Popup } from "@/components";
import { useFetchDevisDetails, useHandleDevis } from "@/services/queries";
import { Button, Chip, Spinner, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import MyPdfViewerComponent from "./Pdfviewer";

const architectManagerSelectionOnePage = ({ id, ar_id, selection_id }) => {
  // console.log("selection", selection_id);
  const [open, setOpen] = useState(false);
  const [isopen, setisopen] = useState(false);
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
  const devisMutation = useHandleDevis("deviss", {});

  const handleDevis = () => {
    devisMutation.mutate({
      devis_id: id,
      architect_id: ar_id,
      selection_id: selection_id,
      action: true,
    });
  };
  const RefuseDevis = () => {
    devisMutation.mutate({
      devis_id: id,
      architect_id: ar_id,
      selection_id: selection_id,
      action: false,
    });
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

            <div className="flex flex-row gap-4 mt-7"></div>
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
      {/* {isLoading ? <Spinner /> : renderMainCard(devis.data.devis.status)} */}

      <MainCard className="flex flex-col mt-5 relative p-4">
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
          <>
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
            <div className="flex flex-row gap-3 justify-end">
              <Button variant="outlined" onClick={() => setisopen(true)}>
                Refuser
              </Button>
              <Button onClick={() => setOpen(true)}>Accpeter</Button>
            </div>
          </>
        )}
      </MainCard>
      <Popup
        open={open}
        handleOpen={() => setOpen(!open)}
        size="sm"
        bodyClassName="w-full flex flex-col items-center  "
        className="  bg-[#E5EBFF] "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="  justify-center z-0 absolute  ">
          <img src={Confirm.src} alt="" className=" w-full" />
        </div>
        <div className=" w-full  bg-white  mt-20 p-4 ">
          {" "}
          {/* Added flexbox for layout */}
          <div className=" w-full relative mt-28 flex flex-col justify-center items-center  ">
            <Typography className="text-[19px] font-semibold  text-[#344054]">
              Confirmez votre engagement
            </Typography>
            <Typography className="mt-4 text-[#344054] text-[14px]">
              En acceptant ce devis, vous confirmez votre engagement envers cet
              architecte pour la réalisation de votre projet. Une fois accepté,
              le projet sera considéré comme clôturé.
            </Typography>
            <Typography className="text-[14px]  text-[#344054] mt-2">
              Êtes-vous sûr(e) de vouloir procéder ?
            </Typography>
          </div>
          <div className="flex flex-row gap-4 w-full justify-center px-4 mt-5">
            <Button
              onClick={() => setOpen(false)}
              className="bg-[#E7E7E7] text-architect-font_gris  border-none flex-grow"
              size="sm"
            >
              Ignorer
            </Button>
            <Button
              onClick={() => {
                handleDevis();
                setOpen(false);
              }}
              className="bg-[#11ABEC] text-white border-solid border border-[#11ABEC] flex-grow "
              size="sm"
            >
              Confirmer
            </Button>
          </div>
        </div>
      </Popup>

      <Popup
        open={isopen}
        handleOpen={() => setisopen(!isopen)}
        size="sm"
        bodyClassName="flex flex-col items-center   "
        className="  bg-[#E5EBFF] "
      >
        <div className="  justify-center z-0 absolute  ">
          <img src={Reject.src} className="" alt="" />
        </div>
        <div className=" w-full flex flex-col  bg-white mt-28 p-4 ">
          {" "}
          <div className="mt-20 px-6 flex flex-col align-center  ">
            <Typography className="text-[19px] font-semibold self-center text-[#344054]">
              Confirmez votre Refus
            </Typography>
            <Typography className="mt-4 text-[#344054] text-[15px] pb-2">
              chaque projet est unique et nous voulons vous offrir la meilleure
              expérience possible. Si ce devis ne répond pas entièrement à vos
              attentes, pas de souci !
            </Typography>
            {/* <Radio
              name="description"
              className="w-5 h-5"
              color="blue"
              label={
                <Typography className="text-[14px] text-[#344054]">
                  Demander une autre proposition de devis
                </Typography>
              }
            />
            <Radio
              name="description"
              className="w-5 h-5"
              color="blue"
              label={
                <Typography className="text-[14px] text-[#344054]">
                  Arrêter la négociation avec l' architecte
                </Typography>
              }
            /> */}
          </div>
          <div className="flex flex-row gap-4 w-full justify-center px-4 mt-7">
            <Button
              onClick={() => setisopen(false)}
              className="bg-[#E7E7E7] text-architect-font_gris  border-none flex-grow"
              size="sm"
            >
              Ignorer
            </Button>
            <Button
              onClick={() => {
                RefuseDevis();
                setisopen(false);
              }}
              className="bg-[#11ABEC] text-white border-solid border border-[#11ABEC] flex-grow "
              size="sm"
            >
              Confirmer
            </Button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default architectManagerSelectionOnePage;
