import FileList from "@/assets/FileList.svg";
import { CustomSelect } from "@/components";
// import GoogleMap from "@/components/GoogleMap";
import { SelectionCard } from "@/components/cards";
import { useFetchSelections } from "@/services/queries";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";

const InProgress = () => {
  const cookiestdata = Cookies.get("id");
  const { data: selection, isLoading } = useFetchSelections(cookiestdata);

  const villes = [
    { id: 1, content: "Tunis", value: "Tunis" },
    { id: 2, content: "Monastir", value: "Monastir" },
    { id: 3, content: "Sousse", value: "Sousse" },
    { id: 4, content: "Mahdia", value: "Mahdia" },
  ];
  if (isLoading) return <Spinner />;
  else {
    return (
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full flex-wrap flex-row flex m-auto gap-6  justify-center mt-10">
          <div className="flex gap-2 max-w-[1110px] w-full justify-between ">
            <CustomSelect
              options={villes}
              label="Type de travaux"
              containerClassName="w-[30%]"
              // value={formik.values.town}
              // onChange={(value) => formik.setFieldValue("town", value)}
              // onBlur={formik.handleBlur}
              // error={formik.touched.town && formik.errors.town ? true : false}
              // success={formik.touched.town && !formik.errors.town ? true : false}
              // errorMessage={
              //   formik.touched.town && formik.errors.town
              //     ? formik.errors.town
              //     : undefined
              // }
              name="town"
            />
            <CustomSelect
              options={villes}
              label="Type de bien"
              containerClassName="w-[30%]"
              // value={formik.values.town}
              // onChange={(value) => formik.setFieldValue("town", value)}
              // onBlur={formik.handleBlur}
              // error={formik.touched.town && formik.errors.town ? true : false}
              // success={formik.touched.town && !formik.errors.town ? true : false}
              // errorMessage={
              //   formik.touched.town && formik.errors.town
              //     ? formik.errors.town
              //     : undefined
              // }
              name="town"
            />
            <CustomSelect
              options={villes}
              label="Status"
              containerClassName="w-[30%]"
              // value={formik.values.town}
              // onChange={(value) => formik.setFieldValue("town", value)}
              // onBlur={formik.handleBlur}
              // error={formik.touched.town && formik.errors.town ? true : false}
              // success={formik.touched.town && !formik.errors.town ? true : false}
              // errorMessage={
              //   formik.touched.town && formik.errors.town
              //     ? formik.errors.town
              //     : undefined
              // }
              name="town"
            />
            <Button className="sm self-end ">
              <MagnifyingGlassIcon className="w-4 h-4" />
            </Button>
          </div>
          {selection &&
          selection?.data &&
          selection.data.Selections.length > 0 ? (
            selection.data.Selections.map((selection, index) => (
              <>
                <SelectionCard
                  className="h-full"
                  key={index}
                  data={selection}
                />
              </>
            ))
          ) : (
            <div className="text-center justify-center items-center">
              <div>
                <div className="flex flex-col items-center justify-center self-center">
                  <img
                    className="w-[400px] cursor-pointer flex items-center justify-center self-center py-0.5 mt-5 "
                    src={FileList.src}
                  />
                  <Typography
                    variant="h1"
                    className="text-architect-font_gris text-[25px] text-center font-extrabold "
                  >
                    Pas de Projets Disponibles pour l'instant
                  </Typography>
                  <Typography
                    variant="h1"
                    className=" text-[18px] text-center w-[650px] "
                  >
                    Plus votre portfolio est complet, plus vous attirerez des
                    projets stimulants et des opportunités professionnelles
                    passionnantes.
                  </Typography>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <GoogleMap /> */}
      </div>
    );
  }
};

export default InProgress;
