import { useState } from "react";
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
      title="Gaussian"
      options={{
        sliders: [
          {
            title: "Gaussian",
            name: "Sigma",
            min: 0,
            max: 100,
            step: 1,
            value: state.gaussian.sigma,
            handle: (e) => {
              updateOptionState(dispatch, {
                gaussian: { ...state.gaussian, sigma: e.target.value },
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
            value: state.butterworth.n,
            handle: (e) => {
              updateOptionState(dispatch, {
                butterworth: { ...state.butterworth, n: e.target.value },
              });
            },
          },
          {
            title: "Butterworth",
            name: "Wn",
            min: 0,
            max: 100,
            step: 1,
            value: state.butterworth.wn,
            handle: (e) => {
              updateOptionState(dispatch, {
                butterworth: { ...state.butterworth, wn: e.target.value },
              });
            },
          },
        ],
        dropdowns: [
          {
            title: "Butterworth",
            name: "Type",
            options: state.butterworth.types,
            value: state.butterworth.selected,
            handle: (e) => {
              updateOptionState(dispatch, {
                butterworth: {
                  ...state.butterworth,
                  selected: e.target.selectedIndex,
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
      title="Chebychev"
      options={{
        sliders: [
          {
            title: "Chebychev",
            name: "Order",
            min: 0,
            max: 100,
            step: 1,
            value: state.chebychev.order,
            handle: (e) => {
              updateOptionState(dispatch, {
                chebychev: {
                  ...state.chebychev,
                  order: e.target.value,
                },
              });
            },
          },
        ],
        dropdowns: [
          {
            title: "Chebychev",
            name: "Type",
            options: state.chebychev.types,
            value: state.chebychev.selected,
            handle: (e) => {
              updateOptionState(dispatch, {
                chebychev: {
                  ...state.chebychev,
                  selected: e.target.selectedIndex,
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
      title="Golay"
      options={{
        sliders: [
          {
            title: "Golay",
            name: "Window",
            min: 0,
            max: 100,
            step: 1,
            value: state.golay.window,
            handle: (e) => {
              updateOptionState(dispatch, {
                golay: {
                  ...state.golay,
                  window: e.target.value,
                },
              });
            },
          },
          {
            title: "Golay",
            name: "Polyorder",
            min: 0,
            max: 100,
            step: 1,
            value: state.golay.polyorder,
            handle: (e) => {
              updateOptionState(dispatch, {
                golay: {
                  ...state.golay,
                  polyorder: e.target.value,
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
      title="Kalman"
      options={{
        sliders: [
          {
            title: "Kalman",
            name: "pNoise",
            min: 0,
            max: 100,
            step: 1,
            value: state.kalman.pNoise,
            handle: (e) => {
              updateOptionState(dispatch, {
                kalman: {
                  ...state.kalman,
                  pNoise: e.target.value,
                },
              });
            },
          },
          {
            title: "Kalman",
            name: "mNoise",
            min: 0,
            max: 100,
            step: 1,
            value: state.kalman.mNoise,
            handle: (e) => {
              updateOptionState(dispatch, {
                kalman: {
                  ...state.kalman,
                  mNoise: e.target.value,
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
      title="Wavelet"
      options={{
        sliders: [
          {
            title: "Wavelet",
            name: "Level",
            min: 0,
            max: 100,
            step: 1,
            value: state.wavelet.level,
            handle: (e) => {
              updateOptionState(dispatch, {
                wavelet: {
                  ...state.wavelet,
                  level: e.target.value,
                },
              });
            },
          },
        ],
        dropdowns: [
          {
            title: "Wavelet",
            name: "Type",
            options: state.wavelet.types,
            value: state.wavelet.selected,
            handle: (e) => {
              updateOptionState(dispatch, {
                wavelet: {
                  ...state.wavelet,
                  selected: e.target.selectedIndex,
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
      title="EMA"
      options={{
        sliders: [
          {
            title: "EMA",
            name: "Span",
            min: 0,
            max: 100,
            step: 1,
            value: state.ema.span,
            handle: (e) => {
              updateOptionState(dispatch, {
                ema: {
                  ...state.ema,
                  span: e.target.value,
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
