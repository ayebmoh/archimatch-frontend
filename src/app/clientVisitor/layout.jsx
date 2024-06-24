import clientLogo from "@/assets/ClientLogo.svg";
import { CustomNavbar } from "@/components";
import { ThemeProvider } from "@/components/RemoteComponents";
import { ClientTheme } from "@/themes";

const navListItems = [
  {
    label: "Trouver mon architect",
    url: "/clientVisitor/create_project",
  },
  {
    label: "Mes projets publiés",
    url: "/clientVisitor/projetspublies",
  },
];
const ClientVisitorRootLayout = ({ children }) => {
  return (
    <ThemeProvider value={ClientTheme}>
      <CustomNavbar navListItems={navListItems} logo={clientLogo} />
      {children}
    </ThemeProvider>
  );
};

export default ClientVisitorRootLayout;
