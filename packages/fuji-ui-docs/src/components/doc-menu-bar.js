import React from 'react';
import { Link } from 'react-router-dom';
import { Typography as T, MenuBar, List } from '@fuji-ui/core';

const { Item } = List;

const DocMenuBar = props => {
  return (
    <MenuBar pl="s" pr="s">
      <List header={<T.Subtitle1>Basic</T.Subtitle1>}>
        <Item>
          <Link to="/docs/getting-started">Getting Started</Link>
        </Item>
        <Item>
          <Link to="/docs/colors">Color</Link>
        </Item>
        <Item>
          <Link to="/docs/typography">Typography</Link>
        </Item>
      </List>
      <List header={<T.Subtitle1>Components</T.Subtitle1>}>
        <Item>
          <Link to="/docs/buttons">Button</Link>
        </Item>
        <Item>
          <Link to="/docs/input">Input</Link>
        </Item>
        <Item>
          <Link to="/docs/input-group">InputGroup</Link>
        </Item>
        <Item>
          <Link to="/docs/checkbox">Checkbox</Link>
        </Item>
        <Item>
          <Link to="/docs/radio">Radio</Link>
        </Item>
        <Item>
          <Link to="/docs/dropdown">Dropdown</Link>
        </Item>
        <Item>
          <Link to="/docs/select">Select</Link>
        </Item>
        <Item>
          <Link to="/docs/images">Image</Link>
        </Item>
        <Item>
          <Link to="/docs/avatar">Avatar</Link>
        </Item>
        <Item>
          <Link to="/docs/notification">Notification</Link>
        </Item>
        <Item>
          <Link to="/docs/calendar">Calendar</Link>
        </Item>
        <Item>
          <Link to="/docs/datepicker">Datepicker</Link>
        </Item>
        <Item>
          <Link to="/docs/timepicker">Timepicker</Link>
        </Item>
        <Item>
          <Link to="/docs/code-block">Code Block</Link>
        </Item>
        <Item>
          <Link to="/docs/note-block">Note Block</Link>
        </Item>
        <Item>
          <Link to="/docs/popover">Popover</Link>
        </Item>
        <Item>
          <Link to="/docs/table">Table</Link>
        </Item>
        <Item>
          <Link to="/docs/tag">Tag</Link>
        </Item>
        <Item>
          <Link to="/docs/breadcrumb">Breadcrumb</Link>
        </Item>
        <Item>
          <Link to="/docs/single-option-picker">Single-option Picker</Link>
        </Item>
        <Item>
          <Link to="/docs/multi-option-picker">Multi-option Picker</Link>
        </Item>
        <Item>
          <Link to="/docs/tree">Tree</Link>
        </Item>
        <Item>
          <Link to="/docs/skeleton">Skeleton</Link>
        </Item>
        <Item>
          <Link to="/docs/form">Form</Link>
        </Item>
        <Item>
          <Link to="/docs/separator">Separator</Link>
        </Item>
        <Item>
          <Link to="/docs/modal">Modal</Link>
        </Item>
        <Item>
          <Link to="/docs/dropzone">Dropzone</Link>
        </Item>
        <Item>
          <Link to="/docs/spinners">Spinners</Link>
        </Item>
        <Item>
          <Link to="/docs/number-badge">Number Badges</Link>
        </Item>
      </List>
      <List header={<T.Subtitle1>Hooks</T.Subtitle1>}>
        <Item>
          <Link to="/docs/use-props-filter">usePropsFilter</Link>
        </Item>
        <Item>
          <Link to="/docs/use-color-palette">useColorPalette</Link>
        </Item>
        <Item>
          <Link to="/docs/use-service-worker">useServiceWorker</Link>
        </Item>
      </List>
    </MenuBar>
  );
};

export default DocMenuBar;
