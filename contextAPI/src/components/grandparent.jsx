import Parent from "./parent"
import React, { useContext} from 'react'
import { CounterContext } from "../context/counterContext";

export default function()
{

    const { count } = useContext(CounterContext);

    return (
        <>
        <h1> This is the Grand Parent. <br />The value of count is: {count}</h1>
        <Parent />
        </>
    )
}