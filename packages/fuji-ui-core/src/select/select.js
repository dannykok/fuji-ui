import React, { useState, useRef, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../box';
import { Popover } from '../popover';
import { List } from '../list';
import { Skeleton } from '../skeleton';
import { useMouseEvent, usePropsFilter } from '../hooks';
// import { EventListener } from '../event-listener';

import { inputSizes } from '@fuji-ui/theme';
import SelectionBox from './selection-box';
import SelectedValue from './selected-value';
import MultipleSelectedValues from './multiple-selected-values';
import valuePropTypes from './value-prop-types';
import useDeepCompareEffect from 'use-deep-compare-effect';

const makeArray = value =>
  value ? (Array.isArray(value) ? value : [value]) : [];

const getValue = child => {
  let _label = child.props.label || child.props.children;
  if (typeof _label !== 'string') _label = child.props.value;
  const _v = child.props.value;
  return { label: _label, value: _v };
};

const mapValueFromChildren = (values = [], children) => {
  return Children.toArray(children).reduce((mv, c) => {
    if (React.isValidElement(c)) {
      if (values.indexOf(c.props.value) >= 0) {
        const { label, value } = getValue(c);
        return [...mv, { label, value }];
      } else if (c.props.children) {
        return [...mv, ...mapValueFromChildren(values, c.props.children)];
      } else {
        return mv;
      }
    }
    return mv;
  }, []);
};

const reduceOptions = (options, selectedValues, filterText) => {
  return Children.toArray(options)
    .filter(c => {
      if (React.isValidElement(c)) {
        const { label = '', value = '' } = getValue(c);
        return (
          label.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
          value
            .toString()
            .toLowerCase()
            .indexOf(filterText.toLowerCase()) >= 0
        );
      }
      return false;
    })
    .map(c =>
      selectedValues.find(v => v.value === c.props.value)
        ? cloneElement(c, {
            selected: true,
          })
        : c,
    );
};

// this is to convert any value string => value object format
// see value-prop-types.js
const expandValues = (valueStrings, children) => {
  const arr = makeArray(valueStrings);
  if (arr.length > 0) {
    if (arr[0]?.value) return arr;
    else return mapValueFromChildren(arr, children);
  }
  return arr;
};

const Select = props => {
  const {
    hideCaret,
    placeholder,
    popupWidth,
    popupMaxHeight,
    onChange,
    anchor,
    multiple,
    size,
    disabled,
    error,
    alwaysShowOptions,
  } = props;
  const fireAt = useMouseEvent('mousedown');
  const defaultValues = expandValues(props.defaultValue, props.children);

  // state for currently selected value(s), an obj of { value : 'some-value', label : 'Label for value'}
  const [values, setValues] = useState(defaultValues);
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState('');

  // ref the selection box to get it blur after selection happens
  const selectionBoxRef = useRef(null);

  // experimental: value props to make Select work as controlled component
  useDeepCompareEffect(() => {
    const expandedValues = expandValues(props.value, props.children);
    if (props.value) setValues(expandedValues);
  }, [props.value, props.children]);

  const changeValue = (label, value) => {
    setValues([{ label, value }]);
    if (onChange) onChange(value, { label, value });
    // unfocus element
    selectionBoxRef.current.blur();
    fireAt(document.firstChild);
  };

  const addValue = (label, value) => {
    const newValues = [...values, { label, value }];
    setValues(newValues);
    if (onChange) onChange(newValues.map(v => v.value), newValues);
  };

  const removeValue = value => {
    const newValues = values.filter(v => v.value !== value);
    setValues(newValues);
    if (onChange) onChange(newValues.map(v => v.value), newValues);
  };

  const selectValue = (label, value) => {
    if (values.find(v => v.value === value) !== undefined) {
      removeValue(value);
    } else {
      addValue(label, value);
    }
  };

  const onTextChange = e => {
    const text = e.target.value;
    setText(text);
  };

  const onFocus = () => {
    setOpened(true && !disabled);
  };

  const onBlur = () => {
    setOpened(false);
  };

  // determine the function to handle selection
  const handleSelect = multiple ? selectValue : changeValue;

  // determine content space of Popover
  // const contentSpace = multiple ? 0 : 's';
  const contentSpace = 0;

  // get filtered options
  const _options = reduceOptions(props.children, values, text);

  const boxProps = usePropsFilter(props, Box.propTypes);
  return (
    <Popover
      {...boxProps}
      contentSpace={contentSpace}
      anchor={anchor}
      forcePopped={alwaysShowOptions}
      disabled={disabled}
      popupWidth={popupWidth}
      menu={
        <OptionMenu popupMaxHeight={popupMaxHeight}>
          {_options.length > 0 ? (
            _options.map(child => {
              if (React.isValidElement(child)) {
                return cloneElement(child, {
                  onSelect: handleSelect,
                  checkable: multiple,
                });
              } else return child;
            })
          ) : (
            <List.Item p="s" color="#CCCCCC">
              No results
            </List.Item>
          )}
        </OptionMenu>
      }
    >
      <SelectionBox
        ref={selectionBoxRef}
        onFocus={onFocus}
        onBlur={onBlur}
        opened={opened}
        hideCaret={hideCaret}
        multiple={multiple}
        disabled={disabled}
        error={error}
      >
        {multiple ? (
          <MultipleSelectedValues
            size={size}
            values={values}
            placeholder={placeholder}
            onDeleteValue={removeValue}
            text={text}
            onTextChange={onTextChange}
          />
        ) : (
          <SelectedValue value={values?.[0]} placeholder={placeholder} />
        )}
      </SelectionBox>
      {/* {// make EventListener presence in the tree when it's opened
      opened && <EventListener event="keydown" handler={handleKeydown} />} */}
      <div />
    </Popover>
  );
};

const OptionMenu = props => {
  return (
    <Box maxHeight={props.popupMaxHeight} overflowY="auto">
      <List>{props.children}</List>
    </Box>
  );
};

const OptionMenuItem = ({
  label,
  value,
  selected,
  onSelect,
  checkable,
  disabled,
  children,
}) => {
  // if label is not specified, use children as label. If children is not a string, use the value instead.
  const _label = label || (typeof children === 'string' ? children : value);

  const CustomListItem = checkable ? List.CheckableItem : List.SelectableItem;
  return (
    <CustomListItem
      onClick={() => {
        if (!disabled) onSelect(_label, value);
      }}
      selected={selected}
      disabled={disabled}
    >
      {children}
    </CustomListItem>
  );
};

Select.displayName = 'Select';
Select.skeleton = props => <Skeleton width="10rem" {...props} />; //eslint-disable-line

OptionMenu.displayName = 'OptionMenu';
OptionMenuItem.displayName = 'OptionMenuItem';

const allowedValueInputFormat = PropTypes.oneOfType([
  PropTypes.oneOfType([PropTypes.string, PropTypes.number, valuePropTypes]),
  PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, valuePropTypes]),
  ),
]);

Select.propTypes = {
  ...inputSizes.propTypes,
  ...Box.propTypes,
  defaultValue: allowedValueInputFormat,
  value: allowedValueInputFormat,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  hideCaret: PropTypes.bool,
  anchor: PropTypes.oneOf([
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight',
  ]).isRequired,
  popupWidth: Box.propTypes.maxWidth,
  popupMaxHeight: Box.propTypes.maxHeight,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  alwaysShowOptions: PropTypes.bool,
};

Select.defaultProps = {
  anchor: 'bottomRight',
  placeholder: 'Select',
  size: 'm',
  popupWidth: '100%',
  popupMaxHeight: '240px',
};

OptionMenu.propTypes = {
  children: PropTypes.node.isRequired,
  popupMaxHeight: Box.propTypes.maxHeight,
};

OptionMenuItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  children: PropTypes.node.isRequired,
  checkable: PropTypes.bool,
  disabled: PropTypes.bool,
};

Select.Option = OptionMenuItem;

export { Select };
