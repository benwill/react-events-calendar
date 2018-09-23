import React, { Component, Fragment } from "react";
import classNames from "classnames";
import "./day.css";

class Day extends Component {
  render() {
    const { isEven, isFirst, isLast, changeoverFirstDay } = this.props;

    const outerCss = classNames("day", {
      "day--alt": isEven,
      "day--changeover-first": changeoverFirstDay
    });

    const innerCss = classNames("day__inner", {
      "day__inner--alt": !isEven,
      "day__inner--first": isFirst,
      "day__inner--last": isLast,
    });

    return (
      <div className={outerCss}>
        <div className={innerCss}>
          <div className="day__inner__number">{this.props.date}</div>
          <div className="day__inner__month">{this.props.month}</div>
        </div>
      </div>
    );
  }
}

export default Day;