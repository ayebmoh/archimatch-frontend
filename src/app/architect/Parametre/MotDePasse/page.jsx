"use client";
import { CustomInput } from "@/components";
import { useUpdatePasswordArchitectMutation } from "@/services/queries";
import { Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
const architectMotDePassePage = (props) => {
  const { children } = props;
  const cookiestdata = Cookies.get("id");
  const resetMutation = useUpdatePasswordArchitectMutation();
  const handleReset = async (formvalues) => {
    try {
      await resetMutation.mutateAsync({ ...formvalues, id: cookiestdata });
    } catch (error) {}
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const formik = useFormik({
    initialValues: {
      actual_password: "",
      new_password: "",
      confirm_password: "",
    },

    // validationSchema: Yup.object({
    //   actual_password:
    //   Yup.string()
    //     .required("Le mot de passe est requis")
    //     .test(
    //       "containsLowerCase",
    //       "Doit contenir au moins une lettre minuscule",
    //       (value) => /[a-z]/.test(value),
    //     )
    //     .test(
    //       "containsUpperCase",
    //       "Doit contenir au moins une lettre majuscule",
    //       (value) => /[A-Z]/.test(value),
    //     )
    //     .test("containsDigit", "Doit contenir au moins un chiffre", (value) =>
    //       /\d/.test(value),
    //     )
    //     .test(
    //       "containsSpecialSymbol",
    //       "Doit contenir au moins un caractère spécial",
    //       (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
    //     )
    //     .min(8, "Le mot de passe doit comporter au moins 8 caractères")
    //     ,

    //   new_password: Yup.string()
    //     .required("Le mot de passe est requis")
    //     .test(
    //       "containsLowerCase",
    //       "Doit contenir au moins une lettre minuscule",
    //       (value) => /[a-z]/.test(value),
    //     )
    //     .test(
    //       "containsUpperCase",
    //       "Doit contenir au moins une lettre majuscule",
    //       (value) => /[A-Z]/.test(value),
    //     )
    //     .test("containsDigit", "Doit contenir au moins un chiffre", (value) =>
    //       /\d/.test(value),
    //     )
    //     .test(
    //       "containsSpecialSymbol",
    //       "Doit contenir au moins un caractère spécial",
    //       (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
    //     )
    //     .min(8, "Le mot de passe doit comporter au moins 8 caractères"),
    //   confirm_password: Yup.string()
    //     .required("Le mot de passe est requis")
    //     .test(
    //       "containsLowerCase",
    //       "Doit contenir au moins une lettre minuscule",
    //       (value) => /[a-z]/.test(value),
    //     )
    //     .test(
    //       "containsUpperCase",
    //       "Doit contenir au moins une lettre majuscule",
    //       (value) => /[A-Z]/.test(value),
    //     )
    //     .test("containsDigit", "Doit contenir au moins un chiffre", (value) =>
    //       /\d/.test(value),
    //     )
    //     .test(
    //       "containsSpecialSymbol",
    //       "Doit contenir au moins un caractère spécial",
    //       (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
    //     )
    //     .min(8, "Le mot de passe doit comporter au moins 8 caractères"),
    // }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      handleReset(values);
    },
  });

  return (
    <form className="h-full  flex flex-col" onSubmit={formik.handleSubmit}>
      <Typography className="self-start text-semibold text-[18px] text-architect-text_hover ">
        Mot de passe
      </Typography>
      <Typography className="self-start text-architect-secondary_text_color text-[15px]">
        Changer votre mot de passe
      </Typography>
      <div className="flex flex-col gap-4 md:flex-col mb-4 mt-6 space-y-2">
        <CustomInput
          placeholder="Mot de passe actuel"
          containerClassName="w-full "
          value={formik.values.actual_password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.actual_password && formik.errors.actual_password
              ? true
              : false
          }
          success={
            formik.touched.actual_password && !formik.errors.actual_password
              ? true
              : false
          }
          errorMessage={
            formik.touched.actual_password && formik.errors.actual_password
              ? formik.errors.actual_password
              : undefined
          }
          label="Mot de passe actuel"
          name="actual_password"
        />
        <CustomInput
          placeholder="Nouveau Mot de passe"
          containerClassName="w-full"
          value={formik.values.new_password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.new_password && formik.errors.new_password
              ? true
              : false
          }
          success={
            formik.touched.new_password && !formik.errors.new_password
              ? true
              : false
          }
          errorMessage={
            formik.touched.new_password && formik.errors.new_password
              ? formik.errors.new_password
              : undefined
          }
          label="Nouveau Mot de passe"
          name="new_password"
        />

        <CustomInput
          placeholder="Confirmer votre mot de passe"
          containerClassName="ConfirmPassword"
          error={
            formik.touched.confirm_password && formik.errors.confirm_password
              ? true
              : false
          }
          success={
            formik.touched.confirm_password && !formik.errors.confirm_password
              ? true
              : false
          }
          errorMessage={
            formik.touched.confirm_password && formik.errors.confirm_password
              ? formik.errors.confirm_password
              : undefined
          }
          value={formik.confirm_password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Confirmer votre mot de passe"
          name="confirm_password"
        />
      </div>
      <div className="flex flex-row justify-end self-end gap-3  h-full ">
        <Button
          color="gray"
          variant="outlined"
          className=" mt-16 font-semibold   self-end md:text-[14px] text-[12px] h-[48px]"
          type="submit"
          size="md"
        >
          Annuler
        </Button>
        <Button
          type="submit"
          size="md"
          className=" mt-16 self-end font-semibold  md:text-[14px] text-[12px] "

          //disabled={isLoading}
        >
          Enregistrer
        </Button>
      </div>
    </form>
  );
};

export default architectMotDePassePage;
