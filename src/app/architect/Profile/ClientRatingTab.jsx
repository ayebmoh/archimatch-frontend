import Person from "@/assets/Person.svg";
import Virgule from "@/assets/Virgule.svg";
import { CustomInput, MainCard, Popup } from "@/components";
import { useAddReportCommentMutation, useFetchData } from "@/services/queries";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  Checkbox,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import React, { useState } from "react";
function ClientRatingTab() {
  const [reason, setReason] = useState("Contenu inapproprié");
  const [activeComment, setActiveComment] = useState();
  const addReportMutation = useAddReportCommentMutation("", {});

  const cookiesdata = Cookies.get("id");
  const { data: architect, isLoading } = useFetchData(
    `/archimatch_app/architect/find_architect_by_user/${cookiesdata}/`,
    "architect",
  );
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const addReport = () => {
    if (reason !== "") {
      addReportMutation.mutate({
        architect_id: cookiesdata,
        comment_id: activeComment,
        description: reason,
      });
      togglePopup();
    }
  };
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "red",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 4) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div>
      <div className="flex flex-col  mt-9 space-y-5  ">
        {architect &&
          architect?.data?.architect?.comments?.length > 0 &&
          architect?.data?.architect?.comments.map((element, index) => (
            <MainCard className="   shadow-md   border-gray-300 p-[16px] border-2 relative ">
              <img
                className=" cursor-pointer absolute top-7 right-10 rotate-180 w-[150px] opacity-45 "
                src={Virgule.src}
              />
              <div className="flex flex-row gap-4">
                <Avatar
                  src={Person.src}
                  alt="avatar"
                  className="w-[65px] h-[65px]"
                />

                <div className="flex items-center gap-4 w-full">
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between  w-full">
                      <div className="flex flex-col ">
                        <Typography className="font-bold text-[17px] text-[#344155] ">
                          {`${element.Client.user.first_name} ${element.Client.user.last_name} `}
                        </Typography>
                        <Typography className=" text-architect-secondary_text_color text-[15px]   ">
                          {new Date(element?.created_at).toLocaleDateString()}
                        </Typography>
                      </div>
                      <div className="flex items-center   self-start  float-right">
                        <Typography
                          variant="h6"
                          className="flex items-center  text-[15px]  font-bold  gap-1 cursor-pointer self-end"
                          onClick={() => {
                            togglePopup();
                            setActiveComment(element.id);
                          }}
                        >
                          <InformationCircleIcon className="h-5 w-5" />
                          Signaler
                        </Typography>
                      </div>
                    </div>

                    <Typography className="text-architect-secondary_text_color text-[14px] mt-4 ">
                      {element.message}
                    </Typography>
                  </div>
                </div>
              </div>
            </MainCard>
          ))}
      </div>
      <div className="flex items-center gap-4  justify-center mt-6">
        <Typography
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </Typography>
        <div className="flex items-center gap-2">
          <IconButton className="rounded-full " {...getItemProps(1)}>
            1
          </IconButton>
          <IconButton className="rounded-full " {...getItemProps(2)}>
            2
          </IconButton>
          <IconButton className="rounded-full " {...getItemProps(3)}>
            3
          </IconButton>
          <IconButton className="rounded-full " {...getItemProps(4)}>
            4
          </IconButton>
        </div>
        <Typography
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 4}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Typography>
      </div>
      <Popup
        open={showPopup}
        handleOpen={setShowPopup}
        size="sm"
        className=""
        bodyClassName="flex flex-col items-center"
      >
        <div className="flex flex-col ">
          <div className="flex items-center self-start">
            <Typography
              variant="paragraph"
              className="text-architect-font_gris text-[18px] font-semibold flex items-center gap-1 cursor-pointer"
              onClick={() => setShowPopup(false)}
            >
              <ChevronLeftIcon className="h-5 w-5" />
              retour
            </Typography>
          </div>

          <Typography
            variant="paragraph"
            className="lg:text-[30px] text-[25px] font-bold text-[#344155] text-center justify-center flex self-start  mt-6 "
          >
            Signaler le profil
          </Typography>
          <Typography
            variant="paragraph"
            className="text-architect-secondary_text_color lg:text-[18px] text-[15px]  w-[500px] flex self-start mt-2 "
          >
            Nous avons besoin de votre aide ! Veuillez sélectionner le motif
            pour lequel vous signalez ce profil :
          </Typography>
          <div className="flex flex-row items-center gap-2 mt-6">
            <Checkbox
              className="h-5 w-5 rounded-full"
              color="red"
              checked={reason === "Contenu inapproprié"}
              onClick={() => setReason("Contenu inapproprié")}
            ></Checkbox>
            <Typography className="  self-start font-semibold text-[16px] text-[#344054] mt-1">
              Contenu inapproprié
            </Typography>
          </div>
          <div className="flex flex-row items-center gap-2 mt-1">
            <Checkbox
              className="h-5 w-5 rounded-full"
              color="red"
              checked={reason === "SPAM/Fausse annonce"}
              onClick={() => setReason("SPAM/Fausse annonce")}
            ></Checkbox>
            <Typography className="  self-start font-semibold text-[16px] text-[#344054] mt-1">
              SPAM/Fausse annonce
            </Typography>
          </div>
          <div className="flex flex-row items-center gap-2 mt-1">
            <Checkbox
              className="h-5 w-5 rounded-full"
              color="red"
              checked={reason === "Contenu illégal"}
              onClick={() => setReason("Contenu illégal")}
            ></Checkbox>
            <Typography className="  self-start font-semibold text-[16px] text-[#344054] mt-1">
              Contenu illégal
            </Typography>
          </div>
          <div className="flex flex-row items-center gap-2 mt-1">
            <Checkbox
              className="h-5 w-5 rounded-full"
              color="red"
              checked={reason === "Une arnaque ou une fraude"}
              onClick={() => setReason("Une arnaque ou une fraude")}
            ></Checkbox>
            <Typography className="  self-start font-semibold text-[16px] text-[#344054] mt-1">
              Une arnaque ou une fraude
            </Typography>
          </div>
          <div className="flex flex-row items-center gap-2 mt-1">
            <Checkbox
              className="h-5 w-5 rounded-full"
              color="red"
              checked={reason === "Violation des droits d'auteur"}
              onClick={() => setReason("Violation des droits d'auteur")}
            ></Checkbox>
            <Typography className="  self-start font-semibold text-[16px] text-[#344054] mt-1">
              Violation des droits d'auteur
            </Typography>
          </div>
          <div className="flex flex-row items-center gap-2 mt-1">
            <Checkbox
              className="h-5 w-5 rounded-full"
              color="red"
              checked={reason === "Autre"}
              onClick={() => setReason("Autre")}
            ></Checkbox>
            <Typography className="  self-start font-semibold text-[16px] text-[#344054] mt-1">
              Autre
            </Typography>
          </div>

          <CustomInput
            placeholder="Veuillez spécifier"
            containerClassName="w-full  mt-3"
          />
          <div className="flex flex-row justify-end self-end gap-3  h-full ">
            <Button
              color="gray"
              variant="outlined"
              className=" mt-16 font-bold   self-end md:text-[14px] text-[12px] h-[48px]"
              size="md"
              onClick={() => setShowPopup(false)}
            >
              Ignorer
            </Button>
            <Button
              type="submit"
              size="md"
              className=" mt-16 self-end font-bold  md:text-[14px] text-[12px] "
              onClick={addReport}
              //disabled={isLoading}
            >
              Enregistrer
            </Button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default ClientRatingTab;
