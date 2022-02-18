import React from 'react';
import PropTypes from 'prop-types';

const TextArea = React.forwardRef(
  (
    {
      value,
      placeholder,
      invalid,
      valid,
      disabled,
      focused,
      onChange,
      onBlur,
      onKeyPress,
      onKeyDown,
      onFocus,
      name,
      addClass,
      type,
      pattern,
      id,
      variant,
    },
    ref,
  ) => {
    const invalidClass = invalid ? 'is-danger' : '';
    const focusedClass = focused ? 'input--focused' : '';
    const variantClass = `input--${variant}`;
    return (
      <React.Fragment>
        <textarea
          ref={ref}
          className={`textarea has-fixed-size ${invalidClass} ${focusedClass} ${addClass} ${variantClass}`}
          disabled={disabled ? 'disabled' : ''}
          placeholder={placeholder}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name}
          type={type}
          pattern={pattern}
          id={id}
          valid={valid}
          rows="10"
        />
      </React.Fragment>
    );
  },
);

TextArea.propTypes = {
  value: PropTypes.string,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  pattern: PropTypes.string,
  name: PropTypes.string,
  addClass: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  tooltip: PropTypes.string,
};

TextArea.defaultProps = {
  value: '',
  variant: 'basic',
  pattern: '.*',
  placeholder: '',
  invalid: false,
  valid: null,
  disabled: false,
  focused: false,
  onChange: null,
  onKeyPress: null,
  onKeyDown: null,
  onFocus: null,
  onBlur: null,
  name: '',
  addClass: '',
  id: '',
  type: 'text',
  tooltip: '',
};

export default TextArea;