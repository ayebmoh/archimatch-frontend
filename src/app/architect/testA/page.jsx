"use client";
import {
  FileUploader,
  SingleFileUploader,
  ToggleButtonList,
} from "@/components";
import CustomSelect from "@/components/CustomtSelect";
import { useState } from "react";

const page = () => {
  const villes = ["Tunis", "Sousse", "Monastir", "Mahdia"];
  const architect_type_initial_values = [
    { id: 1, content: "architece de construction" },
    { id: 2, content: "architece de Beton" },
    { id: 3, content: "architece d'interieur" },
    { id: 4, content: "architece artisan" },
    { id: 5, content: "architece blomberie et electricité" },
  ];
  const [value, setValue] = useState([
    "architece de construction",
    "architece de Beton",
  ]);

  return (
    <>
      <FileUploader />

      <SingleFileUploader />
      <ToggleButtonList
        data={architect_type_initial_values}
        value={value}
        onChange={setValue}
        multi
      />
      <div className="w-72">
        <CustomSelect options={villes} label="Ville" />
      </div>
    </>
  );
};

export default page;
