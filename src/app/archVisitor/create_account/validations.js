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
    initialValues:{
        email : "",
        first_name :"",
        last_name:"",
        phone_number:"",
        registration_number:"",
        adresse : "",
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

      registration_number: Yup.string()
      .required("Matricule est requis")
      .matches(
        /^\d{10}$/,
        "La matricule doit avoir une longueur de 10 caractères numériques"
      ),
      adresse: Yup.string()
      .required("Adresse est requis"),
    })
}

const third_step_validation = {
    initialValues: {
      meeting_date: new Date(),
      meeting_time: "",
    },
    validationSchema: Yup.object({
      meeting_date: Yup.date().required("la date de reunion est obligatoire"),
      meeting_time: Yup.string().required("l'horaire de reunion est obligatoire"),
    }),
  };

export { first_step_validation, second_step_validation, third_step_validation };

