import { useReducer } from "react";
import { calculatorReducer } from "./hooks/CalculatorReducer";
import Grid from "./components/grid/Grid";
import CalculatorButtons from "./components/CalculatorButtons/CalculatorButtons";
import CalcHistoryHolder from "./components/CalcHistoryHolder/CalcHistoryHolder";
import {
  total,
  setNewArithmetic,
  specialCharacterPress,
  calculatorNumberPress,
} from "./util/reducerFunctions";
import CalculatorValueDisplay from "./components/CalculatorValueDisplay/CalculatorValueDisplay";

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, {
    currentValue: "0",
    savedValue: "0",
    arithmetic: "",
    savedArithmetic: "",
    history: [],
  });

  const buttonValueSwitch = (val: string, type: string) => {
    switch (type) {
      case "regular":
        return calculatorNumberPress(val, state, dispatch);
      case "special":
        return specialCharacterPress(val, state, dispatch);
      case "arithmetic":
        return val === "="
          ? total(state, dispatch)
          : setNewArithmetic(val, dispatch);
      default:
        throw new Error(
          "Something went wrong, please check the use of buttonValueSwitch"
        );
    }
  };

  const retrieveButtonValue = (val: string, type: string) => {
    buttonValueSwitch(val, type);
  };

  return (
    <div className="App">
      <div className="flex mx-auto justify-center mt-12">
        <Grid>
          <CalculatorValueDisplay
            currentDisplay={state.currentValue}
            savedDisplay={state.savedValue}
            savedArithmetic={state.savedArithmetic}
          />
          <CalculatorButtons
            selectedButton={state.arithmetic}
            retrieveButtonValue={retrieveButtonValue}
          />
        </Grid>
        <CalcHistoryHolder history={state.history} />
      </div>
    </div>
  );
}

export default App;
