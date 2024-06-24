import { CustomInput, MainCard } from "@/components";
import PhoneInput from "@/components/PhoneInput";
import { Typography } from "@/components/RemoteComponents";

function Step2(props) {
  const { formik } = props;
  return (
    <MainCard className="max-w-[1024px] w-[100%] basis-0 self-center mt-[38px] py-8 z-50 px-4">
      <form onSubmit={formik.handleSubmit}>
        <Typography
          variant="h1"
          className="text-architect-font_gris text-[20px] lg:text-[30px]"
        >
          Bienvenue sur Archimatch !
        </Typography>
        <Typography
          variant="paragraph"
          className="text-architect-secondary_text_color text-[15px] mt-4"
        >
          Entrez votre email et votre mot de passe pour vous connecter
        </Typography>
        <div className="flex flex-col gap-4 md:flex-row mb-4 mt-3">
          <CustomInput
            placeholder="Votre Nom"
            containerClassName="w-[90%]"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.first_name && formik.errors.first_name
                ? true
                : false
            }
            success={
              formik.touched.first_name && !formik.errors.first_name
                ? true
                : false
            }
            errorMessage={
              formik.touched.first_name && formik.errors.first_name
                ? formik.errors.first_name
                : undefined
            }
            label="Nom*"
            name="first_name"
          />
          <CustomInput
            placeholder="Votre Prenom"
            containerClassName="w-[90%]"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.last_name && formik.errors.last_name ? true : false
            }
            success={
              formik.touched.last_name && !formik.errors.last_name
                ? true
                : false
            }
            errorMessage={
              formik.touched.last_name && formik.errors.last_name
                ? formik.errors.last_name
                : undefined
            }
            label="Prénom*"
            name="last_name"
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row mb-4">
          <CustomInput
            placeholder="Votre Email"
            containerClassName="w-[90%]"
            error={formik.touched.email && formik.errors.email ? true : false}
            success={
              formik.touched.email && !formik.errors.email ? true : false
            }
            errorMessage={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : undefined
            }
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Email*"
            name="email"
          />
          <PhoneInput
            placeholder="Numero de téléphone"
            containerClassName="w-[90%]"
            label="Numéro de téléphone*"
            error={
              formik.touched.phone_number && formik.errors.phone_number
                ? true
                : false
            }
            success={
              formik.touched.phone_number && !formik.errors.phone_number
                ? true
                : false
            }
            errorMessage={
              formik.touched.phone_number && formik.errors.phone_number
                ? formik.errors.phone_number
                : undefined
            }
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            iname="phone_number"
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row mb-4">
          <CustomInput
            placeholder="Adresse de votre bureau"
            containerClassName="w-[90%]"
            value={formik.values.adresse}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.adresse && formik.errors.adresse ? true : false
            }
            success={
              formik.touched.adresse && !formik.errors.adresse ? true : false
            }
            errorMessage={
              formik.touched.adresse && formik.errors.adresse
                ? formik.errors.adresse
                : undefined
            }
            label="Adresse de votre bureau*"
            name="adresse"
          />
          <CustomInput
            placeholder="Matricule ficale de votre sociéte"
            containerClassName="w-[90%]"
            value={formik.values.registration_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.registration_number &&
              formik.errors.registration_number
                ? true
                : false
            }
            success={
              formik.touched.registration_number &&
              !formik.errors.registration_number
                ? true
                : false
            }
            errorMessage={
              formik.touched.registration_number &&
              formik.errors.registration_number
                ? formik.errors.registration_number
                : undefined
            }
            label="Matricule ficale de votre sociéte*"
            name="registration_number"
          />
        </div>
      </form>
    </MainCard>
  );
}

export default Step2;
