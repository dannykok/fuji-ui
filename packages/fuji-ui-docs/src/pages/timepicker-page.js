import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, InputGroup, Timepicker, Column } from '@fuji-ui/core';

const CalendarPage = props => {
  return (
    <DocPage>
      <T.H1>Timepicker</T.H1>
      <T.P>Time picker support single time or range select</T.P>
      <Column>
        <Timepicker size="s" width="120px" mt="s" />
        <Timepicker size="m" width="160px" mt="s" />
        <Timepicker size="l" width="240px" mt="s" />
      </Column>
      <T.H5>Range Select</T.H5>
      <Timepicker size="m" rangeSelect width="360px" />
      <T.H5>Default value</T.H5>
      <InputGroup size="m" direction="column">
        <Timepicker
          defaultValue={['9:11 am']}
          onChange={time => console.log(time)}
        />
        <Timepicker
          defaultValue={['10:00 am', '12:00 pm']}
          rangeSelect
          onChange={time => console.log(time)}
        />
      </InputGroup>
    </DocPage>
  );
};

export default CalendarPage;
