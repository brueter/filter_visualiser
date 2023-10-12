const OptionSet = ({ title, options }: { title: string, options?: Option }) => {
  return (
    <>
        <div className="OptionCategory">
            <div className="option">
                <span>{title}</span>
            </div>
            <div className="option">
                {options?.sliders?.map((option: any) => (
                <div key={option.name}>
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
                    />
                    <span>{option.value}</span>
                </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default OptionSet;
