import { CustomTextArea } from "@/components";
import { Typography } from "@/components/RemoteComponents";
const Step5 = (props) => {
  const { formik } = props;
  return (
    <div>
      <Typography
        variant="h1"
        className="text-architect-font_gris text-[20px]  lg:text-[26px] font-bold mt-8 "
      >
        Description du projet
      </Typography>
      <Typography
        variant="paragraph"
        className="text-architect-secondary_text_color  text-[10px] lg:text-[15px]  "
      >
        Pour commencer, veuillez sélectionner votre spécialité{" "}
      </Typography>

      <CustomTextArea
        containerClassName=" w-full lg:w-full mt-5 "
        placeholder="Write something awesome..."
        value={formik.values.details}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.details && formik.errors.details ? true : false}
        success={
          formik.touched.details && !formik.errors.details ? true : false
        }
        errorMessage={
          formik.touched.details && formik.errors.details
            ? formik.errors.details
            : undefined
        }
        label="Description du projet "
        name="details"
        rows="7"
        cols="50"
      />
    </div>
  );
};

export default Step5;
