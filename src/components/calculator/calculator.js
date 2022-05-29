import React from "react";
import './calculator';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import ConnectedDisplay from "../display/ConnectedDisplay";


export default class Calculator extends React.Component {

  render() {
    return (
      <div className="component-calculator">
        <ConnectedDisplay />
        <ButtonPanel />
      </div>
    );
  }
};
