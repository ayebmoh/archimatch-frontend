import Empty from "@/assets/EmptyProjects.svg";
import Premium from "@/assets/Premium.svg";
import { CustomSelect } from "@/components";
import { Typography } from "@/components/RemoteComponents";
import { PropositionProjectCard } from "@/components/cards";
import { useFetchannouncements, useFindArchiRights } from "@/services/queries";
import { BoltIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Button, Spinner } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const MyProjects = () => {
  const villes = [
    { id: 1, content: "Tunis", value: "Tunis" },
    { id: 2, content: "Monastir", value: "Monastir" },
    { id: 3, content: "Sousse", value: "Sousse" },
    { id: 4, content: "Mahdia", value: "Mahdia" },
  ];
  const router = useRouter();
  const cookiesdata = Cookies.get("id");
  const { data: announcements, isLoading } = useFetchannouncements(cookiesdata);
  const { data: rights, isloading, iserror } = useFindArchiRights(cookiesdata);
  const handleUpgrade = () => {
    router.push("/architect/Parametre/GestionAbonnement/");
  };
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="flex flex-col items-center relative mb-12">
        {rights && !rights.data.realization.prop_profil ? (
          <div className="absolute py-[50%] top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2  flex flex-col gap-2">
            <img
              src={Premium.src}
              alt="Premium icon"
              className="h-12 w-12 self-center"
            ></img>
            <Typography className="self-center text-center justify-center font-semibold text-[18px] text-architect-text_hover ">
              Upgrade vers Premium pour bénéficier de projets exclusifs proposés
              directement{" "}
            </Typography>
            <p className="mt-4 self-center text-center justify-center font-thin text-sm  text-[18px] text-architect-text_hover ">
              Ce service est exclusivement réservé aux architectes bénéficiant
              des abonnements Premium et Pro Premium. Il offre une sélection de
              projets proposés directement par les clients sur votre profil{" "}
            </p>
            <Button
              // type="submit"
              onClick={() => handleUpgrade()}
              size="md"
              className="mt-4 self-center flex items-center bg-[#344054] justify-center gap-2 cursor-pointer "
            >
              <BoltIcon className=" h-6 w-6" />
              Upgrade plan
            </Button>
          </div>
        ) : null}
        <div
          className={`relative ${
            rights && rights.data.realization.prop_profil
              ? ""
              : "bg-cover bg-center w-full h-full blur-md pointer-events-none"
          }`}
        >
          <div className="w-full flex-wrap flex-row flex m-auto gap-6  justify-center mt-5">
            <div className="flex gap-2 max-w-[1110px] w-full justify-between ">
              <CustomSelect
                options={villes}
                label="Type de travaux"
                containerClassName="w-[30%]"
                // value={formik.values.town}
                // onChange={(value) => formik.setFieldValue("town", value)}
                // onBlur={formik.handleBlur}
                // error={formik.touched.town && formik.errors.town ? true : false}
                // success={formik.touched.town && !formik.errors.town ? true : false}
                // errorMessage={
                //   formik.touched.town && formik.errors.town
                //     ? formik.errors.town
                //     : undefined
                // }
                name="town"
              />
              <CustomSelect
                options={villes}
                label="Type de bien"
                containerClassName="w-[30%]"
                // value={formik.values.town}
                // onChange={(value) => formik.setFieldValue("town", value)}
                // onBlur={formik.handleBlur}
                // error={formik.touched.town && formik.errors.town ? true : false}
                // success={formik.touched.town && !formik.errors.town ? true : false}
                // errorMessage={
                //   formik.touched.town && formik.errors.town
                //     ? formik.errors.town
                //     : undefined
                // }
                name="town"
              />
              <CustomSelect
                options={villes}
                label="Status"
                containerClassName="w-[30%]"
                // value={formik.values.town}
                // onChange={(value) => formik.setFieldValue("town", value)}
                // onBlur={formik.handleBlur}
                // error={formik.touched.town && formik.errors.town ? true : false}
                // success={formik.touched.town && !formik.errors.town ? true : false}
                // errorMessage={
                //   formik.touched.town && formik.errors.town
                //     ? formik.errors.town
                //     : undefined
                // }
                name="town"
              />
              <Button className="sm self-end  ">
                <MagnifyingGlassIcon className="w-4 h-4" />
              </Button>
            </div>
            {announcements &&
            announcements?.data &&
            announcements.data.Announcements ? (
              announcements.data.Announcements.map((announcement, index) => (
                <PropositionProjectCard key={index} data={announcement} />
              ))
            ) : (
              <div className=" flex flex-col gap-1 items-center justify-center">
                <img src={Empty.src} alt="Empty"></img>
                <Typography variant="h5" className="text-black">
                  Pas de Projets Disponibles pour l'instant
                </Typography>
                <Typography variant="h6">
                  Plus votre portfolio est complet, plus vous attirerez des
                  projets stimulants{" "}
                </Typography>
                <Typography variant="h6">
                  et des opportunités professionnelles passionnantes.{" "}
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default MyProjects;
