import { ChangeEventHandler, useState } from "react";
import Form from "react-bootstrap/Form";

import "./Search.css";

export const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();

    setSearchPhrase(event.currentTarget.value);
  };

  const handleReset = () => {
    setSearchPhrase("");
  };

  return (
    <div className="Search">
      <Form>
        <Form.Control
          aria-label="Search"
          className="Search__input"
          onChange={handleChange}
          onReset={handleReset}
          placeholder="Search"
          type="search"
          value={searchPhrase}
        />
      </Form>
    </div>
  );
};
