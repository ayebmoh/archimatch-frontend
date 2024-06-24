"use client";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
const ClientNotificationsPage = (props) => {
  const { children } = props;

  return (
    <div>
      <Typography className="self-start font-semibold text-[20px] text-architect-text_hover ">
        Notifications
      </Typography>
      <Typography className="self-start text-architect-secondary_text_color text-[15px]">
        Nous avons besoin de l'autorisation de votre navigateur pour afficher
        les notifications.
      </Typography>
      <div className="flex flex-row items-center gap-2 mt-8">
        <Checkbox color="blue"></Checkbox>
        <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
          Nouveau pour vous
        </Typography>
      </div>
      <div className="flex flex-row items-center gap-2 mt-2">
        <Checkbox color="blue"></Checkbox>
        <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
          L'activité du compte
        </Typography>
      </div>
      <div className="flex flex-row items-center gap-2 mt-2">
        <Checkbox color="blue"></Checkbox>
        <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
          Un nouveau navigateur utilisé pour se connecter
        </Typography>
      </div>
      <div className="flex flex-row items-center gap-2 mt-2">
        <Checkbox color="blue"></Checkbox>
        <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
          Sed ut perspiciatis unde omnis iste natus
        </Typography>
      </div>
      <div className="flex flex-row items-center gap-2 mt-2">
        <Checkbox color="blue"></Checkbox>
        <Typography className="  self-start font-normal text-[15px] text-architect-dark_blue mt-1">
          Sed ut perspiciatis unde omnis iste natus
        </Typography>
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
    </div>
  );
};

export default ClientNotificationsPage;
