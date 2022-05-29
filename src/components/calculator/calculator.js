import React from "react";
import './Calculator';
import ButtonPanel from '../ButtonPanel/';
import Display from "../Display/";


export default class Calculator extends React.Component {

  render() {
    return (
      <div className="component-calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
};
