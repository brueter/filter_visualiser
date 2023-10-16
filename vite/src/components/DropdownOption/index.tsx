import { useState } from "react";
import "./styles.css";

const DropdownOption = ({
  dropdown,
  title,
}: {
  dropdown: Dropdown;
  title: string;
}) => {
  const [val, setVal] = useState(0);
  return (
    <div className="dropdownContainer option">
      <label htmlFor={`${title}-${dropdown.name}-dropdown`}>
        {dropdown.name}:
      </label>
      <select
        name={dropdown.name}
        id={`${title}-${dropdown.name}-dropdown`}
        onChange={(event) => dropdown.handle(event.target.selectedIndex)}
      >
        {dropdown.options.map((value: string) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownOption;
