import * as Yup from "yup";
const first_step_validation = {
    initialValues : {
        architect_type : ""
    },
    validationSchema : Yup.object({
        architect_type : Yup.string().required("Type d'architecte est obligatoire")
    })
}

const second_step_validation = {
  initialValues : {
      need : ""
  },
  validationSchema : Yup.object({
      need : Yup.string().required("Le besoin est obligatoire obligatoire")
  })
}

const third_step_validation = {
  initialValues : {
      categories : ""
  },
  validationSchema : Yup.object({
    categories : Yup.string().required("La categorie est obligatoire obligatoire")
  })
}

const fourth_step_validation = {
  initialValues : {
      house_type : ""
  },
  validationSchema : Yup.object({
    house_type : Yup.string().required("Le type de bien est obligatoire obligatoire")
  })
}
const fifth_step_validation = {
  initialValues : {
      work_type : ""
  },
  validationSchema : Yup.object({
    work_type : Yup.string().required("Le type de travaux est obligatoire obligatoire")
  })
}

const sixth_step_validation = {
  initialValues : {
      nb_suite_parental : 0,
      nb_cuisine : 0,
      nb_Terasse : 0,
      nb_chambre:0,
      nb_salle_a_manger:0,
      nb_jardin:0,
      nb_chambre_enfant:0,
      nb_salle_bain:0,
      nb_haul:0,
      nb_salon:0,
      nb_bureau:0,
      nb_garage:0
  },
  validationSchema : Yup.object({
    nb_suite_parental : Yup.number().required("Le nombre suite_parental obligatoire obligatoire"),
    nb_cuisine : Yup.number().required("Le nombre cuisine obligatoire obligatoire"),
    nb_Terasse : Yup.number().required("Le nombre de terasse obligatoire obligatoire"),
    nb_chambre : Yup.number().required("Le nombre de chambre obligatoire obligatoire"),

    nb_salle_a_manger : Yup.number().required("Le nombre de salle a manger obligatoire obligatoire"),
    nb_jardin : Yup.number().required("Le nombre de jardin obligatoire obligatoire"),
    nb_chambre_enfant : Yup.number().required("Le nombre de chambre d'enfant obligatoire obligatoire"),
    nb_salle_bain : Yup.number().required("Le nombre de salle de bain obligatoire obligatoire"),

    nb_haul : Yup.number().required("Le nombre de haul / Entrée obligatoire obligatoire"),
    nb_salon : Yup.number().required("Le nombre de salons  obligatoire obligatoire"),
    nb_bureau : Yup.number().required("Le nombre de bureau obligatoire obligatoire"),
    nb_garage : Yup.number().required("Le nombre de garage obligatoire obligatoire"),
  })
}


const seventh_step_validation = {
  initialValues:{
      town : "",
      surface_terrain:"",
      surface_travaux:"",
      adresse : "",
  },
  validationSchema: Yup.object({
    
    adresse: Yup.string()
    .required("Adresse est requis"),
    surface_terrain: Yup.string()
    .required("Adresse est requis"),
    surface_travaux: Yup.string()
    .required("Adresse est requis"),
    town: Yup.string()
    .required("Adresse est requis"),
  })
}

const eigtth_step_validation = {
  initialValues:{
      budget : "",
      details:"",

  },
  validationSchema: Yup.object({
    
    details: Yup.string()
    .required("details est requis"),
    budget: Yup.string()
    .required("budget est requis"),

  })
}


const nineth_step_validation = {
  initialValues:{
      work_style : "",
    

  },
  validationSchema: Yup.object({
    
    work_style: Yup.string()
    .required("work_style est requis"),


  })
}

const tenth_step_validation = {
  initialValues:{
      extra : "",
  },

}
const eleventh_step_validation = {
  initialValues:{
      images : "",
  },

}


const final_step_validation = {
  initialValues:{
      email : "",
      first_name :"",
      last_name:"",
      phone_number:"",

  },
  validationSchema: Yup.object({
      email: Yup.string()
    .email("Email invalide")
    .required("Email est obligatoire"),
    first_name: Yup.string()
    .required("Nom est requis")
    .max(20, "Nom ne doit pas depasser 20 caractères"),
    last_name: Yup.string()
    .required("Prenom est requis")
    .max(20, "Prenom ne doit pas depasser 20 caractères"),
    phone_number: Yup.string()
    .required("Numéro de téléphone est requis")
    .matches(
      /^\d{9}$/,
      "Le  de téléphone doit avoir 9 chiffre"
    ),
  })
}
export { eigtth_step_validation, eleventh_step_validation, fifth_step_validation, final_step_validation, first_step_validation, fourth_step_validation, nineth_step_validation, second_step_validation, seventh_step_validation, sixth_step_validation, tenth_step_validation, third_step_validation };

