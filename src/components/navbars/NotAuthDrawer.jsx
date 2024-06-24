"use client";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@/components/RemoteComponents";
import { cn } from "@/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const NotAuthDrawer = (props) => {
  const router = useRouter();
  const { navListItems, open, setOpen, logo } = props;
  const pathname = usePathname();
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleChangePage = (url) => {
    router.push(url);
    closeDrawer();
  };

  const handleChangeSpace = () => {
    if (pathname.includes("clientVisitor")) {
      router.replace("/archVisitor");
    } else {
      router.replace("/clientVisitor");
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="h-svh overflow-hidden"
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <Image
            src={logo}
            className="w-40 mr-4 ml-2 cursor-pointer py-0.5"
            alt="hero image"
          />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List className="">
          {navListItems.map(({ label, url }, key) => (
            <ListItem
              key={key}
              onClick={() => handleChangePage(url)}
              color="blue-gray"
              className={
                pathname == url
                  ? "flex text-client-primary items-center gap-2 lg:rounded-full"
                  : "flex items-center gap-2 lg:rounded-full "
              }
            >
              {label}
            </ListItem>
          ))}
          <ListItem
            onClick={handleChangeSpace}
            color="blue-gray"
            className={cn("flex items-center gap-2 lg:rounded-full self-end ")}
          >
            {pathname.includes("clientVisitor")
              ? "Je suis un architect"
              : "Je suis un client"}
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NotAuthDrawer;
