import { FileUploader } from "@/components";
import { Typography } from "@/components/RemoteComponents";
const Step6 = (props) => {
  const { formik } = props;
  return (
    <div>
      {" "}
      <Typography
        variant="h1"
        className="text-architect-font_gris text-[20px]  lg:text-[26px] font-bold mt-8 "
      >
        Ajouter des photos pour le projet
      </Typography>
      <Typography
        variant="paragraph"
        className="text-architect-secondary_text_color  text-[10px] lg:text-[15px]  "
      >
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <FileUploader
        className="w-[780px] h-[237px]"
        formik={formik}
        formikValue="images"
      />
    </div>
  );
};

export default Step6;
