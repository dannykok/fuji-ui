import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ScrollSelect from './scroll-select';
import { Row } from '../flex';
import { timeFromString, timeToString } from './convert-time';

const AMPM = ['am', 'pm'];
const HOURS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
// prettier-ignore
const MINUTES = ['00','05','10','15','20','25','30','35','40','45','50','55'];

const TimeInput = props => {
  const { onChange } = props;
  const [_defaultHour, _defaultMinute, _defaultAPM] = timeFromString(
    props.defaultTime,
  );
  const [apm, setAPM] = useState(_defaultAPM);
  const [hour, setHour] = useState(_defaultHour);
  const [minute, setMinute] = useState(_defaultMinute);

  const handleSelectAPM = _apm => {
    setAPM(_apm);
    if (onChange) onChange(timeToString([hour, minute, _apm]));
  };

  const handleSelectHour = _hour => {
    setHour(_hour);
    if (onChange) onChange(timeToString([_hour, minute, apm]));
  };

  const handleSelectMinute = _minute => {
    setMinute(_minute);
    if (onChange) onChange(timeToString([hour, _minute, apm]));
  };

  return (
    <Row {...props} flex={1} height="220px" alignItems="stretch">
      <Row flex={1}>
        <ScrollSelect
          flex={1}
          data={AMPM}
          onSelect={handleSelectAPM}
          selectedItem={apm}
        />
        <ScrollSelect
          flex={1}
          data={HOURS}
          onSelect={handleSelectHour}
          selectedItem={hour}
        />
        <ScrollSelect
          flex={1}
          data={MINUTES}
          onSelect={handleSelectMinute}
          selectedItem={minute}
        />
      </Row>
    </Row>
  );
};

TimeInput.propTypes = {
  ...Row.propTypes,
  defaultTime: PropTypes.string,
  onChange: PropTypes.func,
};

TimeInput.defaultProps = {
  defaultTime: '',
};

export { TimeInput };
