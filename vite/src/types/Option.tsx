type Option = {
    sliders?: Slider[],
    dropdowns?: Dropdown[],
    checkboxes?: CheckBox[],
    color: HSL
}

type Slider = {
    name: string,
    min?: number,
    max?: number,
    value?: number,
    step?: number,
    handle: (e:any) => void,
}

type Dropdown = {
    min: number,
    max: number,
    value: number,
    step: number,
    handle: (e:any) => void,
}

type CheckBox = {
    name: string,
    value: boolean,
    visible: boolean,
    handle: (e:any) => void,
}

type HSL = {
    h: number,
    s: number,
    l: number
}