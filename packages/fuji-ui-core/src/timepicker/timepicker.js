import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { Row } from '../flex';
import { Spacer } from '../spacer';
import { TextInput, TextRangeInput } from '../text-input';
import { TimeInput } from './time-input';
import { Popover } from '../popover';
import { usePropsFilter, useCombinedRefs } from '../hooks';

import { convertTimeTo12H } from './convert-time';
import { inputSizes } from '@fuji-ui/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Timepicker = React.forwardRef((props, ref) => {
  const [outerRef1, outerRef2] = Array.isArray(ref) ? ref : [ref];
  const { name, defaultValue, placeholder, rangeSelect } = props;
  const { anchor, defaultPopped, onPopped, onChange, disabled, error } = props;
  const innerRef1 = useRef(null);
  const innerRef2 = useRef(null);
  const dateInputRef1 = useCombinedRefs(outerRef1, innerRef1);
  const dateInputRef2 = useCombinedRefs(outerRef2, innerRef2);
  const [dst, det] = defaultValue;
  const [startTime, setStartTime] = useState(convertTimeTo12H(dst));
  const [endTime, setEndTime] = useState(convertTimeTo12H(det));
  const _placeholder =
    placeholder || (rangeSelect ? ['Start time', 'End time'] : 'Select a time');
  const _name = name || (rangeSelect ? ['startTime', 'endTime'] : 'time');
  // const minWidth = props.minWidth || (rangeSelect ? '380px' : '120px');
  useEffect(() => {
    if (startTime && dateInputRef1) dateInputRef1.current.value = startTime;
    if (endTime && dateInputRef2) dateInputRef2.current.value = endTime;
  }, [startTime, endTime]);

  const handleTimeChange = (time, ref) => {
    if (ref === dateInputRef1) {
      setStartTime(time);
      // dateInputRef1.current.value = time;
    } else if (ref === dateInputRef2) {
      setEndTime(time);
      // dateInputRef2.current.value = time;
    }
    if (onChange) {
      if (rangeSelect) {
        onChange([startTime, endTime]);
      } else {
        onChange(startTime);
      }
    }
  };

  const boxProps = usePropsFilter(props, Box.propTypes);
  const inputProps = usePropsFilter(props, inputSizes.propTypes); // size

  return (
    <Popover
      anchor={anchor}
      defaultPopped={defaultPopped}
      onPopped={onPopped}
      popupWidth="100%"
      disabled={disabled}
      {...boxProps}
      menu={
        <Row>
          <TimeInput
            onChange={time => handleTimeChange(time, dateInputRef1)}
            defaultTime={startTime}
          />
          {rangeSelect && (
            <>
              <Spacer width="24px" />
              <TimeInput
                onChange={time => handleTimeChange(time, dateInputRef2)}
                defaultTime={endTime}
              />
            </>
          )}
        </Row>
      }
    >
      {rangeSelect ? (
        <TextRangeInput
          flex={1}
          ref={[dateInputRef1, dateInputRef2]}
          icon={<FontAwesomeIcon icon={faClock} />}
          placeholder={_placeholder}
          name={_name}
          disabled={disabled}
          error={error}
          {...inputProps}
        />
      ) : (
        <TextInput
          flex={1}
          ref={dateInputRef1}
          icon={<FontAwesomeIcon icon={faClock} />}
          placeholder={_placeholder}
          name={_name}
          disabled={disabled}
          error={error}
          {...inputProps}
        />
      )}
    </Popover>
  );
});

Timepicker.displayName = 'Timepicker';

Timepicker.propTypes = {
  ...Box.propTypes,
  ...inputSizes.propTypes,
  rangeSelect: PropTypes.bool,
  defaultValue: PropTypes.array,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
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
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.bool),
  ]),
  error: PropTypes.bool,
};

Timepicker.defaultProps = {
  anchor: 'bottomRight',
  defaultValue: [],
};

export { Timepicker };
