import * as Yup from "yup";
const first_step_validation = {
  initialValues : {
      categories : ""
  },
  validationSchema : Yup.object({
    categories : Yup.string().required("La categorie est obligatoire obligatoire")
  })
}

const second_step_validation = {
  initialValues:{
      work_style : "",
  },
  validationSchema: Yup.object({
    work_style: Yup.string()
    .required("work_style est requis"),
  })
}


const fourth_step_validation = {
  initialValues : {
      need : ""
  },
  validationSchema : Yup.object({
      need : Yup.string().required("Le besoin est obligatoire obligatoire")
  })
}



// const fourth_step_validation = {
//   initialValues : {
//       house_type : ""
//   },
//   validationSchema : Yup.object({
//     house_type : Yup.string().required("Le type de bien est obligatoire obligatoire")
//   })
// }
// const fifth_step_validation = {
//   initialValues : {
//       work_type : ""
//   },
//   validationSchema : Yup.object({
//     work_type : Yup.string().required("Le type de travaux est obligatoire obligatoire")
//   })
// }

const sixth_step_validation = {
  initialValues : {
    images: [],
  },
  validationSchema: Yup.object({
    
    images: Yup.array()
      .min(1, "Veuillez sélectionner au moins une image") // Ensure array has at least one element
  }),
}


const third_step_validation = {
  initialValues:{
    project_title:"",
      surface_travaux:"",
      town : "",
  },
  validationSchema: Yup.object({
    
    town: Yup.string()
    .required("La ville est requis"),
    project_title: Yup.string()
    .required("Le titre de projet est requis"),
    surface_travaux: Yup.string()
    .required("la surface des travaux est requis"),
  })
}

const fifth_step_validation = {
  initialValues:{
      details:"",

  },
  validationSchema: Yup.object({
    
    details: Yup.string()
    .required("details est requis"),

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
export { eleventh_step_validation, fifth_step_validation, final_step_validation, first_step_validation, fourth_step_validation, second_step_validation, sixth_step_validation, tenth_step_validation, third_step_validation };

