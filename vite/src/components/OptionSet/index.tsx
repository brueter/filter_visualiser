import { useState } from "react";
import "./styles.css";
import SliderOption from "../SliderOption";
import DropdownOption from "../DropdownOption";

const OptionSet = ({ options }: { options: Option }) => {
  return (
    <>
      <div
        className="optionCategory"
        style={{
          backgroundColor: `hsl(${options.color.h}, ${options.color.s}%, 90%)`,
          border: `1px hsl(${options.color.h}, ${options.color.s}%, 50%) solid`,
        }}
      >
        <div className="option">
          <span>{options.title}</span>
        </div>
        {options.sliders?.map((s: Slider) => (
          <SliderOption
            key={`${options.title}-${s.name}`}
            slider={s}
            title={options.title}
            color={options.color}
          />
        ))}
        {options.dropdowns?.map((d: Dropdown) => (
          <DropdownOption
            key={`${options.title}-${d.name}`}
            dropdown={d}
            title={options.title}
          />
        ))}
      </div>
    </>
  );
};

export default OptionSet;
