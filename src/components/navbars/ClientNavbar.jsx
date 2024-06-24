"use client";

import { Button, IconButton, Navbar } from "@/components/RemoteComponents";
import { cn } from "@/utils";
import {
  ArrowRightStartOnRectangleIcon,
  Bars2Icon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import { useCookies } from "next-client-cookies";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NotAuthDrawer } from ".";
import LanguageMenu from "./LanguageMenu";
import NavList from "./NavList";
import Notifications from "./Notifications";

const { default: Link } = require("next/link");

const ClientNavbar = (props) => {
  const cookies = useCookies();

  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { logo, navListItems, space } = props;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setOpen((cur) => !cur);

  const handleChangeSpace = () => {
    if (!space) {
      router.push("/archVisitor");
    } else {
      router.push("/clientVisitor");
    }
  };
  const handleClickLogo = () => {
    if (space) {
      router.push("/archVisitor");
    } else {
      router.push("/clientVisitor");
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      <Navbar
        className={cn(
          pathname.includes("abonnement") ||
            pathname.includes("Paiement") ||
            pathname.includes("create_project")
            ? "lg:hidden"
            : "p-2 mx-auto lg:pl-6 h-[88px]",
        )}
      >
        <div className=" flex justify-between items-center max-w-screen-2xl mx-auto text-blue-gray-900">
          <Image
            src={logo}
            className="w-40 mr-4 ml-2 cursor-pointer py-0.5"
            alt="hero image"
            onClick={handleClickLogo}
          />

          <div className="hidden lg:block">
            <NavList navListItems={navListItems} />
          </div>
          <div className="hidden lg:flex items-center gap-8 ">
            <div className="flex gap-3">
              <Notifications />
              <ChatBubbleOvalLeftIcon className="w-8 h-8 cursor-pointer" />

              <LanguageMenu />
            </div>

            <div className="hidden lg:flex items-center gap-3 ">
              <Button onClick={() => router.push("/client/create_project")}>
                Demarrer votre projet
              </Button>
              <ArrowRightStartOnRectangleIcon
                className="w-8 h-8 cursor-pointer"
                onClick={() => {
                  cookies.remove("authToken");
                  cookies.remove("user_type");
                  router.replace("/clientVisitor");
                }}
              />
            </div>
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="w-6 h-6" />
          </IconButton>
        </div>
      </Navbar>
      <NotAuthDrawer
        open={open}
        setOpen={setOpen}
        navListItems={navListItems}
        logo={logo}
      />
    </>
  );
};

export default ClientNavbar;
