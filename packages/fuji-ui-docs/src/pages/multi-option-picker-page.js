import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, MultiOptionPicker, Column } from '@fuji-ui/core';
const { Option } = MultiOptionPicker;

const MultiOptionPickerPage = props => {
  return (
    <DocPage>
      <T.H1>Multi-option Picker</T.H1>
      <T.P>Picking multiple tag-like options.</T.P>
      <Column mt="l">
        <MultiOptionPicker size="s">
          <Option value="sun">Sun</Option>
          <Option value="mon">Mon</Option>
          <Option value="tue">Tue</Option>
          <Option value="wed">Wed</Option>
          <Option value="thu">Thu</Option>
          <Option value="fri">Fri</Option>
          <Option value="sat">Sat</Option>
        </MultiOptionPicker>
        <T.Subtitle1>Default value</T.Subtitle1>
        <MultiOptionPicker size="m" mt="m" defaultValue={['sun', 'mon']}>
          <Option value="sun">Sun</Option>
          <Option value="mon">Mon</Option>
          <Option value="tue">Tue</Option>
          <Option value="wed">Wed</Option>
          <Option value="thu">Thu</Option>
          <Option value="fri">Fri</Option>
          <Option value="sat">Sat</Option>
        </MultiOptionPicker>
        <T.Subtitle1>With maximum limit</T.Subtitle1>
        <MultiOptionPicker size="m" mt="m" maxLimit={2}>
          <Option value="badminton">Badminton</Option>
          <Option value="basketball">Basketball</Option>
          <Option value="football">Football</Option>
          <Option value="swimming">Swimming</Option>
          <Option value="baseball">Baseball</Option>
          <Option value="tennis">Tennis</Option>
        </MultiOptionPicker>
      </Column>
    </DocPage>
  );
};

export default MultiOptionPickerPage;
