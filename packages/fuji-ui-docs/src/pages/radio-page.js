import React, { useRef, useState } from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Flex,
  InputGroup,
  Radio,
  Column,
  Code,
  Span,
} from '@fuji-ui/core';

const RadioPage = props => {
  const [checked, setChecked] = useState(false);

  return (
    <DocPage>
      <T.H1>Radio</T.H1>
      <T.P>Radio input element.</T.P>

      <T.Subtitle1>Controlled vs Uncontrolled</T.Subtitle1>
      <T.P>
        Radio (like Checkbox) by default is an uncontrolled component, wrapping
        a native input element with type="radio". If you specify{' '}
        <Code>checked</Code> props, however, the component will be controlled
        and rely on external state to be manipulated. Normally you don't want to
        switch between controlled and uncontrolled style in the component
        lifecycle, so it's suggested to decide the usage of the component and
        stick with it.
      </T.P>

      <Column mt="l" display="inline-flex">
        <Radio.Group name="education" size="s" direction="column">
          <Radio>University</Radio>
          <Radio>High School</Radio>
          <Radio>Primary School</Radio>
          <Radio>Kindergarten</Radio>
        </Radio.Group>

        <Radio.Group name="fruit" defaultValue="1" size="s" direction="column">
          <Radio value="1">Apple</Radio>
          <Radio value="2">Orange</Radio>
          <Radio value="3" disabled>
            Mango
          </Radio>
        </Radio.Group>

        <Radio.Group name="answer" size="l" direction="column">
          <Radio>Answer A</Radio>
          <Radio>Answer B</Radio>
          <Radio>None of the above</Radio>
        </Radio.Group>
      </Column>
      <Column mt="l" display="inline-flex">
        <Radio
          checked={checked}
          onChange={(v, e) => {
            setChecked(v);
          }}
        >
          Controlled example (state: {checked ? 'checked' : 'unchecked'})
        </Radio>
      </Column>
    </DocPage>
  );
};

export default RadioPage;
