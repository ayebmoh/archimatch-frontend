import architectHero from "@/assets/ArchitectLandingHero.svg";
import { PageLayout } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import Image from "next/image";

const ClientVisitor = ({ children }) => {
  return (
    <PageLayout className="pb-12 lg:min-h-screen lg:pb-0">
      <div className="flex px-4 flex-col gap-[24px] mt-[24px] w-full m-auto lg:flex-row ">
        <div className="w-full flex flex-col gap-[24px] md:px-12 lg:w-[60%] lg:self-center">
          <Typography
            variant="h4"
            className="text-[24px] text-architect-dark_blue md:text-[40px]"
          >
            {" "}
            Trouver votre client en quelques clics gratuitement !
          </Typography>
          <Typography
            variant="paragraph"
            className="text-[#667085] text-[16px]"
          >
            {" "}
            Un moteur de recherche puissant pour des appelle {"d'offre"} de
            construction et de rénovation publier par des professionnels et
            particuliers dans des secteurs variés !{" "}
          </Typography>
          <Button size="md" className="w-[290px] self-center lg:self-start">
            {" "}
            Rejoindre ArchiMatch
          </Button>
        </div>
        <Image
          alt="hero image"
          className=" w-full  h-full cursor-pointer lg:w-[40%]"
          src={architectHero}
          priority={true}
        />
      </div>
    </PageLayout>
  );
};

export default ClientVisitor;
