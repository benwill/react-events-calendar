import React, { Component, Fragment } from "react";
import classNames from "classnames";
import "./day.css";

class Day extends Component {
  
  onSelect() {
    const { onSelectDate, d } = this.props;
    onSelectDate(d);
  }

  render() {
    const {
      isEven,
      isFirst,
      isLast,
      changeoverFirstDay,
      date,
      month
    } = this.props;

    const outerCss = classNames("day", {
      "day--alt": isEven,
      "day--changeover-first": changeoverFirstDay
    });

    const innerCss = classNames("day__inner", {
      "day__inner--alt": !isEven,
      "day__inner--first": isFirst,
      "day__inner--last": isLast
    });

    return (
      <div className={outerCss}>
        <div className={innerCss} onClick={this.onSelect.bind(this)}>
          <div className="day__inner__number">{date}</div>
          <div className="day__inner__month">{month}</div>
        </div>
      </div>
    );
  }
}

export default Day;
