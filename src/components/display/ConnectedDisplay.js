import { connect } from "react-redux";
import { selectNext, selectTotal, } from "../../store/selectors/calculatorSelectors"
import Display from "./Display";


const mapStateToProps = state => ({
    value: selectNext(state) || selectTotal(state) || "0",
});

export default connect(mapStateToProps)(Display);