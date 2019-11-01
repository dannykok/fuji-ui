import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, SingleOptionPicker, Column } from '@fuji-ui/core';
const { Option } = SingleOptionPicker;

const SingleOptionPickerPage = props => {
  return (
    <DocPage>
      <T.H1>Single-option Picker</T.H1>
      <T.P>Alternative way to select or single picking an option.</T.P>
      <Column mt="l">
        <SingleOptionPicker size="s">
          <Option value="management">Management</Option>
          <Option value="senior">Senior</Option>
          <Option value="fg">Fresh Grad</Option>
          <Option value="ug">Undergrad</Option>
        </SingleOptionPicker>
        <T.Subtitle1>Default values</T.Subtitle1>
        <SingleOptionPicker size="m" mt="m" defaultValue="senior">
          <Option value="management">Management</Option>
          <Option value="senior">Senior</Option>
          <Option value="fg">Fresh Grad</Option>
          <Option value="ug">Undergrad</Option>
        </SingleOptionPicker>
      </Column>
    </DocPage>
  );
};

export default SingleOptionPickerPage;
