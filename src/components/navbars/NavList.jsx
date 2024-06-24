"use client";
const { default: Link } = require("next/link");
import { MenuItem } from "@/components/RemoteComponents";
import { usePathname } from "next/navigation";

const NavList = (props) => {
  const pathname = usePathname();
  console.log(pathname);
  const { navListItems } = props;
  return (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
      {navListItems.map(({ label, url }, key) => (
        <Link href={url} key={key}>
          <MenuItem
            color="blue-gray"
            className={
              pathname == url
                ? "flex text-architect-primary items-center gap-2 lg:rounded-full"
                : "flex items-center gap-2 lg:rounded-full "
            }
          >
            {label}
          </MenuItem>
        </Link>
      ))}
    </ul>
  );
};

export default NavList;
