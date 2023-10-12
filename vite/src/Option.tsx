type Option = {
    sliders?: Slider[],
    dropdowns?: Dropdown[],
    checkbox?: CheckBox[]
}

type Slider = {
    name: string,
    min?: number,
    max?: number,
    value?: number,
    step?: number,
    visible?: boolean,
    handle: (e:any) => void,
}

type Dropdown = {
    min: number,
    max: number,
    value: number,
    step: number,
    visible: boolean
}

type CheckBox = {
    name: string,
    min: number,
    max: number,
    value: number,
    step: number,
    visible: boolean
}