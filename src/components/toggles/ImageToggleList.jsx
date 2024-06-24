/* eslint-disable react/prop-types */

import { Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";

import { useEffect } from "react";
import ImageToggle from "./ImageToggle";

const ImageToggleList = (props) => {
  const {
    data,
    onChange,
    value,
    errorMessage,
    multi,
    className,
    formik,
    formikValue,
    architect,
  } = props;

  const handle_change = (id) => {
    onChange(data.filter((element) => element.id === id)[0]?.content);
  };
  const handle_change_multi = (content) => {
    if (value.includes(content)) {
      onChange((prevValues) =>
        prevValues.filter((item, i) => item !== content),
      );
    } else {
      onChange([...value, content]);
    }
  };

  useEffect(() => {
    if (formik) {
      formik.setFieldValue([formikValue], value);
    }
  }, [value]);
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-4 flex-wrap items-center ",
        className,
      )}
    >
      {data.map((element, index) => (
        <ImageToggle
          key={index}
          image={element.image}
          content={element.content}
          architect={architect}
          active={
            multi ? value.includes(element.content) : element.content === value
          }
          onChange={() => {
            if (multi) {
              handle_change_multi(element.content);
            } else {
              handle_change(element.id);
            }
          }}
        />
      ))}
      {errorMessage && (
        <Typography
          variant="paragraph"
          className={cn(
            "text-architect-destructive !font-semiBold text-[14px] mt-[3px]",
          )}
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default ImageToggleList;