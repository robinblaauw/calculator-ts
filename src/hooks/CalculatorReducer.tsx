export enum CalcActionTypes {
  SETARITHMETIC = "SETARITHMETIC",
  SETSAVEDARITHMETIC = "SETSAVEDARITHMETIC",
  SETNEWSCURRENT = "SETNEWSCURRENT",
  SETNEWSAVED = "SETNEWSAVED",
  RESET = "RESET",
  TOTALCALCULATION = "TOTALCALCULATION",
  ADDHISTORY = "ADDHISTORY",
}

interface CalcAction {
  type: CalcActionTypes;
  payload: string;
}

type CalcState = {
  currentValue: string;
  savedValue: string;
  arithmetic: string;
  savedArithmetic: string;
  history: string[];
};

export function calculatorReducer(state: CalcState, action: CalcAction) {
  const { type, payload } = action;
  switch (type) {
    case CalcActionTypes.SETNEWSCURRENT: {
      return {
        ...state,
        currentValue: (state.currentValue = payload),
      };
    }
    case CalcActionTypes.SETNEWSAVED: {
      return {
        ...state,
        savedValue: (state.savedValue = payload),
      };
    }
    case CalcActionTypes.SETARITHMETIC: {
      return {
        ...state,
        arithmetic: (state.arithmetic = payload),
      };
    }
    case CalcActionTypes.SETSAVEDARITHMETIC: {
      return {
        ...state,
        savedArithmetic: (state.savedArithmetic = payload),
      };
    }
    case CalcActionTypes.ADDHISTORY: {
      if (state.history.length < 6) {
        return {
          ...state,
          history: [...state.history, payload],
        };
      } else {
        let newHistory = state.history.splice(0, 1);
        return { ...state, history: [...newHistory, payload] };
      }
    }
    case CalcActionTypes.TOTALCALCULATION: {
      return {
        ...state,
        currentValue: (state.currentValue = payload),
        savedValue: "0",
        arithmetic: "",
        savedArithmetic: "",
      };
    }
    case CalcActionTypes.RESET: {
      return {
        currentValue: "0",
        savedValue: "0",
        savedArithmetic: "",
        arithmetic: "",
        history: [...state.history],
      };
    }
  }
}
