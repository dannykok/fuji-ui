import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../box';
import { Row } from '../flex';
import { TextInput, TextRangeInput } from '../text-input';
import { Calendar } from '../calendar';
import { Popover } from '../popover';
import { Skeleton } from '../skeleton';
import { usePropsFilter, useRangeReducer, useCombinedRefs } from '../hooks';

import { inputSizes } from '@fuji-ui/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { thisYear, thisMonth, getNextMonth } from './helper';
import { stringToDateObj } from '../calendar/helper';

const Datepicker = React.forwardRef((props, ref) => {
  const [outerRef1, outerRef2] = Array.isArray(ref) ? ref : [ref];
  const {
    defaultValue,
    name,
    rangeSelect,
    onSelectDate,
    onChange,
    placeholder,
    disabled,
    error,
  } = props;
  const { anchor, defaultPopped, onPopped } = props;
  const innerRef1 = useRef(null);
  const innerRef2 = useRef(null);
  const dateInputRef1 = useCombinedRefs(outerRef1, innerRef1);
  const dateInputRef2 = useCombinedRefs(outerRef2, innerRef2);
  const rangeBound = rangeSelect ? 2 : 1;
  const [selectedDates, addDates] = useRangeReducer(defaultValue, rangeBound);
  useEffect(() => {
    const [d1, d2] = selectedDates;
    if (d1 && dateInputRef1) dateInputRef1.current.value = d1;
    if (d2 && dateInputRef2) dateInputRef2.current.value = d2;
  }, [selectedDates]);

  // const width = props.width || (rangeSelect ? '480px' : '240px');
  const _placeholder =
    placeholder || (rangeSelect ? ['Start date', 'End date'] : 'Select a date');
  const [ds, de] = selectedDates;
  const _startingYM = ds ? stringToDateObj(ds) : [thisYear(), thisMonth()];
  var _endingYM = de ? stringToDateObj(de) : getNextMonth(_startingYM);
  // +1 to ending year month if it is the same as starting year month
  const [sy, sm] = _startingYM;
  const [ey, em] = _endingYM;
  if (ey[0] <= sy[0] || (ey[0] === sy[0] && em[1] <= sm[1])) {
    _endingYM = getNextMonth(_endingYM);
  }

  const handleSelectDate = selectedDates => {
    // here we pick only the last selected date from calendar (the one user has just selected),
    // and put it in parent range reducer
    const result = addDates(selectedDates[0]);
    // symbolic to onSelectDate
    if (onChange) onChange([...result]);
    // onSelectDate should be obsolete in future version
    if (onSelectDate) onSelectDate([...result]);
  };

  const boxProps = usePropsFilter(props, Box.propTypes);
  const inputProps = usePropsFilter(props, inputSizes.propTypes); // size
  return (
    <Popover
      anchor={anchor}
      defaultPopped={defaultPopped}
      onPopped={onPopped}
      disabled={disabled}
      {...boxProps}
      menu={
        <Row>
          <Calendar
            bordered={false}
            rangeSelect={rangeSelect}
            selectedDates={selectedDates}
            defaultValue={defaultValue}
            onSelectDate={dates => handleSelectDate(dates)}
            defaultYearMonth={_startingYM}
          />
          {rangeSelect && (
            <Calendar
              bordered={false}
              rangeSelect={rangeSelect}
              selectedDates={selectedDates}
              defaultValue={defaultValue}
              onSelectDate={dates => handleSelectDate(dates)}
              defaultYearMonth={_endingYM}
            />
          )}
        </Row>
      }
    >
      {rangeSelect ? (
        <TextRangeInput
          ref={[dateInputRef1, dateInputRef2]}
          icon={<FontAwesomeIcon icon={faCalendar} />}
          placeholder={_placeholder}
          disabled={disabled}
          error={error}
          name={name || ['startDate', 'endDate']}
          {...inputProps}
        />
      ) : (
        <TextInput
          ref={dateInputRef1}
          icon={<FontAwesomeIcon icon={faCalendar} />}
          placeholder={_placeholder}
          disabled={disabled}
          error={error}
          name={name || 'startDate'}
          {...inputProps}
        />
      )}
    </Popover>
  );
});

Datepicker.displayName = 'Datepicker';

Datepicker.skeleton = props => <Skeleton width="13rem" {...props} />; // eslint-disable-line

Datepicker.propTypes = {
  ...Box.propTypes,
  ...inputSizes.propTypes,
  type: PropTypes.oneOf(['date', 'datetime']),
  rangeSelect: PropTypes.bool,
  defaultValue: PropTypes.array,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onSelectDate: PropTypes.func, // obsolete. use onChange instead
  onChange: PropTypes.func,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.bool),
  ]),
  error: PropTypes.bool,
  // anchor: Popover.propTypes.anchor,
  // defaultPopped: Popover.propTypes.defaultPopped,
  // onPopped: Popover.propTypes.onPopped,
  anchor: PropTypes.oneOf([
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight',
  ]).isRequired,
  defaultPopped: PropTypes.bool,
  onPopped: PropTypes.func,
};

Datepicker.defaultProps = {
  defaultValue: [],
  anchor: 'bottom',
  defaultPopped: false,
};

export { Datepicker };
