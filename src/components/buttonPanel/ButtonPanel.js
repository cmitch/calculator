import ConnectedButton from "../button/ConnectedButton";
import React from "react";

import "./ButtonPanel.css";

const ButtonPanel = () => (
    <div className="component-button-panel">
        <div>
            <ConnectedButton name="AC" />
            <ConnectedButton name="+/-" />
            <ConnectedButton name="%" />
            <ConnectedButton name="÷" orange />
        </div>
        <div>
            <ConnectedButton name="7" />
            <ConnectedButton name="8" />
            <ConnectedButton name="9" />
            <ConnectedButton name="x" orange />
        </div>
        <div>
            <ConnectedButton name="4" />
            <ConnectedButton name="5" />
            <ConnectedButton name="6" />
            <ConnectedButton name="-" orange/>
        </div>
        <div>
            <ConnectedButton name="1" />
            <ConnectedButton name="2" />
            <ConnectedButton name="3" />
            <ConnectedButton name="+" orange/>
        </div>
        <div>
            <ConnectedButton name="0" wide />
            <ConnectedButton name="." />
            <ConnectedButton name="=" orange />
        </div>
    </div>
);

ButtonPanel.propTypes = {};

export default ButtonPanel;
