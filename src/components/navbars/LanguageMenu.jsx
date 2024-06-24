import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@/components/RemoteComponents";

import { FR, GB, TN } from "country-flag-icons/react/3x2";

const LanguageMenu = () => {
  return (
    <Menu>
      <MenuHandler>
        <Typography>
          <FR title="United States" className="w-8 h-8 cursor-pointer" />
        </Typography>
      </MenuHandler>
      <MenuList className="flex flex-col gap-2">
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <FR title="United States" className="w-8 h-8 cursor-pointer" />
          <Typography variant="small" color="gray" className="font-semibold">
            Francais
          </Typography>
        </MenuItem>

        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <TN title="United States" className="w-8 h-8 cursor-pointer" />
          <Typography variant="small" color="gray" className="font-semibold">
            Arabe
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <GB title="United States" className="w-8 h-8 cursor-pointer" />
          <Typography variant="small" color="gray" className="font-semibold">
            Anglais
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageMenu;
