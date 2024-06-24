import clientLogo from "@/assets/ClientLogo.svg";
import { ThemeProvider } from "@/components/RemoteComponents";
import ClientNavbar from "@/components/navbars/ClientNavbar";
import { ClientTheme } from "@/themes";

const navListItems = [
  {
    label: "Annonces",
    url: "/client/projects",
  },
  {
    label: "Profil",
    url: "/client/ParametreClient",
  },
  {
    label: "Réalisations",
    url: "/client/Explorationarchitecturale",
  },
];
const ClientRootLayout = ({ children }) => {
  return (
    <ThemeProvider value={ClientTheme}>
      <ClientNavbar navListItems={navListItems} logo={clientLogo} />
      {children}
    </ThemeProvider>
  );
};

export default ClientRootLayout;
