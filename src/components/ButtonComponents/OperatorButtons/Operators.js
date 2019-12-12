import React from "react";
import OperatorButton from "../OperatorButtons/OperatorButton";
import { operators } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div>
     {operators.map(operator => <OperatorButton operator={operator}
     addOperator={props.addOperator}/>)}
    </div>
  );
};

export default Operators;