import architectLogo from "@/assets/ArchitectLogo.svg";
import { ArchitectNavbar } from "@/components";
import { ThemeProvider } from "@/components/RemoteComponents";
import { preFetchData } from "@/services/queries";
import { ArchitectTheme } from "@/themes";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
const navListItems = [
  {
    label: "Trouver un projet",
    url: "/architect/search_projects",
  },
  {
    label: "Gérer mes projets",
    url: "/architect/list_selections",
  },
  {
    label: "Gérer mon profile",
    url: "/architect/Profile",
  },
];

const ArchitectRootLayout = ({ children }) => {
  const queryClient = new QueryClient();
  preFetchData(queryClient, "/archimatch_app/architect/1");

  return (
    <ThemeProvider value={ArchitectTheme}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArchitectNavbar
          navListItems={navListItems}
          logo={architectLogo}
          space={true}
        />
        {children}
      </HydrationBoundary>
    </ThemeProvider>
  );
};

export default ArchitectRootLayout;
