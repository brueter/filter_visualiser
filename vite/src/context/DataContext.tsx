import React from "react";
import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
} from "react";

const initialState = {
  raw: {
    label: "Raw",
    data: [] as number[],
  },
  gaussian: {
    label: "Gaussian",
    data: [] as number[],
  },
  butterworth: {
    label: "Butterworth",
    data: [] as number[],
  },
};

type State = typeof initialState;
type Action = { type: "UPDATE"; payload: Partial<State> } | { type: "RESET" };

const DataStateContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

function dataStateReducer(state: State, action: Action): State {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

interface DataStateProviderProps {
  children: ReactNode;
}

export function DataStateProvider({ children }: DataStateProviderProps) {
  const [state, dispatch] = useReducer(dataStateReducer, initialState);

  const memoizedState = useMemo(() => state, [state]);

  return (
    <DataStateContext.Provider value={{ state: memoizedState, dispatch }}>
      {children}
    </DataStateContext.Provider>
  );
}

export function useDataState() {
  const context = useContext(DataStateContext);
  if (!context) {
    throw new Error("useDataState must be used within an DataStateProvider");
  }
  return context;
}

export function updateDataState(
  dispatch: React.Dispatch<Action>,
  payload: Partial<State>
) {
  dispatch({ type: "UPDATE", payload });
}

export function resetDataState(dispatch: React.Dispatch<Action>) {
  dispatch({ type: "RESET" });
}

/*example usage
 const { state, dispatch } = useDataState();

  const handleUpdate = () => {
    updateDataState(dispatch, { gaussian: { sigma: 1 } });
  };

  const handleReset = () => {
    resetOptionState(dispatch);
  };
*/
