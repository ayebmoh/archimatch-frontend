import { CardSkeleton } from "@/components/cards";
import { useViewRealizationPerCategory } from "@/services/queries";
import { Carousel, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function RealizationCard({ content }) {
  const router = useRouter();
  console.log("content", content);
  const { data: realisations, isLoading } =
    useViewRealizationPerCategory(content);
  console.log("realization", realisations);
  const backend = "http://localhost:8000";
  useEffect(() => {
    if (!isLoading) console.log("realizations", realisations);
  }, [realisations]);
  return (
    <div className="2xl:grid 2xl:grid-cols-3 lg:grid lg:grid-cols-2 items-center flex flex-col gap-3 w-full mt-20  px-10">
      {isLoading ? (
        <div className="flex w-screen flex-col gap-3 md:grid md:grid-cols-3">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        realisations?.data?.realizations?.map((realization, index) => (
          <div
            key={index}
            className=" flex flex-col  items-start md:w-[500px] w-full"
          >
            <Carousel transition={{ duration: 1 }} className="rounded-xl  ">
              {realization?.images?.map((item, index) => (
                <img
                  src={`${backend}${item.image}`}
                  alt="image 1"
                  onClick={() =>
                    router.push(
                      `/clientVisitor/RealisationArchitecte/${realization.id}`,
                    )
                  }
                  className="relative cursor-pointer h-[350px] w-full  rounded-xl object-cover object-center"
                />
              ))}
            </Carousel>
            <Typography
              variant="paragraph"
              className=" text-client-primary flex text-[18px] font-bold mt-2  "
            >
              {realization.style}
            </Typography>
            <div className="flex flex-row  justify-between  items-center mt-1">
              <div className="flex items-center ">
                <Typography
                  variant="h6"
                  className="text-architect-dark_blue items-center text-[15px]  font-bold  gap-1 cursor-pointer"
                  onClick={() =>
                    router.push(
                      `clientVisitor/RealisationArchitecte/${realization.id}`,
                    )
                  }
                >
                  {realization.project_title}{" "}
                </Typography>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RealizationCard;
