import React, { useState } from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Box, InputGroup, Select } from '@fuji-ui/core';

const { Option } = Select;

const SelectPage = props => {
  const [region, setRegion] = useState(false);
  const [time, setTime] = useState(false);
  const [value, setValue] = useState('banana');
  return (
    <DocPage>
      <T.H1>Select</T.H1>
      <T.P>Element served as a picker or selection input.</T.P>
      <InputGroup size="s" mt="l">
        <Select
          placeholder="Choose region"
          onChange={(_, { value, label }) => setRegion({ value, label })}
        >
          <Option value="hk">Hong Kong</Option>
          <Option value="kln">Kowloon</Option>
          <Option value="nt">New Territories</Option>
        </Select>
        <Select
          placeholder="Time"
          onChange={(_, { value, label }) => setTime({ value, label })}
        >
          <Option value="am">Morning (AM)</Option>
          <Option value="pm">Evening (PM)</Option>
        </Select>
      </InputGroup>
      <T.Subtitle2>
        {!!region && (
          <span>
            You've chosen the destination {region.label}({region.value})
          </span>
        )}
        {!!time && <span> time in the {time.label}</span>}
      </T.Subtitle2>
      <Box mt="l">
        <T.Subtitle1>Different Sizes</T.Subtitle1>
        <InputGroup size="m">
          <Select
            placeholder="Choose region"
            defaultValue={['hk']}
            onChange={() => {}}
          >
            <Option value="hk">Hong Kong</Option>
            <Option value="kln">Kowloon</Option>
            <Option value="nt">New Territories</Option>
          </Select>
        </InputGroup>
        <InputGroup size="l">
          <Select placeholder="Choose region" onChange={() => {}}>
            <Option value="hk">Hong Kong</Option>
            <Option value="kln">Kowloon</Option>
            <Option value="nt">New Territories</Option>
          </Select>
        </InputGroup>
      </Box>
      <Box mt="l">
        <T.Subtitle1>States</T.Subtitle1>
        <Select
          placeholder="Disabled"
          defaultValue={['hk']}
          disabled
          onChange={() => {}}
        >
          <Option value="hk">Hong Kong</Option>
          <Option value="kln">Kowloon</Option>
          <Option value="nt">New Territories</Option>
        </Select>
        <Select
          placeholder="Choose region"
          defaultValue={['hk']}
          error
          onChange={() => {}}
        >
          <Option value="hk">Hong Kong</Option>
          <Option value="kln">Kowloon</Option>
          <Option value="nt">New Territories</Option>
        </Select>
      </Box>
      <Box mt="l">
        <T.Subtitle1>Select multiple values</T.Subtitle1>
        <Select
          width="360px"
          placeholder="Select any"
          multiple
          onChange={(v, vr) => console.log('selected values', v, vr)}
        >
          <Option value="apple">Apple</Option>
          <Option value="orange">Orange</Option>
          <Option value="banana">Banana</Option>
          <Option value="papaya">Papaya</Option>
          <Option value="grape">Grape</Option>
          <Option value="mango">Mango</Option>
        </Select>
      </Box>
      <Box mt="l">
        <T.Subtitle1>Disable some options</T.Subtitle1>
        <Select
          width="360px"
          placeholder="Select any"
          multiple
          onChange={(v, vr) => console.log('selected values', v, vr)}
        >
          <Option value="apple">Apple</Option>
          <Option value="orange">Orange</Option>
          <Option disabled value="banana">
            Banana
          </Option>
          <Option value="papaya">Papaya</Option>
          <Option disabled value="grape">
            Grape
          </Option>
          <Option value="mango">Mango</Option>
        </Select>
      </Box>
      <Box mt="l">
        <T.Subtitle1>Controlled style using value</T.Subtitle1>
        <InputGroup>
          <Select
            placeholder="Select"
            value={value}
            onChange={v => {
              setValue(v);
            }}
            popupWidth={440}
          >
            <Option value="apple">Apple</Option>
            <Option value="orange">Orange</Option>
            <Option value="banana">Banana</Option>
            <Option value="papaya">Papaya</Option>
            <Option value="grape">Grape</Option>
            <Option value="mango">Mango</Option>
          </Select>
        </InputGroup>
      </Box>
      <Box mt="l">
        <T.Subtitle1>Always show options</T.Subtitle1>
        <Box border="light" height="300px" p="s">
          <Select
            width="100%"
            popupMaxHeight="200px"
            placeholder="Select Components"
            multiple
            alwaysShowOptions
            hideCaret
          >
            <Option value="windows">Windows</Option>
            <Option value="doors">Doors</Option>
            <Option value="walls">Walls</Option>
            <Option value="lights">Lights</Option>
          </Select>
        </Box>
      </Box>
    </DocPage>
  );
};

export default SelectPage;
