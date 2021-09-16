import React from "react";
import cx from "classnames";

const Input = ({
  className,
  label,
  inputType,
  type,
  placeholder,
  id,
  name,
  value,
  state,
  setState,
  labelClass,
}) => {
  let inputName, inputValue;
  const onChangeHandler = (event) => {
    inputName = event.target.name;
    inputValue = event.target.value;
    setState({ ...state, [inputName]: inputValue });
  };
  const onRadioChange = (event) => {
    setState({ ...state, selected: event.target.value });
  };

  const StylesForInput = cx(
    {
      "text-base px-5 py-3 border-2 border-gray-300 rounded-xl text-gray-400	font-medium resize-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent":
        type === "text" || inputType === "textarea",
      "w-5 h-5": type === "radio" && inputType === "input",
    },
    className
  );

  const StylesForLabel = cx(
    {
      "text-base mb-2 font-medium font-sample":
        type === "text" || inputType === "textarea",
      "text-base ml-3 font-medium my-auto":
        type === "radio" && inputType === "input",
    },
    labelClass
  );

  const StylesForInputGroup = cx({
    "flex flex-col": type === "text",
    "flex w-min flex-row flex-row-reverse items-center": type === "radio",
  });

  return (
    <div className={StylesForInputGroup}>
      {label ? (
        <label HtmlFor="input" className={StylesForLabel}>
          {label}
        </label>
      ) : null}
      {inputType === "input" ? (
        <input
          className={StylesForInput}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={type === "radio" ? onRadioChange : onChangeHandler}
          name={name}
          id={id}
        />
      ) : (
        <textarea
          className={StylesForInput}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChangeHandler}
          name={name}
          rows="5"
          id={id}
        />
      )}
    </div>
  );
};

export default Input;
