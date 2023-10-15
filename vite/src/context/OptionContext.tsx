import React, { useState } from "react";
import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  FC,
  ReactNode,
} from "react";

const initialState = {
  gaussian: {
    sigma: 0,
    visible: true,
  },
  butterworth: {
    n: 0,
    wn: 0,
    types: ["low", "high"],
    selected: 0,
    visible: true,
  },
  chebychev: {
    order: 0,
    rp: 0,
    wn: 0,
    types: ["low", "high"],
    selected: 0,
    visible: true,
  },
  golay: {
    window: 0,
    polyorder: 0,
    visible: true,
  },
  kalman: {
    pNoise: 0,
    mNoise: 0,
    visible: true,
  },
  wavelet: {
    types: ["db1"],
    selected: 0,
    level: 0,
    visible: true,
  },
  ema: {
    span: 0,
    visible: true,
  },
};

type State = typeof initialState;
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

/*example usage

 const { state, dispatch } = useOptionState();

  const handleUpdate = () => {
    updateOptionState(dispatch, { gaussian: { sigma: 1 } });
  };

  const handleReset = () => {
    resetOptionState(dispatch);
  };

*/
