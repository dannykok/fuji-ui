import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, InputGroup, Datepicker, Column } from '@fuji-ui/core';

const DatepickerPage = props => {
  return (
    <DocPage>
      <T.H1>Datepicker</T.H1>
      <T.P>Date picker support single date or range select</T.P>
      <T.H5>Pick a date</T.H5>
      <Column>
        <Datepicker size="s" width="160px" mt="s" anchor="bottomRight" />
        <Datepicker size="m" width="240px" mt="s" anchor="bottomRight" />
      </Column>
      <T.H5>Range Select</T.H5>
      <Datepicker size="m" rangeSelect width="440px" anchor="bottomRight" />
      <T.H5>Preset date values</T.H5>
      <InputGroup size="m" direction="column">
        <Datepicker defaultValue={['2019-10-21']} />
        <Datepicker
          defaultValue={['2019-10-21', '2020-09-30']}
          rangeSelect
          anchor="bottomRight"
        />
      </InputGroup>
    </DocPage>
  );
};

export default DatepickerPage;
