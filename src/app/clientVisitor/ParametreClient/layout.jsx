"use client";
import { MainCard, PageLayout } from "@/components";
import { cn } from "@/utils";
import {
  ArrowRightEndOnRectangleIcon,
  BellIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const ClientParametrePage = (props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { children } = props;
  const [index, setIndex] = useState(0);
  return (
    <PageLayout className="p-10">
      <MainCard className=" max-w-screen-xl m-auto p-10 ">
        <div className="flex flex-col  ">
          <Typography className="font-semibold text-[25px]">
            Paramètres du compte
          </Typography>
          <Typography className="text-architect-secondary_text_color text-[15px]">
            Modifier les informations et les paramètres du compte
          </Typography>
        </div>
      </MainCard>

      <div className="flex flex-row max-w-screen-xl  w-full m-auto gap-3 mt-4 ">
        <MainCard className="!px-0 hidden xl:flex">
          <div className="flex flex-col w-64 ">
            <div className="p-4">
              <Typography className=" text-[14px] font-semibold ">
                Alex Jones
              </Typography>
              <div className="border-dashed border-t-2   border-y-5  mt-3  ">
                <div className="space-y-4 mt-3">
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/clientVisitor/ParametreClient");
                      setIndex(0);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 0 && "text-client-primary",
                      )}
                    >
                      <UserIcon className="h-6 w-6" />
                      Informations du base
                    </Typography>
                  </div>

                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push(
                        "/clientVisitor/ParametreClient/Notifications",
                      );
                      setIndex(1);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 1 && "text-client-primary",
                      )}
                    >
                      <BellIcon className="h-6 w-6" />
                      Notifications
                    </Typography>
                  </div>
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/clientVisitor/ParametreClient/MotDePasse");
                      setIndex(2);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 2 && "text-client-primary",
                      )}
                    >
                      <LockClosedIcon className="h-6 w-6" />
                      Mot de passe
                    </Typography>
                  </div>
                  <div className="border-dashed border-t-2   border-y-5  mt-3  ">
                    <div className="space-y-4 mt-3">
                      <div className="flex items-center ">
                        <Typography className="  flex items-center gap-2 ">
                          <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
                          Déconnexion
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainCard>

        <MainCard className="w-full p-4">{children}</MainCard>
      </div>
    </PageLayout>
  );
};

export default ClientParametrePage;
