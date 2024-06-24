import Recommanded from "@/assets/recommanded.svg";
import TokenImage from "@/assets/token.svg";
import { Avatar, Button, Typography } from "@/components/RemoteComponents";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MainCard } from "..";

const PropositionProjectCard = ({ data }) => {
  const router = useRouter();
  const handlepush = (id) => {
    router.push(`/architect/DetailProjet/${id}`);
  };
  console.log(data);
  return (
    <MainCard className="relative  w-full sm:w-[420px] self-center px-3">
      <Image
        alt="hero image"
        className="absolute top-0 left-5"
        src={Recommanded}
        priority={true}
      />
      <div className="flex flex-col">
        <div className="flex  items-center gap-1 self-end">
          <Image src={TokenImage} className="" alt="" />
          <Typography className="font-bold"> 5 Jetons</Typography>
        </div>
        <Typography className="text-architect-secondary_text_color text-[12px]">
          {" "}
          Publié le{" "}
          {new Date(data.created_at).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography>
        <div className="mt-1">
          <Typography className="text-architect-font_gris text-[16px] font-bold">
            {" "}
            {data.work_type}{" "}
          </Typography>
          <Typography className="text-client-primary text-[14px]">
            {" "}
            {data.architect_type.display}{" "}
          </Typography>
        </div>

        <div className="flex flex-row gap-4 items-center  mt-4 pb-4 border-b-[1px] border-dashed">
          <div className="flex items-center -space-x-4 blur-sm">
            <Avatar
              variant="circular"
              size="sm"
              alt="user 1"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <Avatar
              variant="circular"
              alt="user 2"
              size="sm"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
            />
            <Avatar
              variant="circular"
              alt="user 3"
              size="sm"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
            />
          </div>
          <Typography className="text-architect-success text-[12px]">
            {" "}
            {data.selection_count} Architectes intéressés par le projet
          </Typography>
        </div>

        <div className="flex flex-row  mt-4 mb-5">
          <div className="flex flex-col basis-0 flex-grow">
            <div className="flex flex-row items-center p-[8px] gap-1 ">
              <MapPinIcon className="h-6 w-6 text-architect-secondary_text_color " />
              <Typography className="text-architect-secondary_text_color text-[12px]">
                {" "}
                {data.town}
              </Typography>
            </div>
            <div className="flex flex-row items-center p-[8px] gap-1">
              <BuildingOfficeIcon className="h-6 w-6 text-architect-secondary_text_color " />
              <Typography className="text-architect-secondary_text_color text-[12px]">
                {" "}
                {data.house_type}
              </Typography>
            </div>
          </div>
          <div className="flex flex-col basis-0 flex-grow">
            <div className="flex flex-row items-center p-[8px] gap-1 ">
              <MapIcon className="h-6 w-6 text-architect-secondary_text_color " />
              <Typography className="text-architect-secondary_text_color text-[12px]">
                {" "}
                {data.surface_terrain}{" "}
              </Typography>
            </div>
            <div className="flex flex-row items-center p-[8px] gap-1">
              <BanknotesIcon className="h-6 w-6 text-architect-secondary_text_color " />
              <Typography className="text-architect-secondary_text_color text-[12px]">
                {" "}
                {data.budget}{" "}
              </Typography>
            </div>
          </div>
        </div>
        <Button onClick={() => handlepush(data.id)}>Detail de projet</Button>
      </div>
    </MainCard>
  );
};
export default PropositionProjectCard;
