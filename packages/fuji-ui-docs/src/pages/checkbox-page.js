import React, { useRef, useState } from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Flex,
  InputGroup,
  Checkbox,
  Column,
  Code,
  Span,
} from '@fuji-ui/core';

const CheckboxPage = props => {
  const inputRef = useRef();
  const [checked, setChecked] = useState(false);

  return (
    <DocPage>
      <T.H1>Checkbox</T.H1>
      <T.P>Checkbox input element.</T.P>

      <T.Subtitle1>Controlled vs Uncontrolled</T.Subtitle1>
      <T.P>
        Checkbox by default is an uncontrolled component, wrapping a native
        input element with type="checkbox". If you specify <Code>checked</Code>{' '}
        props, however, the component will be controlled and rely on external
        state to manipulate. Normally you don't want to switch between
        controlled and uncontrolled style in the component lifecycle, so it's
        suggested to decide the usage of the component and stick with it.
      </T.P>

      <Column mt="l" display="inline-flex">
        <InputGroup size="s" direction="column">
          <Checkbox />

          <Checkbox>Go beach side</Checkbox>
          <Checkbox>Pick clothes from laundry</Checkbox>
          <Checkbox>Grocery</Checkbox>
        </InputGroup>
        <InputGroup size="s" direction="column">
          <Checkbox defaultChecked>Default checked</Checkbox>
          <Checkbox defaultChecked disabled>
            Disabled
          </Checkbox>
        </InputGroup>
        <Flex alignItems="center" p="s">
          <Checkbox ref={inputRef} size="s" />
          <Span ml="l">
            <a
              onClick={() => {
                inputRef.current.checked = true;
              }}
            >
              check it
            </a>
          </Span>
        </Flex>
        <InputGroup size="l" direction="column">
          <Checkbox>Go beach side</Checkbox>
          <Checkbox>Pick clothes from laundry</Checkbox>
          <Checkbox>Grocery</Checkbox>
        </InputGroup>
      </Column>
      <Column mt="l" display="inline-flex">
        <Checkbox checked={checked} onChange={v => setChecked(v)}>
          Controlled example (state: {checked ? 'checked' : 'unchecked'})
        </Checkbox>
      </Column>
    </DocPage>
  );
};

export default CheckboxPage;
