import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { calculateAction } from '../../store/calculatorSlice';
import "./Button.css";

const Button = ({orange, wide, name}) => {
    const dispatch = useDispatch();
    
    const className = [
        "component-button",
        orange ? "orange" : "",
        wide ? "wide" : "",
    ];

    return (
        <div className={className.join(" ").trim()}>
            <button onClick={() => dispatch(calculateAction(name))}>{name}</button>
        </div>
    );
}


Button.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func
};

export default Button