import { useState } from "react";
import "./formstyle.sass";
export const Form = ({ onSubmit }, { name }) => {
  const [value, setValue] = useState("");

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="txt"
        value={value}
        onChange={handleChangeValue}
        className="form__input"
      />
      <input type="submit" value={name} className="form__submit"></input>
    </form>
  );
};
