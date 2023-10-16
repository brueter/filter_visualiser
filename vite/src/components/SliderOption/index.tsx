import { useEffect, useState } from "react";
import "./styles.css";

const SliderOption = ({
  slider,
  title,
  color,
}: {
  slider: Slider;
  title: string;
  color: HSL;
}) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      slider.handle(val);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [val]);

  const handleTextInputKeyPress = (event: any) => {
    if (event.key === "Enter") {
      slider.handle(val);
    }
  };
  return (
    <div key={slider.name} className="sliderContainer option">
      <label htmlFor={`${title}-${slider.name}-slider`}>{slider.name}:</label>
      <input
        className="slider"
        type="range"
        id={`${title}-${slider.name}-slider`}
        name={slider.name}
        min={slider.min ?? 0}
        max={slider.max ?? 100}
        value={val ?? 0}
        step={slider.step ?? 1}
        onChange={(event) => setVal(event.target.valueAsNumber)}
        onMouseUp={(event) => slider.handle(event.currentTarget.value)}
        style={{
          accentColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)`,
        }}
      />
      <input
        aria-label={`${title}-${slider.name}-textInput`}
        type="number"
        value={val ?? 0}
        step={slider.step ?? 1}
        onChange={(event) => {
          setVal(parseInt(event.target.value) || 0);
        }}
        onKeyPress={handleTextInputKeyPress}
        onBlur={() => slider.handle(val)}
      />
    </div>
  );
};

export default SliderOption;
