"use client";
import { CustomInput } from "@/components";
import {
  useFetchData,
  useUpdatePasswordClientMutation,
} from "@/services/queries";
import { Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import * as Yup from "yup";

const ClientMotDePassePage = (props) => {
  const { children } = props;
  const cookiesdata = Cookies.get("id");
  const { data: client, isLoading } = useFetchData(
    `/archimatch_app/client/find_client_by_user/${cookiesdata}/`,
    "client",
  );
  const formik = useFormik({
    initialValues: {
      ConfirmPassword: "",
      NewPassword: "",
      password: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .required("Le mot de passe est requis")
        .test(
          "containsLowerCase",
          "Doit contenir au moins une lettre minuscule",
          (value) => /[a-z]/.test(value),
        )
        .test(
          "containsUpperCase",
          "Doit contenir au moins une lettre majuscule",
          (value) => /[A-Z]/.test(value),
        )
        .test("containsDigit", "Doit contenir au moins un chiffre", (value) =>
          /\d/.test(value),
        )
        .test(
          "containsSpecialSymbol",
          "Doit contenir au moins un caractère spécial",
          (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
        )
        .min(8, "Le mot de passe doit comporter au moins 8 caractères"),

      NewPassword: Yup.string()
        .required("Le mot de passe est requis")
        .test(
          "containsLowerCase",
          "Doit contenir au moins une lettre minuscule",
          (value) => /[a-z]/.test(value),
        )
        .test(
          "containsUpperCase",
          "Doit contenir au moins une lettre majuscule",
          (value) => /[A-Z]/.test(value),
        )
        .test("containsDigit", "Doit contenir au moins un chiffre", (value) =>
          /\d/.test(value),
        )
        .test(
          "containsSpecialSymbol",
          "Doit contenir au moins un caractère spécial",
          (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
        )
        .min(8, "Le mot de passe doit comporter au moins 8 caractères"),
      ConfirmPassword: Yup.string()
        .required("Le mot de passe est requis")
        .test(
          "containsLowerCase",
          "Doit contenir au moins une lettre minuscule",
          (value) => /[a-z]/.test(value),
        )
        .test(
          "containsUpperCase",
          "Doit contenir au moins une lettre majuscule",
          (value) => /[A-Z]/.test(value),
        )
        .test("containsDigit", "Doit contenir au moins un chiffre", (value) =>
          /\d/.test(value),
        )
        .test(
          "containsSpecialSymbol",
          "Doit contenir au moins un caractère spécial",
          (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
        )
        .min(8, "Le mot de passe doit comporter au moins 8 caractères"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      handleUpdate({
        actual_password: values.password,
        confirm_password: values.ConfirmPassword,
        new_password: values.NewPassword,
        id: client.data.client.id,
      });
    },
  });

  const PasswordMutation = useUpdatePasswordClientMutation("client", {});

  const handleRemoveChanges = () => {
    formik.setValues({
      NewPassword: "",
      password: "",
      ConfirmPassword: "",
    });
    formik.setErrors({});
  };

  const handleUpdate = (values) => {
    PasswordMutation.mutate(values);
  };

  return (
    <form className="h-full  flex flex-col" onSubmit={formik.handleSubmit}>
      <Typography className="self-start font-semibold text-[20px] text-architect-text_hover ">
        Mot de passe
      </Typography>
      <Typography className="self-start text-architect-secondary_text_color text-[15px]">
        Changer votre mot de passe
      </Typography>
      <div className="flex flex-col gap-4 md:flex-col mb-4 mt-6 space-y-2">
        <CustomInput
          isPassword
          placeholder="Mot de passe actuel"
          containerClassName="w-full "
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password ? true : false
          }
          success={
            formik.touched.password && !formik.errors.password ? true : false
          }
          errorMessage={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : undefined
          }
          label="Mot de passe actuel"
          name="password"
        />
        <CustomInput
          isPassword
          placeholder="Nouveau Mot de passe"
          containerClassName="w-full"
          value={formik.values.NewPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.NewPassword && formik.errors.NewPassword
              ? true
              : false
          }
          success={
            formik.touched.NewPassword && !formik.errors.NewPassword
              ? true
              : false
          }
          errorMessage={
            formik.touched.NewPassword && formik.errors.NewPassword
              ? formik.errors.NewPassword
              : undefined
          }
          label="Nouveau Mot de passe"
          name="NewPassword"
        />

        <CustomInput
          isPassword
          placeholder="Confirmer Mot de passe"
          containerClassName="w-full"
          value={formik.values.ConfirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
              ? true
              : false
          }
          success={
            formik.touched.ConfirmPassword && !formik.errors.ConfirmPassword
              ? true
              : false
          }
          errorMessage={
            formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
              ? formik.errors.ConfirmPassword
              : undefined
          }
          label="Confirmer Mot de passe"
          name="ConfirmPassword"
        />
      </div>
      <div className="flex flex-row justify-end self-end gap-3  h-full ">
        <Button
          color="gray"
          variant="outlined"
          className=" mt-16 font-semibold   self-end md:text-[14px] text-[12px] h-[48px]"
          // type="submit"
          size="md"
          onClick={handleRemoveChanges}
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

export default ClientMotDePassePage;
