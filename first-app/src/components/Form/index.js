import { useState, useEffect, useRef } from "react";
import "./formstyle.sass";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const textField = useRef();

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  useEffect(() => {
    textField.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form_style">
      <TextField
        className="myTxt"
        value={value}
        onChange={handleChangeValue}
        inputRef={textField}
      />
      <Button type="submit" className="Button" variant="contained">
        Send
      </Button>
    </form>
  );
};
