import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Calendar } from '@fuji-ui/core';
import styled from 'styled-components';

const CalendarPage = props => {
  return (
    <DocPage>
      <T.H1>Calendar</T.H1>
      <T.P>A simple calendar view</T.P>
      <T.H5>Pick a date</T.H5>
      <Calendar />
      <T.H5>Range Select</T.H5>
      <Calendar rangeSelect />
    </DocPage>
  );
};

export default CalendarPage;
