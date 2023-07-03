import { CalcActionTypes } from "../hooks/CalculatorReducer";
import { calculateTotal } from "./calculations";
import {
  concatNumbers,
  percentage,
  switchPositiveNegative,
} from "./transformNumber";

interface reducerState {
  currentValue: string;
  savedValue: string;
  arithmetic: string;
  savedArithmetic: string;
  history: string[];
}

export const total = (state: reducerState, dispatch: any) => {
  if (state.savedArithmetic !== "") {
    const newTotal = calculateTotal(
      state.savedValue,
      state.currentValue,
      state.savedArithmetic
    );
    dispatch({
      type: CalcActionTypes.TOTALCALCULATION,
      payload: newTotal.result,
    });
    dispatch({
      type: CalcActionTypes.ADDHISTORY,
      payload: newTotal.calculation,
    });
  }
};

const setNewSubTotal = (val: string, state: reducerState, dispatch: any) => {
  let savedTotal;
  if (state.savedArithmetic !== "") {
    savedTotal = calculateTotal(
      state.savedValue,
      state.currentValue,
      state.savedArithmetic
    );
    dispatch({
      type: CalcActionTypes.SETNEWSAVED,
      payload: savedTotal.result,
    });
    dispatch({
      type: CalcActionTypes.SETARITHMETIC,
      payload: "",
    });
    dispatch({
      type: CalcActionTypes.SETNEWSCURRENT,
      payload: val,
    });
    dispatch({
      type: CalcActionTypes.ADDHISTORY,
      payload: savedTotal.calculation,
    });
  }
};

export const specialCharacterPress = (
  val: string,
  state: reducerState,
  dispatch: any
) => {
  switch (val) {
    case "%":
      return dispatch({
        type: CalcActionTypes.SETNEWSCURRENT,
        payload: percentage(state.currentValue),
      });
    case "+/-":
      return dispatch({
        type: CalcActionTypes.SETNEWSCURRENT,
        payload: switchPositiveNegative(state.currentValue),
      });
    case "C":
      return dispatch({
        type: CalcActionTypes.RESET,
        payload: "",
      });
    default:
      break;
  }
};

export const calculatorNumberPress = (
  val: string,
  state: reducerState,
  dispatch: any
) => {
  if (state.arithmetic === "") {
    dispatch({
      type: CalcActionTypes.SETNEWSCURRENT,
      payload: concatNumbers(state.currentValue, val),
    });
  } else {
    dispatch({
      type: CalcActionTypes.SETSAVEDARITHMETIC,
      payload: state.arithmetic,
    });
    if (state.savedValue === "0" && state.savedArithmetic === "") {
      dispatch({
        type: CalcActionTypes.SETNEWSAVED,
        payload: state.currentValue,
      });
      dispatch({
        type: CalcActionTypes.SETNEWSCURRENT,
        payload: val,
      });
      dispatch({
        type: CalcActionTypes.SETARITHMETIC,
        payload: "",
      });
    } else {
      setNewSubTotal(val, state, dispatch);
    }
  }
};

export const setNewArithmetic = (val: string, dispatch: any) => {
  dispatch({
    type: CalcActionTypes.SETARITHMETIC,
    payload: val,
  });
};
