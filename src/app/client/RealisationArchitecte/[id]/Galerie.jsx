import { Typography } from "@/components/RemoteComponents";

function Galerie(props) {
  const { realisation } = props;
  const backend = "http://localhost:8000";
  return (
    <div>
      <Typography className="font-semibold text-[25px]  text-architect-dark_blue mt-7 ">
        Galerie
      </Typography>
      {realisation && (
        <div className="flex flex-row   mt-3 w-full gap-6  justify-center">
          <div className="   rounded-md flex-grow basis-0">
            {realisation?.data?.realization?.images && (
              <img
                className=" cursor-pointer  w-full h-full self-start rounded-lg "
                src={`${backend}${realisation?.data?.realization?.images[0].image}`}
              />
            )}
          </div>

          <div className="flex flex-col  gap-2 flex-grow basis-0">
            <div className="flex flex-row gap-2 flex-wrap">
              {realisation?.data.realization.images?.map((element, index) => {
                if (index !== 0) {
                  return (
                    <div className="rounded-md md:w-[45%] w-full min-w-[200px] ">
                      <img
                        className=" cursor-pointer w-full h-full  self-end rounded-md"
                        src={`${backend}${element.image}`}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
      {/* <div className="flex flex-row mt-3 w-full gap-6  justify-center">
        <div className="   rounded-md flex-grow basis-0">
          <img
            className=" cursor-pointer  w-[97.5%] h-full self-start rounded-lg "
            src={ValidationImage1.src}
          />
        </div>

        <div className="flex flex-col  gap-2 flex-grow basis-0">
          <div className="flex flex-row gap-2 flex-wrap">
            <div className="rounded-md md:w-[48%] w-full min-w-[300px] ">
              <img
                className=" cursor-pointer w-full h-full  self-end rounded-md"
                src={ValidationImage2.src}
              />
            </div>
            <div className="rounded-md md:w-[48%] w-full min-w-[300px] ">
              <img
                className=" cursor-pointer w-full h-full  self-end rounded-md"
                src={ValidationImage3.src}
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 flex-wrap">
            <div className="rounded-md md:w-[48%] w-full min-w-[300px] ">
              <img
                className=" cursor-pointer w-full h-full  self-end rounded-md"
                src={ValidationImage4.src}
              />
            </div>
            <div className="rounded-md md:w-[48%] w-full min-w-[300px] ">
              <img
                className=" cursor-pointer w-full h-full  self-end rounded-md"
                src={ValidationImage5.src}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Galerie;
