import { useState } from "react";

const UseCount = (WrappedComponent) => {
    return (props) => {
        const [count, setCount] = useState(0);

        return (
            <div>
                {<WrappedComponent{...props}/>}
                <button onClick={() => setCount(count + 1)}>Click Me: {count}</button>
            </div>
        )
    }
}

export default UseCount;