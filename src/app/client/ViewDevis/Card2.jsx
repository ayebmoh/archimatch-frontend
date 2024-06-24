import MainCard from "@/components/MainCard";
import { Avatar, Button, Typography } from "@/components/RemoteComponents";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa6";
const Devisproposed = () => {
  const router = useRouter();
  const handleItemclick = (route) => {
    router.push(route);
  };
  return (
    <div className="w-full lg:w-[350px]  ">
      <div className="flex flex-col items-start w-full ">
        <div className="w-full ">
          <MainCard className="relative lg:w-[320px]  self-center p-6">
            <div className="flex flex-col ">
              <div className="flex flex-col items-center w-full pt-2 ">
                <Avatar
                  variant="circular"
                  size="lg"
                  alt="user 1"
                  className="border-2 border-white hover:z-10 focus:z-10"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />

                <Typography className=" text-extrabold text-[15px] font-semibold  self-center text-architect-font_gris mt-2 ">
                  Natalie Dormer
                </Typography>
                <Typography className=" text-extrabold text-[13px] self-center text-[#11ABEC] ">
                  Architecte de construction
                </Typography>
                <div className="flex flex-row self-center items-center pt-1 ">
                  <FaStar className=" text-[#FAAF00]" />
                  <FaStar className=" text-[#FAAF00]" />
                  <FaStar className=" text-[#FAAF00]" />
                  <FaStar className=" text-[#FAAF00]" />
                  <FaStar className=" text-[#FAAF00]" />
                </div>
                <div className="flex flex-row self-center items-start pt-1 text-[#344054] text-[12px] ">
                  <div className="flex flex-row gap-2 ">
                    <Typography className=" font-semibold">70</Typography>
                    <Typography>projets</Typography>
                  </div>

                  <Typography className="px-2 text-[#667085] ">|</Typography>
                  <div className="flex flex-row gap-2 ">
                    <Typography className=" font-semibold">50</Typography>
                    <Typography>clients satisfaits</Typography>
                  </div>
                </div>
                <Button
                  onClick={() => handleItemclick("/architect/Profile")}
                  size="sm"
                  className=" w-full mt-4 "
                >
                  Voir Profil
                </Button>
              </div>
            </div>
          </MainCard>
        </div>
      </div>
    </div>
  );
};

export default Devisproposed
