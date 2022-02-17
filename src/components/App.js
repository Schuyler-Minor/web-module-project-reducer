import React, { useReducer } from "react";
import { addOne } from "../actions";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

import reducer, { initialState } from "../reducers";
import { applyNumber, changeOperation, clearDisplay } from "../actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addOneChange = () => {
    dispatch(addOne());
  };

  const applyNumberChange = (number) => {
    dispatch(applyNumber(number));
  };

  const changeOperationHandler = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberChange(1)} value={1} />
              <CalcButton value={2} onClick={() => applyNumberChange(2)} />
              <CalcButton onClick={() => applyNumberChange(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberChange(4)} value={4} />
              <CalcButton onClick={() => applyNumberChange(5)} value={5} />
              <CalcButton onClick={() => applyNumberChange(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberChange(7)} value={7} />
              <CalcButton onClick={() => applyNumberChange(8)} value={8} />
              <CalcButton onClick={() => applyNumberChange(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => changeOperationHandler("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => changeOperationHandler("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => changeOperationHandler("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
