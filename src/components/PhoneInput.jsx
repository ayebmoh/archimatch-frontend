/* eslint-disable react/prop-types */
import {
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@/components/RemoteComponents";
import { useCountries } from "use-react-countries";

import { cn } from "@/utils";
import React, { useState } from "react";

const PhoneInput = (props) => {
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
    iname,
    onChange,
  } = props;
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const [custom_countries, setCustomCountries] = useState([]);

  const { name, flags, countryCallingCode } = countries.filter(
    (element) => element.name === "France" || element.name === "Tunisia",
  )[country];

  return (
    <div className={cn("flex flex-col gap-[3px] ", containerClassName)}>
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
      <div className="relative flex w-full  h-[48px] ">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              color="blue-gray"
              className="flex h-full items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-white pl-3"
            >
              <img
                src={flags.svg}
                alt={name}
                className="h-4 w-4 rounded-full object-cover"
              />
              {countryCallingCode}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {countries
              .filter(
                (element) =>
                  element.name === "France" || element.name === "Tunisia",
              )
              .map(({ name, flags, countryCallingCode }, index) => {
                return (
                  <MenuItem
                    key={name}
                    value={name}
                    className="flex items-center gap-2"
                    onClick={() => setCountry(index)}
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {name} <span className="ml-auto">{countryCallingCode}</span>
                  </MenuItem>
                );
              })}
          </MenuList>
        </Menu>
        <Input
          placeholder={placeholder}
          variant={variant ? variant : "outlined"}
          className={cn(
            "placeholder:opacity-100 rounded-l-none w-full",
            inputClassName,
          )}
          value={value}
          error={error}
          success={success}
          onBlur={onBlur}
          name={iname}
          onChange={onChange}
          containerProps={{
            className: "w-full",
          }}
        />
      </div>

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

export default PhoneInput;
