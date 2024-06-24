/* eslint-disable react/prop-types */
"use client";

import { Option, Select, Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const CustomSelect = (props) => {
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
    options,
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
      <Select
        placeholder={placeholder}
        variant={variant ? variant : "outlined"}
        className={cn("placeholder:opacity-100", inputClassName)}
        value={value}
        error={error}
        success={success}
        onBlur={onBlur}
        name={name}
        onChange={onChange}
        color="blue-gray"
      >
        {options.map((element, index) => (
          <Option key={index}>{element}</Option>
        ))}
      </Select>
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

export default CustomSelect;
