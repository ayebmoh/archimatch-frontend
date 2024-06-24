import PrpositionProjectClientCard from "./PrpositionProjectClientCard";

const ClientCards = ({ announcements }) => {
  return (
    <div className="w-full flex flex-wrap flex-row m-auto  gap-6 justify-center mt-5  ">
      {announcements?.map((element, index) => (
        <div
          key={index}
          className=" flex lg:flex-col  flex-row w-full sm:w-[470px] items-end mt-2 relative "
        >
          <div className="bg-[#b7e9f2] text-right p-2  pr-4  w-26 text-[16px] font-bold sm:w-[100px]  text-[#11ABEC]  rounded-t-[18px]  z-0 absolute  ">
            # 2448
          </div>
          <PrpositionProjectClientCard className=" z-10 " data={element} />
        </div>
      ))}

      {/* <div className="flex flex-col w-full sm:w-[470px] items-end mt-2 relative ">
        <div className="bg-[#11ABEC] text-right p-2 text-[16px] font-bold pr-4 w-26 sm:w-[100px] text-white  rounded-t-[18px]   z-0 absolute  ">
          # 2448
        </div>
        <PrpositionProjectClientCard className=" z-10 " />
      </div> */}
    </div>
  );
};

export default ClientCards;
