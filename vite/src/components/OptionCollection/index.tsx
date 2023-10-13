import { useState } from "react";
import "./styles.css";
import OptionSet from "../OptionSet/index.tsx";
import "./types.ts";

function OptionCollection() {
  const [gaussian, setGaussian] = useState<Gaussian>({
    sigma: 0,
    visible: true,
  });

  const [butterworth, setButterworth] = useState<Butterworth>({
    n: 0,
    wn: 0,
    types: ["low", "high"],
    selected: 0,
    visible: true,
  });

  const [chebychev, setChebychev] = useState<Chebychev>({
    order: 0,
    rp: 0,
    wn: 0,
    types: ["low", "high"],
    selected: 0,
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
    types: ["db1"],
    selected: 0,
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
    chebychev,
    golay,
    kalman,
    wavelet,
    ema,
  };

  const gaussianOptions = (
    <OptionSet
      title="Gaussian"
      options={{
        sliders: [
          {
            title: "Gaussian",
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
        color: {
          h: 0,
          s: 100,
          l: 50,
        },
      }}
    />
  );

  const butterworthOptions = (
    <OptionSet
      title="Butterworth"
      options={{
        sliders: [
          {
            title: "Butterworth",
            name: "N",
            min: 0,
            max: 100,
            step: 1,
            value: options.butterworth.n,
            handle: (e) => {
              setButterworth({
                ...butterworth,
                n: e.target.value,
              });
            },
          },
          {
            title: "Butterworth",
            name: "Wn",
            min: 0,
            max: 100,
            step: 1,
            value: options.butterworth.wn,
            handle: (e) => {
              setButterworth({
                ...butterworth,
                wn: e.target.value,
              });
            },
          },
        ],
        dropdowns: [
          {
            title: "Butterworth",
            name: "Type",
            options: options.butterworth.types,
            value: options.butterworth.selected,
            handle: (e) => {
              setButterworth({
                ...butterworth,
                selected: e.target.selectedIndex,
              });
            },
          },
        ],
        color: {
          h: 28,
          s: 100,
          l: 50,
        },
      }}
    />
  );

  const chebychevOptions = (
    <OptionSet
      title="Chebychev"
      options={{
        sliders: [
          {
            title: "Chebychev",
            name: "Order",
            min: 0,
            max: 100,
            step: 1,
            value: options.chebychev.order,
            handle: (e) => {
              setChebychev({
                ...chebychev,
                order: e.target.value,
              });
            },
          },
        ],
        dropdowns: [
          {
            title: "Chebychev",
            name: "Type",
            options: options.chebychev.types,
            value: options.chebychev.selected,
            handle: (e) => {
              setChebychev({
                ...chebychev,
                selected: e.target.selectedIndex,
              });
            },
          },
        ],
        color: {
          h: 58,
          s: 100,
          l: 50,
        },
      }}
    />
  );

  const golayOptions = (
    <OptionSet
      title="Golay"
      options={{
        sliders: [
          {
            title: "Golay",
            name: "Window",
            min: 0,
            max: 100,
            step: 1,
            value: options.golay.window,
            handle: (e) => {
              setGolay({
                ...golay,
                window: e.target.value,
              });
            },
          },
          {
            title: "Golay",
            name: "Polyorder",
            min: 0,
            max: 100,
            step: 1,
            value: options.golay.polyorder,
            handle: (e) => {
              setGolay({
                ...golay,
                polyorder: e.target.value,
              });
            },
          },
        ],
        color: {
          h: 139,
          s: 100,
          l: 50,
        },
      }}
    />
  );

  const kalmanOptions = (
    <OptionSet
      title="Kalman"
      options={{
        sliders: [
          {
            title: "Kalman",
            name: "pNoise",
            min: 0,
            max: 100,
            step: 1,
            value: options.kalman.pNoise,
            handle: (e) => {
              setKalman({
                ...kalman,
                pNoise: e.target.value,
              });
            },
          },
          {
            title: "Kalman",
            name: "mNoise",
            min: 0,
            max: 100,
            step: 1,
            value: options.kalman.mNoise,
            handle: (e) => {
              setKalman({
                ...kalman,
                mNoise: e.target.value,
              });
            },
          },
        ],
        color: {
          h: 178,
          s: 100,
          l: 50,
        },
      }}
    />
  );

  const waveletOptions = (
    <OptionSet
      title="Wavelet"
      options={{
        sliders: [
          {
            title: "Wavelet",
            name: "Level",
            min: 0,
            max: 100,
            step: 1,
            value: options.wavelet.level,
            handle: (e) => {
              setWavelet({
                ...wavelet,
                level: e.target.value,
              });
            },
          },
        ],
        dropdowns: [
          {
            title: "Wavelet",
            name: "Type",
            options: options.wavelet.types,
            value: options.wavelet.selected,
            handle: (e) => {
              setWavelet({
                ...wavelet,
                selected: e.target.selectedIndex,
              });
            },
          },
        ],
        color: {
          h: 236,
          s: 100,
          l: 50,
        },
      }}
    />
  );

  const emaOptions = (
    <OptionSet
      title="EMA"
      options={{
        sliders: [
          {
            title: "EMA",
            name: "Span",
            min: 0,
            max: 100,
            step: 1,
            value: options.ema.span,
            handle: (e) => {
              setEma({
                ...ema,
                span: e.target.value,
              });
            },
          },
        ],
        color: {
          h: 284,
          s: 100,
          l: 50,
        },
      }}
    />
  );

  return (
    <div id="options">
      {gaussianOptions}
      {butterworthOptions}
      {chebychevOptions}
      {golayOptions}
      {kalmanOptions}
      {waveletOptions}
      {emaOptions}
    </div>
  );
}

export default OptionCollection;
