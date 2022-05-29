import React from "react";
import PropTypes from "prop-types";
import { useSelector, } from 'react-redux';
import { selectNext, selectTotal } from "../../store/calculatorSlice";

import "./Display.css";

const Display = () => {
    const next = useSelector(selectNext);
    const total = useSelector(selectTotal);

    return (
    <div className="component-display">
        <div>{next || total || "0"}</div>
    </div>
)};




Display.propTypes = {
    value: PropTypes.string,
};

export default Display;
