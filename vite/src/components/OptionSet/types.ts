interface Slider {
  name: string;
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  handle: (e: any) => void;
}

interface Dropdown {
  min: number;
  max: number;
  value: number;
  step: number;
  handle: (e: any) => void;
}

interface CheckBox {
  name: string;
  value: boolean;
  visible: boolean;
  handle: (e: any) => void;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}
