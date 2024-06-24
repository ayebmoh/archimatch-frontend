import { CustomInput, CustomSelect, ToggleButtonList } from "@/components";
import { Typography } from "@/components/RemoteComponents";
const Step3 = (props) => {
  const { formik } = props;
  const architect_type_initial_values = [
    { id: 1, content: "< 40m²" },
    { id: 2, content: "40m² - 90m²" },
    { id: 3, content: "90m² - 200m²" },
    { id: 4, content: "200m² - 500m²" },
    { id: 5, content: "> 500m²" },
  ];
  const villes = [
    { id: 1, content: "Tunis", value: "Tunis" },
    { id: 2, content: "Monastir", value: "Monastir" },
    { id: 3, content: "Sousse", value: "Sousse" },
    { id: 4, content: "Mahdia", value: "Mahdia" },
  ];
  return (
    <div className="  ">
      <Typography
        variant="h1"
        className="text-architect-font_gris text-[20px]  lg:text-[26px] font-bold mt-8 "
      >
        Plus de détails
      </Typography>
      <Typography
        variant="paragraph"
        className="text-architect-secondary_text_color  text-[10px] lg:text-[15px]  "
      >
        Pour commencer, veuillez sélectionner votre spécialité{" "}
      </Typography>
      <div className="w-96 mt-4">
        <CustomInput
          placeholder="Titre de projet"
          containerClassName="w-full"
          error={
            formik.touched.project_title && formik.errors.project_title
              ? true
              : false
          }
          success={
            formik.touched.project_title && !formik.errors.project_title
              ? true
              : false
          }
          errorMessage={
            formik.touched.project_title && formik.errors.project_title
              ? formik.errors.project_title
              : undefined
          }
          value={formik.values.project_title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Titre de projet"
          name="project_title"
        />
        <CustomSelect
          options={villes}
          label="Ville"
          containerClassName="mt-6 w-full "
          value={formik.values.town}
          onChange={(value) => formik.setFieldValue("town", value)}
          onBlur={formik.handleBlur}
          error={formik.touched.town && formik.errors.town ? true : false}
          success={formik.touched.town && !formik.errors.town ? true : false}
          errorMessage={
            formik.touched.town && formik.errors.town
              ? formik.errors.town
              : undefined
          }
          name="town"
        />
      </div>
      <div className="w-full lg:w-[70%] mt-6">
        <Typography className="text-architect-dark_blue font-semibold text-[14px] mb-3">
          Surface des travaux
        </Typography>

        <ToggleButtonList
          data={architect_type_initial_values}
          value={formik.values.surface_travaux}
          formikValue={"surface_travaux"}
          formik={formik}
        />
      </div>
    </div>
  );
};

export default Step3;
