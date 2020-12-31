import React, { useEffect, useState } from "react";
import "./styles.css";

interface ISelectProps {
  name: string;
  title: string;
  options: Array<{ name: string; value: string }>;
  onChange: (filter: string, selection: string[]) => void;
}

const Select = ({ name, title, options, onChange }: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState<Array<string>>([]);

  const clickHandler = (value: string) => {
    let newSelection: string[];
    if (selection.includes(value)) {
      newSelection = selection.filter((v) => v !== value);
    } else {
      newSelection = [...selection, value];
    }
    setSelection(newSelection);
    onChange(name, newSelection);
  };

  return (
    <div className="select-container">
      <div
        className={`value-container${isOpen ? "-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <i className={`ri-arrow-drop-${isOpen ? "up" : "down"}-line`} />
      </div>

      {isOpen && (
        <div className="options-container">
          {options.map(({ name, value }, i) => (
            <div
              key={i}
              className="option-container"
              onClick={() => clickHandler(value)}
            >
              <span>
                {name}
                {selection.includes(value) && <i className="ri-check-line"></i>}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
