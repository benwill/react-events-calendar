import React, { Component } from "react";
import classNames from "classnames";
import "./month.css";
import Week from "../week";

class Month extends Component {
  render() {
    const { isScrolling, weeks, onSelectDate } = this.props;
    const css = classNames(
      {
        "calendar-month--scrolling": isScrolling
      },
      "calendar-month"
    );
    
    return (
      <div className={css}>
        {weeks.map((w, i) => (
          <Week key={w.date} index={w.date} onSelectDate={onSelectDate} weekNumber={i} startOfWeek={w} />
        ))}
      </div>
    );
  }
}

export default Month;
