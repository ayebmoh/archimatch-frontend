/* eslint-disable react/prop-types */
"use client";
import { Typography } from "@material-tailwind/react";

import { cn } from "@/utils";
import TimeToggleButton from "./TimeToggleButton";

const TimeToggleButtonList = (props) => {
  const { data, onChange, value, errorMessage, className } = props;
  return (
    <>
      <div className={cn("flex flex-col gap-2 overflow-auto", className)}>
        {data.map((element, index) => (
          <TimeToggleButton
            key={index}
            content={element.content}
            active={element.content === value}
            onChange={() => onChange(element.id)}
          />
        ))}
      </div>
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
    </>
  );
};

export default TimeToggleButtonList;
