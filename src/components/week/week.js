import React, { Component, Fragment } from "react";
import classNames from "classnames";

import "./week.css";
import Day from "../day";
import { getWeekDays, getMonthName, addDays, isLastDay } from "../utils";

class Week extends Component {

  renderPlaceholder(weekNumber, isChangeOver, date, isEven) {

    const nonChangeOverCss = classNames("week-spacer", { "week-spacer--alt": !isEven })

    if (weekNumber !== 0) {
      return <span className={nonChangeOverCss} />;
    }

    const month = addDays(date, 6);
    const monthName = getMonthName(month);

    if(!isChangeOver) {
      return <span className={`${nonChangeOverCss} month-tag`}>{monthName}</span>;
    }

    const outerCss = classNames("month-tag week-changeover", {
      "week-changeover--alt": isEven
    });
    const innerCss = classNames("month-tag week-changeover__inner", {
      "week-changeover__inner--alt": !isEven
    });

    return (
      <span className={outerCss}>
        <span className={innerCss}>{monthName}</span>
      </span>
    );
  }

  render() {
    const { startOfWeek, weekNumber, onSelectDate } = this.props;
    const { date, isChangeOver } = startOfWeek;
    const isEven = startOfWeek.date.getMonth() % 2;
    const days = getWeekDays(date);

    return (
      <Fragment>
        {this.renderPlaceholder(weekNumber, isChangeOver, date, isEven)}

        {days.map((d, i) => {
          return (
            <Day
              key={d}
              date={d.getDate()}
              d={d}
              onSelectDate={onSelectDate}
              changeoverFirstDay={isChangeOver && i === 0}
              isEven={d.getMonth() % 2 === 0}
              isFirst={isChangeOver && d.getDate() === 1}
              isLast={isChangeOver && isLastDay(d)}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default Week;
