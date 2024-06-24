import File from "@/assets/File.svg";
import { useFetchData } from "@/services/queries";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import WorkList from "./WorkList";

function WorkTab() {
  const router = useRouter();

  const [empty, setEmpty] = useState(false);
  const cookiesdata = Cookies.get("id");
  const { data: realisations, isLoading } = useFetchData(
    `/archimatch_app/Realization/${cookiesdata}/view_realizations/`,
    "",
  );
  console.log(isLoading);
  console.log(realisations?.data.realization);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {realisations?.data.realization.length > 0 ? (
            <WorkList data={realisations?.data.realization} />
          ) : (
            <div className=" border-2 border-gray-300 border-dashed w-ful max-w-[300px] rounded-lg p-[20px] mt-6">
              <div className="flex flex-col items-center justify-center">
                <img className="w-30 cursor-pointer py-0.5 " src={File.src} />
                <Typography className="self-center text-[15px] text-architect-dark_blue font-semibold  ">
                  Partager un projet
                </Typography>
                <Typography className="self-center text-[14px] text-architect-secondary_text_color  ">
                  3 réalisations minimum
                </Typography>
                <Button
                  type="submit"
                  size="sm"
                  className="     flex items-center justify-center mt-3  "
                  variant="outlined"
                  color="architect-font_gris"
                  //disabled={isLoading}
                  onClick={() => router.push("/architect/Realisation")}
                >
                  Ajouter un projet
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default WorkTab;
