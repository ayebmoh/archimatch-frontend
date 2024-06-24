"use client";

import { IconButton, Navbar } from "@/components/RemoteComponents";
import { cn } from "@/utils";
import { Bars2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NotAuthDrawer } from ".";
import NavList from "./NavList";

const CustomNavbar = (props) => {
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
          pathname.includes("login") ||
            pathname.includes("create_account") ||
            pathname.includes("abonnement") ||
            pathname.includes("create_password") ||
            pathname.includes("ForgetPassword") ||
            pathname.includes("ParEmail") ||
            pathname.includes("ParPhone") ||
            pathname.includes("CreateAccountEmail") ||
            pathname.includes("CreateAccountPhone") ||
            pathname.includes("CreatePassword") ||
            pathname.includes("PasswordForget") ||
            pathname.includes("CreateNewPassword") ||
            pathname.includes("Paiement")
            ? "lg:hidden"
            : "p-2 mx-auto lg:pl-6 h-[88px]",
          pathname.includes("create_project")
            ? "xl:hidden"
            : "p-2 mx-auto lg:pl-6 h-[88px]",
        )}
      >
        <div className="relative flex items-center max-w-screen-xl overflow-x-hidden mx-auto text-blue-gray-900">
          <Image
            src={logo}
            className="w-40 mr-4 ml-2 cursor-pointer py-0.5"
            alt="hero image"
            onClick={handleClickLogo}
          />
          {/* <img className="w-40 mr-4 ml-2 cursor-pointer py-0.5" src={logo.src} /> */}

          <div className="absolute hidden top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList navListItems={navListItems} />
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

          <div className=" hidden lg:block items-center absolute right-1 mt-3.5">
            <label
              htmlFor="auto-update"
              className="mt-px mr-3 mb-0 cursor-pointer select-none font-semibold text-client-primary"
            >
              Espace Client
            </label>
            <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
              <input
                onChange={handleChangeSpace}
                id="auto-update"
                checked={space ? true : false}
                type="checkbox"
                className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full border-client-primary bg-client-primary transition-colors duration-300 checked:bg-architect-primary peer-checked:border-architect-primary peer-checked:before:bg-architect-primary"
              />
              <label
                htmlFor="auto-update"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-client-primary bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-architect-primary peer-checked:before:bg-architect-primary"
              >
                <div
                  className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                  data-ripple-dark="true"
                ></div>
              </label>
            </div>
            <label
              htmlFor="auto-update"
              className="mt-px ml-3 mb-0 cursor-pointer select-none font-semibold text-architect-primary"
            >
              Espace Architecte
            </label>
          </div>
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

export default CustomNavbar;
