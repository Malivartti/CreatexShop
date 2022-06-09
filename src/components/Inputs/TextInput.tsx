import React from "react";
import "./index.sass";

interface TextInputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  setValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="input-reset input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextInput;
