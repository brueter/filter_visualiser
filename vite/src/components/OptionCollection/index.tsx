import { useState } from "react";
import "./styles.css";
import OptionSet from "../OptionSet/index.tsx";

function OptionCollection() {
  const [gaussian, setGaussian] = useState<Gaussian>({
    sigma: 0,
    visible: true,
  });

  const [butterworth, setbutterworth] = useState<Butterworth>({
    n: 0,
    wn: 0,
    type: ["low", "high"],
    visible: true,
  });

  const [chebychev, setchebychev] = useState<Chebychev>({
    order: 0,
    rp: 0,
    wn: 0,
    type: ["low", "high"],
    visible: true,
  });

  const [golay, setGolay] = useState<Golay>({
    window: 0,
    polyorder: 0,
    visible: true,
  });

  const [kalman, setKalman] = useState<Kalman>({
    pNoise: 0,
    mNoise: 0,
    visible: true,
  });

  const [wavelet, setWavelet] = useState<Wavelet>({
    type: ["db1"],
    level: 0,
    visible: true,
  });

  const [ema, setEma] = useState<Ema>({
    span: 0,
    visible: true,
  });

  const options: { [key: string]: { [key: string]: any } } = {
    gaussian,
    butterworth,
  };

  const opt = (
    <OptionSet
      title="Gaussian"
      options={{
        sliders: [
          {
            name: "Sigma",
            min: 0,
            max: 100,
            step: 1,
            value: options.gaussian.sigma,
            handle: (e) => {
              setGaussian({
                ...gaussian,
                sigma: e.target.value,
              });
            },
          },
        ],
        dropdowns: [],
        checkboxes: [
          {
            name: "Visibility",
            value: options.gaussian.visible,
            visible: options.gaussian.visible,
            handle: (e) => {
              setGaussian({
                ...gaussian,
                visible: e.target.checked,
              });
            },
          },
        ],
        color: {
          h: 0,
          s: 100,
          l: 50,
        },
      }}
    />
  );

  return (
    <div id="options">
      {opt}
      {opt}
      {opt}
      {opt}
      {opt}
      {opt}
      {opt}
      {opt}
      {opt}
      {opt}
    </div>
  );
}

export default OptionCollection;
