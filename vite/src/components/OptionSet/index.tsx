import "./styles.css";

const OptionSet = ({ title, options }: { title: string; options: Option }) => {
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
          <span>{title}</span>
        </div>
        {options.sliders?.map((option: Slider) => (
          <div key={option.name} className="sliderContainer option">
            <label htmlFor={`${option.title}-${option.name}`}>
              {option.name}:
            </label>
            <input
              className="slider"
              type="range"
              id={`${option.title}-${option.name}`}
              name={option.name}
              min={option.min ?? 0}
              max={option.max ?? 0}
              value={option.value ?? 0}
              step={option.step ?? 0}
              onChange={(event) => option.handle(event)}
              style={{
                accentColor: `hsl(${options.color.h}, ${options.color.s}%, ${options.color.l}%)`,
              }}
            />
            <input
              aria-label={`${option.title}-${option.name}-input`}
              type="text"
              value={option.value ?? 0}
              onChange={(event) => option.handle(event)}
            />
          </div>
        ))}
        {options.dropdowns?.map((option: Dropdown) => (
          <div key={option.name} className="dropdownContainer option">
            <label htmlFor={`${option.title}-${option.name}`}>
              {option.name}:
            </label>
            <select
              name={option.name}
              id={`${option.title}-${option.name}`}
              onChange={(event) => option.handle(event)}
            >
              {option.options.map((value: string) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </>
  );
};

export default OptionSet;
