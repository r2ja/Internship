import React, { useContext } from "react";
import { CounterContext } from "../context/counterContext";

const Child_func = () => {
    const { count, setCount } = useContext(CounterContext);

    return (
        <>
            <h3>This is the child. The value of count is: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
        </>
    );
}

export default Child_func;
