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
        <div className="option">
          {options.sliders?.map((option: any) => (
            <div key={option.name} className="sliderContainer">
              <label htmlFor={option.name}>{option.name}:</label>
              <input
                type="range"
                id={option.name}
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
                type="text"
                value={option.value ?? 0}
                onChange={(event) => option.handle(event)}
              />
            </div>
          ))}
        </div>
        <div className="option">
          {options.checkboxes?.map((option: any) => (
            <div key={option.name} className="checkboxContainer">
              <label htmlFor={option.name}>{option.name}:</label>
              <input
                type="checkbox"
                id={option.name}
                name={option.name}
                checked={option.visible ?? 0}
                onChange={(event) => {
                  option.handle(event);
                }}
                style={{
                  accentColor: `hsl(${options.color.h}, ${options.color.s}%, ${options.color.l}%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OptionSet;
