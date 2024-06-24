import MaisonArch from "@/assets/MaisonArch.svg";
import { MainCard } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { useRouter } from "next/navigation";

function DetailsExecution(props) {
  const { realisation } = props;
  const router = useRouter();
  return (
    <div>
      <div className="flex lg:flex-row flex-col  justify-between mt-9 ">
        <div className="flex flex-col  lg:w-[60%] w-full">
          <Typography
            variant="paragraph"
            className="text-architect-font_gris text-justify  self-start text-[15px] lg:text-[17px]  "
          >
            {realisation?.data.realization.description}
          </Typography>
          {/* <Typography
            variant="paragraph"
            className="text-architect-font_gris text-justify  self-start text-[15px] lg:text-[17px] mt-3 "
          >
            Les espaces de vie commune, tels que le salon, la salle à manger et
            la cuisine, sont agencés de manière ouverte pour favoriser la
            convivialité et la communication entre les membres de la famille.
            Des baies vitrées généreuses permettent de profiter pleinement de la
            vue sur le lac et inondent les espaces intérieurs de lumière
            naturelle.
          </Typography> */}
          <Typography className="font-semibold text-[25px]  text-architect-dark_blue mt-4 ">
            Les services
          </Typography>
          <div className="flex flex-col  gap-4">
            {/* <div className="flex flex-row space-x-2 mt-4">
              <MainCard className="flex  w-[50%] flex-row p-4   items-center gap-3  ">
                <img
                  className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                  src={Chaise.src}
                />
                <Typography className=" text-[15px] self-center ">
                  Choisir le mobilier et les accessoires
                </Typography>
              </MainCard>
              <MainCard className="flex  w-[50%] flex-row p-4  items-center gap-3   ">
                <img
                  className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                  src={Peinture.src}
                />
                <Typography className=" text-[15px] self-center ">
                  Choisir les couleurs et les matériaux
                </Typography>
              </MainCard>
            </div> */}
            <MainCard className="flex   w-[50%] flex-row p-4   items-center gap-3   ">
              <img
                className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                src={MaisonArch.src}
              />
              <Typography className=" text-[15px] self-center ">
                {realisation?.data.realization.service}
              </Typography>
            </MainCard>
          </div>
        </div>
        <MainCard className="flex flex-col  lg:w-[30%] w-full self-start p-4">
          <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue ">
            Catégorie de projet
          </Typography>
          <Typography className=" text-[16px] self-start text-architect-secondary_text_color mt-1 ">
            {realisation?.data.realization?.categorie?.display}
          </Typography>
          <div className="border-dashed border-t-2   border-y-5  mt-4">
            <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
              Style
            </Typography>
            <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
              {realisation?.data.realization.style}
            </Typography>
          </div>
          <div className="border-dashed border-t-2   border-y-5  mt-4  ">
            <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
              Superficie
            </Typography>
            <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
              {realisation?.data.realization.surface}
            </Typography>
          </div>
          <div className="border-dashed border-t-2   border-y-5  mt-4  ">
            <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
              Localisation
            </Typography>
            <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
              {realisation?.data.realization.city}
            </Typography>
          </div>
          <Button
            type="submit"
            size="md"
            className=" w-full  mt-6 self-center flex items-center justify-center   "
            onClick={() => router.push(`/clientVisitor/create_project/`)}
          >
            démarrer votre projet
          </Button>
        </MainCard>
      </div>
    </div>
  );
}

export default DetailsExecution;
