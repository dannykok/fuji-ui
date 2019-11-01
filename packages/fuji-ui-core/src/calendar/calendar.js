import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../box';
import { Button } from '../button';
import { Grid } from '../grid';
import { Flex, Column, Row } from '../flex';
import { usePropsExclude, useRangeReducer } from '../hooks';

import { themeGet } from '@styled-system/theme-get';
import is from 'styled-is';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretSquareLeft,
  faCaretSquareRight,
} from '@fortawesome/free-solid-svg-icons';

import calendarBuilder, {
  thisYear,
  thisMonth,
  isDateObjEqual,
  isSameDay,
  dateObjsInRange,
  dateObjToString,
  stringToDateObj,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAY_LABEL,
  CALENDAR_WEEKS,
  monthName,
} from './helper';

const MonthSelector = styled(Row)`
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const DaysLabel = () => {
  const boxProps = {
    textAlign: 'center',
    flex: 1,
  };
  // prettier-ignore
  return (
    <Row justifyContent="center" alignItems="center" height="2rem">
      <Box {...boxProps} fontSize="xs">{WEEK_DAY_LABEL.Sunday}</Box>
      <Box {...boxProps} fontSize="xs">{WEEK_DAY_LABEL.Monday}</Box>
      <Box {...boxProps} fontSize="xs">{WEEK_DAY_LABEL.Tuesday}</Box>
      <Box {...boxProps} fontSize="xs">{WEEK_DAY_LABEL.Wednesday}</Box>
      <Box {...boxProps} fontSize="xs">{WEEK_DAY_LABEL.Thursday}</Box>
      <Box {...boxProps} fontSize="xs">{WEEK_DAY_LABEL.Friday}</Box>
      <Box {...boxProps} fontSize="xs">{WEEK_DAY_LABEL.Saturday}</Box>
    </Row>
  );
};

const SimpleDayBox = styled(Flex)`
  padding: ${themeGet('space.xs', '2px')};
  border-radius: ${themeGet('radii.m', '4px')};
  width: 2.5rem;
  height: 2.0rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  user-select: none;
  color: ${themeGet('colors.onSurface', 'black')};
  border-style: none;
  ${is('isToday')`
    color: ${themeGet('colors.primaryLightVariant', 'lightBlue')};
  `}
  &:hover {
    color: inherit;
    border-style: solid;
    border-width: 3px;
    border-color:  ${themeGet('colors.primaryLightVariant', '#EEE')};
  }
  ${is('inRange')`
    color: ${themeGet('colors.onSecondary', 'black')};
    background-color: ${themeGet('colors.secondary', '#EEEEEE')};
  `}
  ${is('selected')`
    color: ${themeGet('colors.onPrimary', 'white')} !important;
    background-color: ${themeGet('colors.primary', 'blue')} !important;
  `}
  opacity: ${props => (props.selectable ? 1 : 0.2)};
`;

const MonthGrid = styled(Grid)`
  /* display: inline-grid; */
  min-height: 0;
  flex: 1;
  justify-items: stretch;
  align-items: stretch;
  align-content: start;
  grid-gap: 1px;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: repeat(${CALENDAR_WEEKS}, auto);
`;

const CalendarWrapper = styled(Box)`
  display: inline-block;
  background-color: ${themeGet('colors.surface', 'white')};
  border-style: ${props => (props.bordered ? 'solid' : 'none')};
  border-width: ${themeGet('borderWidths.input', '1px')};
  border-color: ${themeGet('colors.border', 'black')};
  border-radius: ${themeGet('radii.m', '3px')};
  font-size: ${themeGet('fontSizes.s', '1rem')};
  padding: ${themeGet('space.s', '4px')};
`;

const Calendar = props => {
  // store the selected date obj
  const {
    defaultYearMonth,
    defaultValue,
    onSelectDate,
    rangeSelect,
    selectedDates: overrideSelectedDates,
  } = props;
  // const [selectedDates, setSelectedDates] = useState(defaultValue);
  // define the range bound. rangeselect will be 2 (e.g. start and end)
  const rangeBound = rangeSelect ? 2 : 1;
  const [selectedDates, addDate] = useRangeReducer(defaultValue, rangeBound);
  const [yearMonth, setYearMonth] = useState(
    defaultYearMonth || [thisYear(), thisMonth()],
  );
  const targetSelectedDates = overrideSelectedDates || selectedDates;

  const [_thisYear, _thisMonth] = yearMonth;
  const datesInRange =
    targetSelectedDates.length === 2
      ? dateObjsInRange(
          stringToDateObj(targetSelectedDates[0]),
          stringToDateObj(targetSelectedDates[1]),
        )
      : [];

  const cData = calendarBuilder(yearMonth);
  const handleSelect = selection => {
    // convert [d,m,y] format to a y-m-d string before add
    const result = addDate(dateObjToString(selection));
    if (onSelectDate) onSelectDate([...result]);
  };

  const handleNextMonth = () => setYearMonth(getNextMonth(yearMonth));
  const handlePrevMonth = () => setYearMonth(getPreviousMonth(yearMonth));

  // props for wrapper (exclude irrelevant props)
  const propsForWrapper = usePropsExclude(props, ['onSelectDate']);

  return (
    <CalendarWrapper {...propsForWrapper}>
      <Column flex={1}>
        <MonthSelector>
          <Button variant="icon" onClick={handlePrevMonth}>
            <FontAwesomeIcon icon={faCaretSquareLeft} />
          </Button>
          {monthName(_thisMonth)} {_thisYear}
          <Button variant="icon" onClick={handleNextMonth}>
            <FontAwesomeIcon icon={faCaretSquareRight} />
          </Button>
        </MonthSelector>
        <DaysLabel />
        <MonthGrid>
          {cData.map(dateObj => {
            const [y, m, d] = dateObj;
            const today = new Date();
            const dateString = dateObjToString(dateObj);
            const selectable = m === _thisMonth;
            const selected = targetSelectedDates.reduce(
              (c, date) => c || dateString === date,
              false,
            );
            const inRange = datesInRange.reduce(
              (c, date) => c || isDateObjEqual(dateObj, date),
              false,
            );
            const dateAbbr = `${y}/${m}/${d}`;
            return (
              <SimpleDayBox
                key={dateAbbr}
                as="a"
                title={dateAbbr}
                selectable={selectable}
                selected={selected}
                isToday={isSameDay(today, new Date(dateString))}
                inRange={inRange}
                onClick={() => selectable && handleSelect(dateObj)}
              >
                {d}
              </SimpleDayBox>
            );
          })}
        </MonthGrid>
      </Column>
    </CalendarWrapper>
  );
};

Calendar.displayName = 'Calendar';

SimpleDayBox.propTypes = {
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  inRange: PropTypes.bool,
};

Calendar.propTypes = {
  ...Box.propTypes,
  bordered: PropTypes.bool,
  rangeSelect: PropTypes.bool,
  defaultYearMonth: PropTypes.array,
  defaultValue: PropTypes.array,
  onSelectDate: PropTypes.func,
  selectedDates: PropTypes.array,
};

Calendar.defaultProps = {
  bordered: true,
  defaultValue: [],
};

export { Calendar };
