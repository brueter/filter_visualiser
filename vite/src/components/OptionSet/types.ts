interface Slider {
  title: string;
  name: string;
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  handle: (e: any) => void;
}

interface Dropdown {
  title: string;
  name: string;
  value: number;
  options: string[];
  handle: (e: any) => void;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}
