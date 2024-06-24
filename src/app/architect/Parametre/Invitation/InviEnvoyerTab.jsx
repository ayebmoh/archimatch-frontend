import Gift from "@/assets/Gift.svg";
import JetonYellow from "@/assets/JetonYellow.svg";
import { MainCard } from "@/components";
import { useFetchData } from "@/services/queries";
import { Chip, Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import React from "react";
function InviEnvoyerTab() {
  const { data: invitations, isLoading } = useFetchData(
    `/archimatch_app/Invitation/get_invitation_architect/${Cookies.get("id")}/`,
    "invs",
  );
  const [code, setCode] = React.useState("");
  const onChange = ({ target }) => setCode(target.value);

  if (isLoading) return <Spinner />;
  else
    return (
      <div>
        <div className="flex flex-col items-center lg:flex-row  md:mt-[-20px]">
          <div className=" basis-0 flex-grow ">
            <Typography className="self-start font-semibold text-[20px] text-black ">
              Les invitations envoyées
            </Typography>
            <Typography className="self-start text-architect-secondary_text_color text-[15px] mt-2">
              Inviter plus des architectes pour ganger plus de jetons.
            </Typography>
          </div>
          <div className="flex flex-col  basis-0 flex-grow items-center md:mt-[-50px]">
            <div className=" lg:w-[70%] w-[300px] py-4">
              <div className="flex flex-row justify-center w-full gap-1">
                <Typography className="self-center text-[18px] text-[#FFCD00] ">
                  2 jetons
                </Typography>
                <Typography className="self-center text-[18px]   text-architect-text_hover  ">
                  gagnés
                </Typography>
              </div>
            </div>
            <img className="w-[30%] cursor-pointer py-0.5  " src={Gift.src} />
          </div>
        </div>
        <div className="flex flex-col space-y-4 mt-9  ">
          {invitations &&
            invitations.data.map((element, index) => (
              <MainCard className="flex md:flex-row flex-wrap flex-col gap-4 justify-between shadow-md border  border-gray-300 p-[27px] ">
                <Typography className="md:self-start text-extrabold text-[19px] self-center text-[#1B2534] md:w-[170px] ">
                  {element.invited_email}
                </Typography>
                {element.status === "Pending" && (
                  <Chip
                    size="lg"
                    value="Pending"
                    className="self-center w-[100px] text-center text-[#B76E00] font-extrabold bg-[#ffa800] bg-opacity-15 border-0"
                  />
                )}
                {element.status === "Rejected" && (
                  <Chip
                    size="lg"
                    value="Rejected"
                    className="self-center w-[100px] text-center text-[#637381] font-extrabold bg-[#8f9ba8] bg-opacity-15 border-0"
                  />
                )}
                {element.status === "Accepted" && (
                  <Chip
                    size="lg"
                    value="Accepted"
                    className="self-center w-[100px] text-center bg-opacity-15 text-architect-success font-extrabold bg-[#22C55E] border-0 "
                  />
                )}

                <div className="flex  flex-row self-center lg:w-[150px] items-center gap-4  ">
                  <img
                    className=" cursor-pointer    flex items-center "
                    src={JetonYellow.src}
                  />
                  <Typography className="md:self-start text-extrabold text-[19px] self-center text-[#FFCD00]   ">
                    1 Jetons
                  </Typography>
                </div>
              </MainCard>
            ))}

          {/* <MainCard className="flex md:flex-row flex-wrap flex-col gap-4 justify-between shadow-md border  border-gray-300 p-[27px]">
          <Typography className="md:self-start text-extrabold text-[19px] self-center text-[#1B2534] md:w-[170px]">
            alex.jones@gmail.com
          </Typography>

          <Chip
            size="lg"
            value="paid"
            color="green"
            className="self-center w-[100px] text-center bg-opacity-15 text-architect-success font-extrabold bg-[#22C55E] border-0 "
          />
          <div className="flex  flex-row self-center lg:w-[150px] items-center gap-4  ">
            <img
              className=" cursor-pointer    flex items-center "
              src={JetonGris.src}
            />
            <Typography className="md:self-start text-extrabold text-[19px] self-center text-[#667085]   ">
              1 Jetons
            </Typography>
          </div>
        </MainCard>
        <MainCard className="flex md:flex-row flex-wrap flex-col gap-4 justify-between shadow-md border  border-gray-300 p-[27px]">
          <Typography className="md:self-start text-extrabold text-[19px] self-center text-[#1B2534] md:w-[170px]">
            alex.jones@gmail.com
          </Typography>

          <Chip
            size="lg"
            value="pending"
            color="green"
            className="self-center w-[100px] text-center text-[#B76E00] font-extrabold bg-[#ffa800] bg-opacity-15 border-0"
          />
          <div className="flex  flex-row  gap-4 self-center lg:w-[150px] items-center">
            <img
              className=" cursor-pointer    flex items-center "
              src={JetonYellow.src}
            />
            <Typography className="md:self-start text-extrabold text-[19px] self-center text-[#FFCD00]   ">
              1 Jetons
            </Typography>
          </div>
        </MainCard> */}
        </div>
      </div>
    );
}

export default InviEnvoyerTab;
