import architectLogo from "@/assets/ArchitectLogo.svg";
import { CustomNavbar } from "@/components";
import { ThemeProvider } from "@/components/RemoteComponents";
import { ArchitectTheme } from "@/themes";

import { CookiesProvider } from "next-client-cookies/server";

const navListItems = [
  {
    label: "Rejoindre ArchiMatch",
    url: "/archVisitor/create_account",
  },
  {
    label: "Connexion",
    url: "/archVisitor/login",
  },
];

const ArchitectVisitorRootLayout = ({ children }) => {
  return (
    <ThemeProvider value={ArchitectTheme}>
      <CookiesProvider>
        <CustomNavbar
          navListItems={navListItems}
          logo={architectLogo}
          space={true}
        />
        {children}
      </CookiesProvider>
    </ThemeProvider>
  );
};
export default ArchitectVisitorRootLayout;
