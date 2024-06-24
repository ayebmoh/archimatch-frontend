/* eslint-disable react/prop-types */
"use client";
import { Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";

import ToggleButton from "./ToggleButton";

const ToggleButtonList = (props) => {
  const {
    data,
    onChange,
    value,
    errorMessage,
    multi,
    className,
    formik,
    formikValue,
  } = props;

  const handle_change = (id) => {
    if (formik) {
      console.log(formik.values);
      formik.setFieldValue(
        [formikValue],
        data.filter((element) => element.id === id)[0]?.content,
      );
    } else {
      onChange(data.filter((element) => element.id === id)[0]?.content);
    }
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

  return (
    <div className={cn("flex gap-2 flex-wrap", className)}>
      {data.map((element, index) => (
        <ToggleButton
          key={index}
          content={element.content}
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

export default ToggleButtonList;
