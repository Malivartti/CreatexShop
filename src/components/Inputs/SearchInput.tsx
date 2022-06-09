import React, { useState } from "react";
import "./index.sass";
import { ReactComponent as SearchBtn } from "../../img/icons/Basic/search.svg";

interface SearchInputProps {
  placeholder: string;
  sendValue: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  sendValue,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendValue(value);
  };

  return (
    <form className="input-wrapper" onSubmit={handleSubmit}>
      <input
        className="input-reset input input-withbtn"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <button className="btn-reset input-btn" type="submit">
        <SearchBtn width="100%" height="100%" />
      </button>
    </form>
  );
};

export default SearchInput;
