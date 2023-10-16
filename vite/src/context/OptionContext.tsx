import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
} from "react";

const initialGaussianState = {
  sigma: 0,
  visible: true,
};

const initialButterworthState = {
  n: 1,
  wn: 0,
  types: ["low", "high"],
  selected: 0,
  visible: true,
};

const initialChebychevState = {
  order: 0,
  rp: 0,
  wn: 0,
  types: ["low", "high"],
  selected: 0,
  visible: true,
};
const initialGolayState = {
  window: 0,
  polyorder: 0,
  visible: true,
};
const initialKalmanState = {
  pNoise: 0,
  mNoise: 0,
  visible: true,
};
const initialWaveletState = {
  types: ["db1"],
  selected: 0,
  level: 0,
  visible: true,
};
const initialEmaState = {
  span: 0,
  visible: true,
};

type State = {
  gaussian: typeof initialGaussianState;
  butterworth: typeof initialButterworthState;
  chebychev: typeof initialChebychevState;
  golay: typeof initialGolayState;
  kalman: typeof initialKalmanState;
  wavelet: typeof initialWaveletState;
  ema: typeof initialEmaState;
};

type Action = { type: "UPDATE"; payload: Partial<State> } | { type: "RESET" };

const OptionStateContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

function optionStateReducer(state: State, action: Action): State {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

interface OptionStateProviderProps {
  children: ReactNode;
}

const initialState: State = {
  gaussian: initialGaussianState,
  butterworth: initialButterworthState,
  chebychev: initialChebychevState,
  golay: initialGolayState,
  kalman: initialKalmanState,
  wavelet: initialWaveletState,
  ema: initialEmaState,
};

export function OptionStateProvider({ children }: OptionStateProviderProps) {
  const [state, dispatch] = useReducer(optionStateReducer, initialState);

  const memoizedState = useMemo(() => state, [state]);

  return (
    <OptionStateContext.Provider value={{ state: memoizedState, dispatch }}>
      {children}
    </OptionStateContext.Provider>
  );
}

export function useOptionState() {
  const context = useContext(OptionStateContext);
  if (!context) {
    throw new Error(
      "useOptionState must be used within an OptionStateProvider"
    );
  }
  return context;
}

export function updateOptionState(
  dispatch: React.Dispatch<Action>,
  payload: Partial<State>
) {
  dispatch({ type: "UPDATE", payload });
}

export function resetOptionState(dispatch: React.Dispatch<Action>) {
  dispatch({ type: "RESET" });
}
