import "./styles.css";

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
        {options.sliders?.map((option: Slider) => (
          <div key={option.name} className="sliderContainer option">
            <label htmlFor={`${options.title}-${option.name}-slider`}>
              {option.name}:
            </label>
            <input
              className="slider"
              type="range"
              id={`${options.title}-${option.name}-slider`}
              name={option.name}
              min={option.min ?? 0}
              max={option.max ?? 100}
              value={option.value ?? 0}
              step={option.step ?? 1}
              onChange={(event) => option.handle(event.target.value)}
              style={{
                accentColor: `hsl(${options.color.h}, ${options.color.s}%, ${options.color.l}%)`,
              }}
            />
            <input
              aria-label={`${options.title}-${option.name}-textInput`}
              type="text"
              value={option.value ?? 0}
              onChange={(event) => option.handle(event.target.value)}
            />
          </div>
        ))}
        {options.dropdowns?.map((option: Dropdown) => (
          <div key={option.name} className="dropdownContainer option">
            <label htmlFor={`${options.title}-${option.name}-dropdown`}>
              {option.name}:
            </label>
            <select
              name={option.name}
              id={`${options.title}-${option.name}-dropdown`}
              onChange={(event) => option.handle(event.target.selectedIndex)}
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
