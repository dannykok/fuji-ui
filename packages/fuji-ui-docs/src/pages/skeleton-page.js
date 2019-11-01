import React, { useState } from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Box,
  Skeletonizer,
  SingleOptionPicker,
  TextInput,
  InputGroup,
  Datepicker,
  Code,
  CodeBlock,
} from '@fuji-ui/core';

const Toggle = onSelect => {
  return (
    <SingleOptionPicker
      display="inline-block"
      size="s"
      defaultValue={false}
      onChange={v => onSelect(v)}
    >
      <SingleOptionPicker.Option value={false}>
        Loading
      </SingleOptionPicker.Option>
      <SingleOptionPicker.Option value={true}>
        Show Content
      </SingleOptionPicker.Option>
    </SingleOptionPicker>
  );
};

const SkeletonPage = props => {
  const [contentReady, setContentReady] = useState(false);
  const [formReady, setFormReady] = useState(false);
  console.log('contentReady', contentReady);
  return (
    <DocPage>
      <T.H1>Skeleton</T.H1>
      <T.P>
        Display animated shapes to preview content before it's actually loaded.
        When using <Code>&lt;Skeletonizer&gt;</Code>, the underlying children
        will be travsered, and components will be replaced by{' '}
        <Code>component.skeleton</Code> whenever it has been defined.
      </T.P>
      <Box mt="l">
        {Toggle(setContentReady)}
        <Skeletonizer ready={contentReady}>
          <Box mt="m">
            <T.H1>Hello Skelies!</T.H1>
            <T.P>Skelies is much better than spin-ies! I love Skelies!</T.P>
            <T.Span>Skelies here and there</T.Span>
          </Box>
        </Skeletonizer>
        <Box mt="m">
          <T.Subtitle1>Sample Form</T.Subtitle1>
          {Toggle(setFormReady)}
          <Skeletonizer ready={formReady}>
            <Box mt="s">
              <InputGroup direction="column">
                <TextInput defaultValues="Tom Phil" />
                <Datepicker />
              </InputGroup>
            </Box>
          </Skeletonizer>
        </Box>
      </Box>
      <T.H2>Skeletonizer</T.H2>
      <T.P>
        <Code>&lt;Skeletonizer&gt;</Code> make use of{' '}
        <Code>React.Children.map</Code> to traverse the component tree. The
        function simply find the children of any component by how the JSX is
        defined. This means it couldn't look up any children of component which
        were encapsulated inside the implementation. Consider the following
        example:
      </T.P>
      <CodeBlock>
        {`
<Skeletonizer>
    <MyWrapper>
        <TextInput />
    </MyWrapper>
    <MyWrapper>
        <MyTextInput />
    </MyWrapper>        
</Skeletonizer>
`}
      </CodeBlock>
      <T.P>
        The above Skeletonizer will traverse the children tree and correctly
        replace <Code>TextInput</Code> with TextInput.skeleton. However, any
        underlying <Code>TextInput</Code> component encapsulated within{' '}
        <Code>MyTextInput</Code> could not be accessed, thus it would not be
        skeletonized. You'll need to define <Code>MyTextInput.skeleton</Code> in
        order to make it work.
      </T.P>
    </DocPage>
  );
};

export default SkeletonPage;
