interface Gaussian {
  sigma: number;
  visible: boolean;
}

interface Butterworth {
  n: number;
  wn: number;
  types: string[];
  selected: number;
  visible: boolean;
}

interface Chebychev {
  order: number;
  rp: number;
  wn: number;
  types: string[];
  selected: number;
  visible: boolean;
}

interface Golay {
  window: number;
  polyorder: number;
  visible: boolean;
}

interface Kalman {
  pNoise: number;
  mNoise: number;
  visible: boolean;
}

interface Wavelet {
  types: string[];
  selected: number;
  level: number;
  visible: boolean;
}

interface Ema {
  span: number;
  visible: boolean;
}

interface Option {
  sliders?: Slider[];
  dropdowns?: Dropdown[];
  color: HSL;
}
