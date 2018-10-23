import React, { Component, Fragment } from "react";
import classNames from "classnames";
import "./month.css";
import Week from "../week";
import { getMonthName } from "../utils";

class Month extends Component {
  render() {
    const { isScrolling, weeks, month, onSelectDate } = this.props;
    const css = classNames(
      {
        "calendar-month--scrolling": isScrolling
      },
      "calendar-month"
    );

    const isScrollingContent = isScrolling ? (
      <span className="calendar-month--scroll-content">{`${getMonthName(
        month
      )} ${month.getFullYear()}`}</span>
    ) : null;

    return (
      <div className={css}>
        {isScrollingContent}
        {weeks.map((w, i) => (
          <Week
            key={w.date}
            index={w.date}
            onSelectDate={onSelectDate}
            weekNumber={i}
            startOfWeek={w}
          />
        ))}
      </div>
    );
  }
}

export default Month;
