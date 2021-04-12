//@flow
import React from "react";

const obj = {
    test: true
}

export const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            {obj?.test && <h1>Working</h1>}
        </div>
    )
}