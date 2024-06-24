"use client";
import ClientHero from "@/assets/ClientLandingHero.svg";
import { PageLayout } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ClientVisitor = ({ children }) => {
  const router = useRouter();
  return (
    <PageLayout className="pb-12 lg:min-h-screen lg:pb-0">
      <div className="flex px-4 flex-col gap-[24px] mt-[24px] w-full m-auto lg:flex-row ">
        <div className="w-full flex flex-col gap-[24px] md:px-12 lg:w-[60%] lg:self-center">
          <Typography
            variant="h4"
            className="text-[24px] text-architect-dark_blue md:text-[40px]"
          >
            {" "}
            Trouver{" "}
            <span className="text-client-primary">votre architecte</span> en
            quelques clics gratuitement !
          </Typography>
          <Typography
            variant="paragraph"
            className="text-[#667085] text-[16px]"
          >
            {" "}
            Nos architectes vous accompagnent de A à Z pour la concrétisation de
            vos projets de construction et rénovation !{" "}
          </Typography>
          <Button size="md" className="w-[290px] self-center lg:self-start">
            {" "}
            Trouver mon architecte
          </Button>
          <Button onClick={()=>router.replace("/clientVisitor/loginClient")} size="md" className="w-[290px] self-center lg:self-start">
            {" "}
            Se connecter 
          </Button>
        </div>
        <Image
          alt="hero image"
          className=" w-full  h-full cursor-pointer lg:w-[40%]"
          src={ClientHero}
          priority={true}
        />
      </div>
    </PageLayout>
  );
};
export default ClientVisitor;
