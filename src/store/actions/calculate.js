
const calculateValue = nextValue => {
    return {
        type: "calculator/calculate",
        payload: nextValue,
    }
}

export default calculateValue;