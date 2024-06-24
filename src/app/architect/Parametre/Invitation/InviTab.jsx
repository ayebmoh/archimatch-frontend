import Gift from "@/assets/Gift.svg";
import { CustomInput } from "@/components";
import { useAddInvitationMutation } from "@/services/queries";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import * as Yup from "yup";

function InviTab() {
  const AddInvitationMution = useAddInvitationMutation("", {});
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email invalide")
        .required("Email est obligatoire"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      handleSubmit();
      console.log(values);
    },
  });

  const handleSubmit = () => {
    AddInvitationMution.mutate({
      email: formik.values.email,
      architect_id: Cookies.get("id"),
    });
  };

  return (
    <div>
      <form className="h-full  flex flex-col" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center lg:flex-row">
          <div className=" basis-0 flex-grow">
            <Typography className="self-start font-semibold text-[20px] text-architect-text_hover mt-14">
              Partager l'invitation via un code
            </Typography>
            <div className=" border-2 border-gray-400 border-dotted w-ful max-w-[370px] rounded-lg p-[20px] mt-6">
              <Typography className="self-start font-bold text-[20px]  text-architect-text_hover ">
                Invitez vos amis
              </Typography>

              <Typography className="self-start text-semibold text-[12px]  text-architect-secondary_text_color mt-2">
                Envoyez votre code d'invitation unique à vos amis
              </Typography>
              <div className="relative flex w-full max-w-[24rem] mt-4">
                <Input
                  type="code"
                  placeholder="code"
                  className="placeholder:opacity-100"
                />
                <Button size="sm" className="!absolute right-1 top-1 rounded">
                  Copier
                </Button>
              </div>
              <Typography className="self-start  text-[10px]   mt-4">
                Transmettez ce code à l'architecte afin qu'il puisse le saisir
                lors de la création de son compte, ce qui nous permettra à tous
                les deux de bénéficier de jetons gratuits.
              </Typography>
            </div>
          </div>
          <div className="flex flex-col  basis-0 flex-grow items-center">
            <img className="w-40 cursor-pointer py-0.5 " src={Gift.src} />
            <div className="border-2 border-solid border-yellow-500 rounded-lg lg:w-[70%] w-[300px] py-4">
              <div className="flex flex-row justify-center w-full gap-1">
                <Typography className="self-center text-[16px] text-architect-text_hover  ">
                  Gagner
                </Typography>
                <Typography className="self-center text-[16px] text-[#FFCD00]  ">
                  5 Jetons
                </Typography>
              </div>
              <div className="flex flex-row justify-center w-full gap-1">
                <Typography className="self-center text-[16px] text-[#FFCD00]  ">
                  Gratuitement
                </Typography>
                <Typography className="self-center text-[16px] text-architect-text_hover  ">
                  sur chaque
                </Typography>
              </div>

              <Typography className="self-center text-[16px] text-architect-text_hover  text-center  ">
                invitation d'Architect
              </Typography>
            </div>
          </div>
        </div>
        <Typography className="self-start font-semibold text-[20px] text-architect-text_hover mt-9 ">
          Invitation par e-mail
        </Typography>

        <div className=" items-center p-3 rounded-md flex flex-col  gap-7 lg:flex-row mt-4 ">
          <CustomInput
            placeholder="E-mail"
            containerClassName=" w-full"
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
            label="E-mail"
            name="email"
          />

          <Button
            type="submit"
            size="md"
            className=" md:mt-7  md:text-[16px] text-[15px] h-[47px] lg:w-[170px] w-[170px]  flex items-center justify-center gap-2 "

            //disabled={isLoading}
          >
            <PlusIcon className="h-5 w-5" />
            Ajouter
          </Button>
        </div>
      </form>
    </div>
  );
}

export default InviTab;
