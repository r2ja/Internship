import Child from "./childcomp1"
import Child_Two from "./childcomp2"

const Parent = () => {
    return (
        <>
            <div>
                <Child name="First" />
                <Child_Two name="Second" />
            </div>
        </>
    )
}

export default Parent;