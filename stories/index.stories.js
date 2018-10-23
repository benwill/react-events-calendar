import React from "react";
import { storiesOf } from "@storybook/react";
import Calendar from "../src/components/Calendar";
import { action, configureActions } from "@storybook/addon-actions";

import { date, boolean } from "@storybook/addon-knobs";

const initialStartDate = new Date(2018, 8, 1, 1, 1, 1);

function getDateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

storiesOf("Calendar", module).add("Default", () => (
  <Calendar
    startDate={getDateKnob("Start Date", initialStartDate)}
    onSelectDate={action("button-click")}
  />
));
