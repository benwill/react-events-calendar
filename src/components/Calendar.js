import React, { Component } from "react";
import PropTypes from "proptypes";
import { List, AutoSizer } from "react-virtualized";

import { addMonths, getWeeksInMonth } from "./utils";
import Month from "./month/month";
import "./App.css";

const ROW_HEIGHT = 100;

class ReactEventsCalendar extends Component {
  getMonthFromIndex(index) {
    const { startDate } = this.props;

    return addMonths(startDate, 1 * index);
  }

  rowRenderer({ index, isScrolling, key, style }) {
    const { onSelectDate } = this.props;
    const month = this.getMonthFromIndex(index);
    const weeks = getWeeksInMonth(month);
    return (
      <div key={key} style={style} className="calendar-page">
        <Month
          month={month}
          weeks={weeks}
          isScrolling={isScrolling}
          onSelectDate={onSelectDate}
        />
      </div>
    );
  }

  getRowHeight({ index }) {
    const month = this.getMonthFromIndex(index);
    const mondays = getWeeksInMonth(month);
    return mondays.length * ROW_HEIGHT;
  }

  renderDaysOfWeek() {
    return (
      <ul>
        <li />
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
      </ul>
    );
  }

  render() {
    return (
      <div className="app">
        <div className="app--days">{this.renderDaysOfWeek()}</div>
        <AutoSizer>
          {({ width, height }) => (
            <List
              ref="List"
              height={height}
              overscanRowCount={2}
              rowCount={500}
              rowHeight={this.getRowHeight.bind(this)}
              rowRenderer={this.rowRenderer.bind(this)}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

ReactEventsCalendar.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired
};

export default ReactEventsCalendar;
