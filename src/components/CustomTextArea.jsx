/* eslint-disable react/prop-types */
"use client";

import { Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const CustomTextArea = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    label,
    containerClassName,
    success,
    error,
    variant,
    placeholder,
    inputClassName,
    labelcolor,
    value,
    onBlur,
    errorMessage,
    name,
    onChange,
    isPassword,
    rows,
    cols,
  } = props;

  const [type, setType] = useState(isPassword ? "password" : "text");
  const [Icon, setIcon] = useState(EyeSlashIcon);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(EyeIcon);
      setType("text");
    } else {
      setIcon(EyeSlashIcon);
      setType("password");
    }
  };

  return (
    <div className={cn("flex flex-col gap-[3px]", containerClassName)}>
      <Typography
        variant="paragraph"
        labelcolor={labelcolor}
        className={cn(
          "text-architect-dark_blue !font-semiBold text-[14px]",
          success && "text-architect-success",
          error && "text-architect-destructive",
        )}
      >
        {label}
      </Typography>
      <textarea
        type={type}
        placeholder={placeholder}
        variant={variant ? variant : "outlined"}
        className={cn(
          "border-2 border-gray-300 resize-none  rounded-md focus:border-architect-primary outline-none focus:outline-none p-2",
          inputClassName,
          success && "border-architect-success",
          error && "border-architect-destructive",
        )}
        value={value}
        onBlur={onBlur}
        name={name}
        onChange={onChange}
        rows={rows}
        cols={cols}
      />
      {errorMessage && (
        <Typography
          variant="paragraph"
          labelcolor={labelcolor}
          className={cn(
            "text-architect-destructive !font-semiBold text-sm mt-[3px]",
          )}
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default CustomTextArea;
