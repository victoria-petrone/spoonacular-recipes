import React, { useEffect, useState } from "react";
import "./styles.css";

interface ISelectProps {
  name: string;
  title: string;
  options: Array<{ name: string; value: string }>;
  onChange: (filter: string, selection: string[]) => void;
  isOpen: boolean;
  setIsOpen: (t: boolean) => void;
}

const Select = ({
  name,
  title,
  options,
  onChange,
  isOpen,
  setIsOpen,
}: ISelectProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState<Array<string>>([]);

  const clickHandler = (value: string) => {
    if (selection.includes(value)) {
      const newSelection = selection.filter((v) => v !== value);
      setSelection(newSelection);
    } else {
      setSelection([...selection, value]);
    }
  };

  useEffect(() => {
    onChange(name, selection);
  }, [selection]);

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
