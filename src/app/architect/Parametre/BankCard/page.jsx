"use client";
import CompteBancaire1 from "@/assets/CompteBancaire1.svg";
import { CustomInput } from "@/components";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@/components/RemoteComponents";
import {
  useFindArchi,
  useFindArchicard,
  useUpdateBankCard,
} from "@/services/queries";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Spinner, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import * as Yup from "yup";
const architectCompteBancairePage = (props) => {
  const cookiesdata = Cookies.get("id");

  const { data: architect, isLoading, isError } = useFindArchi(cookiesdata);
  const { data: card, isloading, iserror } = useFindArchicard(cookiesdata);
  const [initialCardData, setInitialCardData] = useState(null);

  useEffect(() => {
    if (card && !initialCardData) {
      setInitialCardData(card);
      formik.setValues({
        card_holder: card.data.card.card_holder,
        card_num: card.data.card.card_num,
        expiration_date: card.data.card.expiration_date,
        cvv: card.data.card.cvv,
      });
    }
  }, [card, initialCardData]);
  const formik = useFormik({
    initialValues: {
      card_holder: "",
      card_num: "",
      expiration_date: "",
      cvv: "",
    },

    validationSchema: Yup.object({
      card_holder: Yup.string()
        .required("Titulaire de la carte est requis")
        .max(20, "Titulaire de la carte ne doit pas depasser 20 caractères"),
      card_num: Yup.number().required("Le numero de la carte est obligatoire"),
      // expiration_date: Yup.number().required(
      //   "La date d'expiration est obligatoire",
      // ),
      cvv: Yup.string()
        .required("Cvv est requis")
        .matches(
          /^\d{3}$/,
          "Cvv doit avoir une longueur de 3 caractères numériques",
        ),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(cookiesdata);
      console.log(values);
      handlecard(values);
    },
  });

  // if (architect && architect.data && architect.data.architect) {
  //   console.log(architect.data.architect);
  // } else {
  //   console.log("Architect data not available");
  // }
  const BankCardMutation = useUpdateBankCard("", {
    card_num: formik.card_num,
    card_holder: formik.card_holder,
    cvv: formik.cvv,
    expiration_date: formik.expiration_date,
  });

  const handlecard = async (values) => {
    try {
      const response = await BankCardMutation.mutateAsync({
        id: cookiesdata,
        card_num: values.card_num,
        card_holder: values.card_holder,
        cvv: values.cvv,
        expiration_date: values.expiration_date,
      });

      console.log("Card Updated successfully", response);
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };
  if (isloading) {
    <Spinner />;
  } else {
    return (
      <form className="h-full  flex flex-col" onSubmit={formik.handleSubmit}>
        {isLoading || isloading ? (
          <Spinner />
        ) : card?.data?.card ? (
          <div className=" border-2  border-slate-400 border-solid w-ful max-w-[370px] rounded-lg p-[20px] mt-3">
            <div className="flex flex-row justify-between gap-7  ">
              <Typography className="self-start text-extrabold text-[17px]  text-architect-text_hover ">
                Mastercard
              </Typography>
              <div className="flex flex-row">
                <img
                  className="     flex justify-end mr-2"
                  src={CompteBancaire1.src}
                />{" "}
                <Menu placement="bottom-end" animate="mount">
                  <MenuHandler>
                    <EllipsisVerticalIcon className="cursor-pointer hover:bg-gray-400 hover:rounded-md h-7 w-7" />
                  </MenuHandler>
                  <MenuList>
                    <MenuItem className=" p-0  text-red-600 hover:bg-red-200 w-full text-center">
                      <Typography>Supprimer</Typography>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
            <Typography className="self-start text-semibold text-[20px]  text-architect-text_hover mt-4">
              **** **** **** {String(card?.data?.card.card_num).slice(-4)}
            </Typography>
            <div className="flex flex-row justify-between  mt-4 space-y-1 md:w-[90%]   ">
              <div className="flex justify-between flex-col ">
                <Typography className="text-architect-secondary_text_color font-bold text-[14px] ">
                  Titulaire de la carte
                </Typography>
                <Typography className=" font-semibold text-architect-font_gris text-[14px] ">
                  {card?.data?.card.card_holder}
                </Typography>
              </div>
              <div className="flex justify-between flex-col ">
                <Typography className="text-architect-secondary_text_color  font-bold text-[14px] ">
                  Date d'expiration
                </Typography>

                <div className="flex flex-row items-center ">
                  <Typography
                    variant="paragraph"
                    className="flex gap-2 items-center font-semibold text-architect-font_gris text-[14px]  "
                  >
                    {card?.data?.card.expiration_date}{" "}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <Typography className="self-start text-semibold text-[20px] text-architect-text_hover mt-9 ">
          Ajouter compte bancaire
        </Typography>
        <div className="flex flex-col space-y-2  mt-9 ">
          <div className="  p-3 rounded-md flex flex-col justify-between gap-7 lg:flex-row">
            <CustomInput
              placeholder="Nom de la carte"
              containerClassName="lg:w-[80%] w-full"
              value={formik.values.card_holder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.card_holder && formik.errors.card_holder
                  ? true
                  : false
              }
              success={
                formik.touched.card_holder && !formik.errors.card_holder
                  ? true
                  : false
              }
              errorMessage={
                formik.touched.card_holder && formik.errors.card_holder
                  ? formik.errors.card_holder
                  : undefined
              }
              label="Titulaire de la carte"
              name="card_holder"
            />
            <CustomInput
              placeholder="CVV"
              containerClassName=""
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.cvv && formik.errors.cvv ? true : false}
              success={formik.touched.cvv && !formik.errors.cvv ? true : false}
              errorMessage={
                formik.touched.cvv && formik.errors.cvv
                  ? formik.errors.cvv
                  : undefined
              }
              label="CVV"
              name="cvv"
            />
          </div>
          <div className="  p-3 rounded-md flex flex-col justify-between gap-7  lg:flex-row">
            <CustomInput
              placeholder="XXXX XXXX XXXX XXXX"
              containerClassName="lg:w-[80%] w-full "
              value={formik.values.card_num}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.card_num && formik.errors.card_num ? true : false
              }
              success={
                formik.touched.card_num && !formik.errors.card_num
                  ? true
                  : false
              }
              errorMessage={
                formik.touched.card_num && formik.errors.card_num
                  ? formik.errors.card_num
                  : undefined
              }
              label="Numéro de la carte"
              name="card_num"
            />

            <CustomInput
              placeholder="MM/YY"
              containerClassName=""
              value={formik.values.expiration_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.expiration_date && formik.errors.expiration_date
                  ? true
                  : false
              }
              success={
                formik.touched.expiration_date && !formik.errors.expiration_date
                  ? true
                  : false
              }
              errorMessage={
                formik.touched.expiration_date && formik.errors.expiration_date
                  ? formik.errors.expiration_date
                  : undefined
              }
              label="Date d'expiration"
              name="expiration_date"
            />
          </div>
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
            onClick={formik.onSubmit}
            //disabled={isLoading}
          >
            Enregistrer
          </Button>
        </div>
      </form>
    );
  }
};
export default architectCompteBancairePage;
