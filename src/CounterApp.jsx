import { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handledAdd = () => {
        // 1 forma
        // setCounter(counter + 1);
        // 2 forma
        setCounter((c) => c + 1);
    }

    const handledSubtract = () => {
        setCounter(counter - 1);
    }

    const handledReset = () => {
        setCounter(value);
    }

    return (<>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>

        <button onClick={handledAdd}>
            +1
        </button>
        <button aria-label='btn-reset' onClick={handledReset}>
            Reset
        </button>
        <button onClick={handledSubtract}>
            -1
        </button>
    </>);
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}