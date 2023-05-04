import { ChangeEventHandler, SyntheticEvent } from "react";
import Form from "react-bootstrap/Form";

import "./Search.css";

interface Props {
  onChange: (nextValue: string) => void;
  searchPhrase: string;
}

export const Search = ({ onChange, searchPhrase }: Props) => {
  const handleFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();

    onChange(event.currentTarget.value);
  };

  const handleReset = () => {
    onChange("");
  };

  return (
    <div className="Search">
      <Form onSubmit={handleFormSubmit}>
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
