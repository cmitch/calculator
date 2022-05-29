
import { connect } from "react-redux";
import calculateValue from "../../store/actions/calculate";
import Button from "./Button";

const mapStateToProps = (state, props) => ({
    orange: props.orange,
    wide: props.wide,
    name: props.name,
})

const mapDispatchToProps = dispatch => ({
    handleClick: (nextValue) => (dispatch(calculateValue(nextValue))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);