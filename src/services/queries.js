import { openAlert } from "@/components/OpenAlert";
import { handleErrors } from "@/utils";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { fetchData, postData } from "./api";

export const useFetchData = (endpoint, key) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => fetchData(endpoint),
  });
};

export async function preFetchData(queryClient, endpoint, key) {
  return await queryClient.prefetchQuery({
    queryKey: [key],
    queryFn: () => fetchData(endpoint,param),
  });
}



export const useloginArchitect = (key, data,cookies,router,first_cnx) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/token/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        if (result.data.user.user_type !== "Architect") {
          openAlert(false, "Vous devez etre un architecte");
        } else {
          openAlert(true, "vous avez connecté avec succes");
          cookies.set('authToken', result.data.token)
          cookies.set("user_type",result.data.user.user_type)
          cookies.set("id",result.data.user.id)
          
          if (first_cnx){
            router.push("/architect/abonnement")
          }else {
            router.push("/architect/search_projects")
          }
          
        }
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useCreateAccountArchitect = (key, data,setOpen) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architectRequest/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
         
          openAlert(true, "votre demande a été bien enregistrée");
          setOpen(true)
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useresetArchitect = (key) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/reset-password/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        if (result.data.user.user_type !== "Architect") {
          openAlert(false, "Vous devez etre un architecte");
        }
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useupdateArchitect = (key) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/confirm_reset_password_architect/", data),
    
    onSettled: async (result, error) => {

      if (error) {
        console.error("Error updating password:", error);     
       } 
        else {
        

        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useCreateAnnoucement = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/announcement/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
          openAlert(true, "votre annonce a été bien enregistrée");
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useGetClient = (key, data,router,isPhone) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/client/get_client/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        if (isPhone){
          console.log(result.data)
          router.push(`/clientVisitor/CreateAccountPhone?phone_number=${result.data.user.phone_number}&id=${result.data.user.id}`)
        }else{
          router.push(`/clientVisitor/CreateAccountEmail?email=${result.data.user.email}`)
        }
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useloginClient = (key, data,cookies,router) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/token/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        if (result.data.user.user_type !== "Client") {
          openAlert(false, "Vous devez etre un client");
        } else {
          openAlert(true, "vous avez connecté avec succes");
          cookies.set('authToken', result.data.token)
          cookies.set("user_type",result.data.user.user_type)
          cookies.set("id",result.data.user.id)
          router.push("/client/ParametreClient")
          
          
        }
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useresetClient = (key) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/password-reset/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        if (result.data.user.user_type !== "Client") {
          openAlert(false, "Vous devez etre un client");
        }
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useupdateClient = (key) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/confirm_password_reset-client/", data),
    
    onSettled: async (result, error) => {

      if (error) {
        console.error("Error updating password:", error);     
       } 
        else {
        

        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};



export const useCreateSubRequest = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/subscriptionrequest/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre demande est bien enregistré");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useUpdateBankCard = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architect/update_bankcard/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre Modification est bien enregistrée");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useUpdateBaseInfo = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architect/update_base_info/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre Modification est bien enregistrée");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};
export const useUpdateService = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architect/update_services_info/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "vous avez modifier les services");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};
export const useUpdatePreference = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architect/update_Preferences_info/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "vous avez modifier les informations des preferences");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};
export const useSendotp = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architect/verify_email/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Email sent!");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useFindArchiRights = (id) => {
  return useQuery({
    queryKey: ["rights", id],
    queryFn: () => fetchData(`/archimatch_app/architect/get_rights/${id}`)
  });
};

export const useFindArchi = (id) => {
  return useQuery({
    queryKey: ["architect", id],
    queryFn: () => fetchData(`/archimatch_app/architect/find_architect_by_user/${id}`)
  });
};

export const useFindArchicard = (id) => {
  return useQuery({
    queryKey: ["card", id],
    queryFn: () => fetchData(`/archimatch_app/architect/find_archicard/${id}`)
  });
};

export const useFindReceipt = (id) => {
  return useQuery({
    queryKey: ["receipts", id],
    queryFn: () => fetchData(`/archimatch_app/architect/get_receipts/${id}`)
  });
};
export const useFindSub = (arch_id) => {
  return useQuery({
    queryKey: ["subscriptions", arch_id],
    queryFn: () => fetchData(`/archimatch_app/subscriptions/find_archisub_by_user/${arch_id}`)
  });
};
export const useShowSub = (arch_id) => {
  return useQuery({
    queryKey: ["subscription", arch_id],
    queryFn: () => fetchData(`/archimatch_app/subscriptions/find_subscription_by_user/${arch_id}`)
  });
};

export const useCreateRealisation = (key,router) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) =>  postData("/archimatch_app/Realization/create_realization/", data),
    
    onSettled: async (result, error) => {

      if (error) {
        handleErrors(error.response);   
       } 
        else {
          openAlert(true, "Votre réalisation a été crée");
          router.push("/architect/Profile")
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useDeleteRealisation = (key) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) =>  postData("/archimatch_app/Realization/delete_realization/", data),
    
    onSettled: async (result, error) => {

      if (error) {
        handleErrors(error.response);   
       } 
        else {
          openAlert(true, "Votre réalisation a été supprimée");
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useUpdateRealisation = (key,router) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) =>  postData("/archimatch_app/Realization/update_realization/", data),
    
    onSettled: async (result, error) => {

      if (error) {
        handleErrors(error.response);   
       } 
        else {
          openAlert(true, "Votre réalisation a été modifié");
          router.push("/architect/Profile")
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useUpdateVideo = (key) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) =>  postData("/archimatch_app/architect/upload_video/", data),
    
    onSettled: async (result, error) => {

      if (error) {
        handleErrors(error.response);   
       } 
        else {
          openAlert(true, "Votre vidéo a été chargé");
          
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useGetAllannouncements = () => {
  return useQuery({
    queryKey: ["announcements"],
    queryFn: () => fetchData(`/archimatch_app/announcement/`)
  });
};
export const useGetAnnouncementDetails = (id) => {
  return useQuery({
    queryKey: ["announcements",id],
    queryFn: () => fetchData(`/archimatch_app/announcement/${id}`)
  });
};
export const useGetAnnouncementDetailss = (id) => {
  return useQuery({
    queryKey: ["ann",id],
    queryFn: () => fetchData(`/archimatch_app/announcement/${id}`)
  });
};
export const useViewavatar = (id) => {
  return useQuery({
    queryKey: ["avatar",id],
    queryFn: () => fetchData(`/archimatch_app/architect/View_pp/${id}`)
  });
};
export const useCheckSelection = (arch_id,announcement_id) => {
  return useQuery({
    queryKey: ["selection",arch_id,announcement_id],
    queryFn: () => fetchData(`/archimatch_app/architect/check_selection/${announcement_id}/${arch_id}/`)
  });
};
export const useFetchDevis = (arch_id,announcement_id) => {
  return useQuery({
    queryKey: ["Devis",arch_id,announcement_id],
    queryFn: () => fetchData(`/archimatch_app/architect/view_devis/${announcement_id}/${arch_id}/`)
  });
};
export const useFetchDevisDetails = (id) => {
  return useQuery({
    queryKey: ["DevisDetails",id],
    queryFn: () => fetchData(`/archimatch_app/architect/view_devis_details/${id}/`)
  });
};
export const useFetchannouncements = (id) => {
  return useQuery({
    queryKey: ["announcements",id],
    queryFn: () => fetchData(`/archimatch_app/Selection/get_not_selected_announcements/${id}/`)
  });
};
export const useFetchSelections = (id) => {
  return useQuery({
    queryKey: ["selections",id],
    queryFn: () => fetchData(`/archimatch_app/Selection/get_selections/${id}/`)
  });
};

export const useSelectAnnouncement = (key) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) =>  postData(`/archimatch_app/architect/select_announcement/`, data),
    
    onSettled: async (result, error) => {

      if (error) {
        handleErrors(error.response);   
       } 
        else {
          openAlert(true, "Vous avez selectioné un projet");
          
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useUpdateArchiProfilPic = (key) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) =>  postData(`/archimatch_app/architect/update_pdp/`, data),
    
    onSettled: async (result, error) => {

      if (error) {
        handleErrors(error.response);   
       } 
        else {
          openAlert(true, "Votre photo de profile a été Enregistrer");
          
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useViewSubCategories = (value) => {
  return useQuery({
    queryKey: ["SubCategories",value],
    queryFn: () => fetchData(`/archimatch_app/Realization/view_subCategories/${value}/`)
  });
};
export const useViewRealizationPerCategory = (category_name) => {
  return useQuery({
    queryKey: ["Reals",category_name],
    queryFn: () => fetchData(`/archimatch_app/Realization/view_RealizationPerCategory/${category_name}/`)
  });
};



// client api ------------------------------------
export const useUpdateBaseInfoClientMutation = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/client/update_base_info/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre Modification est bien enregistrée");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useUpdatePasswordClientMutation = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/client/update_password_client/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre Modification est bien enregistrée");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useCreateAnnoucementLoggedIn = (key, data,router) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/announcement/loggedIn/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
          openAlert(true, "votre annonce a été bien enregistrée");
          router.push("/client/projects")
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useDeleteAnnoucement = (key, data,router) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/announcement/delete_announcement/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
          openAlert(true, "votre annonce a été bien enregistrée");
          router.push("/client/projects")
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useHandleDevis = (key, data,) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/client/handle_devis/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
          openAlert(true, "votre devis a été traité");
          
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useChangeAnnouncement = (key, data,) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/announcement/change_found_status/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
          openAlert(true, "votre status a été modifé");
          
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};




export const useChangeCompanyMutation = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architect/update_company_info/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
          openAlert(true, "vos données ont bien été enregistrées");
          
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};



export const useAddDevisMutation = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/Selection/create_devis/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
          openAlert(true, "votre devis a bien été enregistrées");
          
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useLeaveProject = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architect/leave_project/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
          openAlert(true, "vous avez abondonné le projet");
          
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useUpdatePasswordArchitectMutation = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architect/update_password_architect/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre Modification est bien enregistrée");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useAddCommentMutation = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/Comment/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre Avis est bien enregistrée");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};

export const useAddReportArchiMutation = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/client/signaler_architect/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre signalement est bien enregistrée");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useAddReportCommentMutation = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/architect/signaler_comment/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre signalement est bien enregistrée");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};


export const useAddInvitationMutation = (key, data) => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => postData("/archimatch_app/Invitation/", data),
    onSettled: async (result, error) => {
      if (error) {
        handleErrors(error.response);
      } else {
        
          openAlert(true, "Votre Invitation a est bien enregistrée");
          
        
        await queryClient.invalidateQueries({ queryKey: [key] });
      }
    },
  });
};