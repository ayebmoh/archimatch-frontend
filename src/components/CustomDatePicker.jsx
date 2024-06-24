"use client";
import { IconButton } from "@/components/RemoteComponents";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DayPicker, useNavigation } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./CustomDatePicker.css";
function CustomCaption(props) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();

  return (
    <h2 className="flex flex-row justify-between items-center">
      <IconButton
        variant="outlined"
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </IconButton>
      <p className="text-architect-font_gris font-bold">
        {format(props.displayMonth, "MMM yyy")}
      </p>

      <IconButton
        variant="outlined"
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </IconButton>
    </h2>
  );
}

const CustomDatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { onChange } = props;
  const disabledBeforeToday = (date) => date < new Date();
  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  useEffect(() => {
    if (onChange) {
      onChange("meeting_date", selectedDate);
    }
  }, [selectedDate]);

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={handleChange}
      components={{
        Caption: CustomCaption,
      }}
      disabled={disabledBeforeToday}
    />
  );
};

export default CustomDatePicker;
