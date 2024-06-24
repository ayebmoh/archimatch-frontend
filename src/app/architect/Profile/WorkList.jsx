import File from "@/assets/File.svg";
import { Popup } from "@/components";
import { Typography } from "@/components/RemoteComponents";
import { useDeleteRealisation } from "@/services/queries";
import {
  ChevronRightIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Carousel,
  IconButton,
  Spinner,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const WorkList = (props) => {
  const { data } = props;
  const router = useRouter();
  const backend = "http://localhost:8000";

  const [showPopup, setShowPopup] = useState(false);
  const [activeRealisation, setActiveRealisation] = useState();
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const CreateDeleteMutation = useDeleteRealisation("realisations");

  const handleDelete = (values) => {
    console.log(activeRealisation);
    CreateDeleteMutation.mutate({ id: activeRealisation });
  };
  return (
    <div>
      {data.length > 0 ? (
        <div className="flex lg:flex-row flex-col items-center flex-wrap gap-3 justify-center lg:space-y-0 space-y-5 lg:space-x-5 mt-8">
          {data?.map((element, index) =>
            index !== 0 ? (
              <div className="flex flex-col md:w-[400px] w-full">
                <Carousel transition={{ duration: 1 }} className="rounded-xl  ">
                  {element.images.map((item, index) => (
                    <img
                      src={`${backend}${item.image}`}
                      alt="image 1"
                      className="relative h-[350px] w-full  rounded-xl object-cover object-center"
                    />
                  ))}
                </Carousel>
                <Typography
                  variant="paragraph"
                  className="text-architect-dark_blue text-[18px] font-bold mt-2  "
                >
                  {element.project_title}
                </Typography>
                <div className="flex flex-row  justify-between  items-center mt-1">
                  <div className="flex items-center ">
                    <Link href={`/architect/realisation_details/${element.id}`}>
                      <Typography
                        variant="h6"
                        className="text-client-primary flex items-center text-[15px]  font-bold  gap-1 cursor-pointer"
                        onClick={() =>
                          router.push(
                            `/architect/realisation_details/${element.id}`,
                          )
                        }
                      >
                        Consulter projet
                        <ChevronRightIcon className="h-5 w-5" />
                      </Typography>
                    </Link>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <IconButton className="rounded-full bg-[#888f9b] h-8 w-8">
                      <PencilIcon
                        className="h-5 w-5"
                        onClick={() =>
                          router.push(
                            `/architect/update_realisation/${element.id}`,
                          )
                        }
                      />
                    </IconButton>
                    <IconButton
                      className="rounded-full bg-[#888f9b] h-8 w-8"
                      onClick={() => {
                        togglePopup();
                        setActiveRealisation(element.id);
                      }}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </IconButton>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-row flex-wrap items-center gap-3 justify-center  ">
                <div className="w-full md:w-[400px] flex-row flex items-center  justify-center ">
                  <div className=" border-2 border-gray-300 border-dashed w-[70%] h-[60%]  rounded-lg p-[20px] mt-6">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-30 cursor-pointer py-0.5 "
                        src={File.src}
                      />
                      <Typography className="self-center text-[15px] text-architect-dark_blue font-semibold  ">
                        Partager un projet
                      </Typography>
                      <Typography className="self-center text-[14px] text-architect-secondary_text_color  ">
                        3 réalisations minimum
                      </Typography>
                      <Button
                        type="submit"
                        size="sm"
                        className=" flex items-center justify-center mt-3  "
                        onClick={() => router.push("/architect/Realisation")}
                        //disabled={isLoading}
                      >
                        Ajouter un projet
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:w-[370px] w-full">
                  <Carousel
                    transition={{ duration: 1 }}
                    className="rounded-xl border-2 "
                  >
                    {element.images.map((item, index) => (
                      <img
                        src={`${backend}${item.image}`}
                        alt="image 1"
                        className="relative h-[350px]   rounded-xl object-cover object-center"
                      />
                    ))}
                  </Carousel>
                  <Typography
                    variant="paragraph"
                    className="text-architect-dark_blue text-[18px] font-bold mt-2  "
                  >
                    {element.project_title}
                  </Typography>
                  <div className="flex flex-row  justify-between  items-center mt-1">
                    <div className="flex items-center ">
                      <Link
                        href={`/architect/realisation_details/${element.id}`}
                      >
                        <Typography
                          variant="h6"
                          className="text-client-primary flex items-center text-[15px]  font-bold  gap-1 cursor-pointer"
                          // onClick={() =>
                          //   router.push(
                          //     `/architect/realisation_details/${element.id}`,
                          //   )
                          // }
                        >
                          Consulter projet
                          <ChevronRightIcon className="h-5 w-5" />
                        </Typography>
                      </Link>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <IconButton className="rounded-full bg-[#888f9b] h-8 w-8">
                        <PencilIcon
                          className="h-5 w-5"
                          onClick={() =>
                            router.push(
                              `/architect/update_realisation/${element.id}`,
                            )
                          }
                        />
                      </IconButton>
                      <IconButton
                        className="rounded-full bg-[#888f9b] h-8 w-8"
                        onClick={() => {
                          togglePopup();
                          setActiveRealisation(element.id);
                        }}
                      >
                        <TrashIcon className="h-5 w-5" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      ) : (
        <Spinner />
      )}

      <Popup
        open={showPopup}
        handleOpen={setShowPopup}
        size="sm"
        className=""
        bodyClassName="flex flex-col items-center"
      >
        <div className="flex flex-col space-y-4">
          <Typography
            variant="paragraph"
            className="lg:text-[30px] text-[25px] font-bold text-[#344155] text-center justify-center flex self-center  "
          >
            Confirmer vous la suppression ?
          </Typography>
          <Typography
            variant="paragraph"
            className="text-architect-secondary_text_color w-[380px] lg:text-[18px] text-[15px]  text-center justify-center flex self-center  "
          >
            Si vous confirmez, le projet sera définitivement supprimée
          </Typography>
          <div className="flex flex-row space-x-3 items-center">
            <Button
              type="submit"
              size="sm"
              className=" w-full text-[15px] self-center flex items-center justify-center   "
              onClick={() => {
                handleDelete();
                setShowPopup(false);
              }}
            >
              Confirmer
            </Button>
            <Button
              type="submit"
              size="sm"
              className=" w-full self-center text-[15px] flex items-center justify-center text-[#3f4a5d] bg-[#e7e7e7]    "
              onClick={() => {
                setShowPopup(false);
              }}
            >
              Ignorer
            </Button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default WorkList;
