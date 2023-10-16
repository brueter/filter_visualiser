import "./styles.css";
import OptionSet from "../OptionSet/index.tsx";
import "./types.ts";
import {
  useOptionState,
  updateOptionState,
  resetOptionState,
} from "../../context/OptionContext.tsx";

function OptionCollection() {
  const { state, dispatch } = useOptionState();

  const gaussianOptions = (
    <OptionSet
      options={{
        title: "Gaussian",
        sliders: [
          {
            name: "Sigma",
            value: state.gaussian.sigma,
            handle: (value) => {
              updateOptionState(dispatch, {
                gaussian: { ...state.gaussian, sigma: value },
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
      options={{
        title: "Butterworth",
        sliders: [
          {
            min: 1,
            name: "N",
            value: state.butterworth.n,
            handle: (value) => {
              updateOptionState(dispatch, {
                butterworth: { ...state.butterworth, n: value },
              });
            },
          },
          {
            min: 0,
            max: 1,
            step: 0.01,
            name: "Wn",
            value: state.butterworth.wn,
            handle: (value) => {
              updateOptionState(dispatch, {
                butterworth: { ...state.butterworth, wn: value },
              });
            },
          },
        ],
        dropdowns: [
          {
            name: "Type",
            options: state.butterworth.types,
            value: state.butterworth.selected,
            handle: (value) => {
              updateOptionState(dispatch, {
                butterworth: {
                  ...state.butterworth,
                  selected: value,
                },
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
      options={{
        title: "Chebychev",
        sliders: [
          {
            name: "Order",
            value: state.chebychev.order,
            handle: (value) => {
              updateOptionState(dispatch, {
                chebychev: {
                  ...state.chebychev,
                  order: value,
                },
              });
            },
          },
        ],
        dropdowns: [
          {
            name: "Type",
            options: state.chebychev.types,
            value: state.chebychev.selected,
            handle: (value) => {
              updateOptionState(dispatch, {
                chebychev: {
                  ...state.chebychev,
                  selected: value,
                },
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
      options={{
        title: "Golay",
        sliders: [
          {
            name: "Window",
            value: state.golay.window,
            handle: (value) => {
              updateOptionState(dispatch, {
                golay: {
                  ...state.golay,
                  window: value,
                },
              });
            },
          },
          {
            name: "Polyorder",
            value: state.golay.polyorder,
            handle: (value) => {
              updateOptionState(dispatch, {
                golay: {
                  ...state.golay,
                  polyorder: value,
                },
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
      options={{
        title: "Kalman",
        sliders: [
          {
            name: "pNoise",
            value: state.kalman.pNoise,
            handle: (value) => {
              updateOptionState(dispatch, {
                kalman: {
                  ...state.kalman,
                  pNoise: value,
                },
              });
            },
          },
          {
            name: "mNoise",
            min: 0,
            max: 100,
            step: 1,
            value: state.kalman.mNoise,
            handle: (value) => {
              updateOptionState(dispatch, {
                kalman: {
                  ...state.kalman,
                  mNoise: value,
                },
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
      options={{
        title: "Wavelet",
        sliders: [
          {
            name: "Level",
            value: state.wavelet.level,
            handle: (value) => {
              updateOptionState(dispatch, {
                wavelet: {
                  ...state.wavelet,
                  level: value,
                },
              });
            },
          },
        ],
        dropdowns: [
          {
            name: "Type",
            options: state.wavelet.types,
            value: state.wavelet.selected,
            handle: (value) => {
              updateOptionState(dispatch, {
                wavelet: {
                  ...state.wavelet,
                  selected: value,
                },
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
      options={{
        title: "EMA",
        sliders: [
          {
            name: "Span",
            value: state.ema.span,
            handle: (value) => {
              updateOptionState(dispatch, {
                ema: {
                  ...state.ema,
                  span: value,
                },
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
