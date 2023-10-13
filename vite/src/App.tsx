import { useState } from 'react'
import './App.css'
import OptionSet from './components/OptionCategory.tsx';
import './types/Option.tsx';

function App() {
  const [options, setOptions] = useState({
    gaussian: {
      sigma: 0,
      visible: true,
    },
    butterworth: {
      n: 0,
      wn: 0,
    },
    chebychev: {
      order: 0,
      rp: 0,
      wn: 0,
      type: {
        1: "low",
        2: "high",
      },
      visible: true,
    },
    golay: {            //Savitzky Golay
      window: 0,        //window size
      polyorder: 0,
      visible: true,
    },
    kalman: {
      pNoise: 0,        //process noise
      mNoise: 0,        //measurement noise
      visible: true,
    },
    wavelet: {
      type: {
        1: "db1",
      },
      level: 0,
      visible: true,
    },
    ema: {
      span: 0,
      visible: true,
    },
    options: {
      zoom: 0,
      lineWidth: 0,
      visible: true,
    }
  });

  const opt = <OptionSet
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
          setOptions({
            ...options,
            gaussian: {
              ...options.gaussian,
              sigma: e.target.value
            }
          })
        }
      },
    ],
    dropdowns: [],
    checkboxes: [
      {
        name: "Visibility",
        value: options.gaussian.visible,
        visible: options.gaussian.visible,
        handle: (e) => {
          setOptions({
            ...options,
            gaussian: {
              ...options.gaussian,
              visible: e.target.checked
            }
          })
        }
      }

    ],
    color: {
      h: 0,
      s: 100,
      l: 50
    },
  }}
/>

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
  )
}

export default App