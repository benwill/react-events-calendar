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

  render() {
    return (
      <div className="app">
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
