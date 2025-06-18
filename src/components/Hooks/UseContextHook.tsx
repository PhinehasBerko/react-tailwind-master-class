// Context helps to pass down data through the component tree without
// having to pass it manually through each of the component at every level
import React, { useContext } from 'react';

const UseContext = React.createContext<string | undefined>(undefined)

export const UseContextHook = () => {

    return (
        <div>
            <UseContext.Provider  value={"Phinehas"}>
                <ChildComponent />
            </UseContext.Provider>
        </div>
    );
}

export const ChildComponent =() =>{
    const consumerContext = useContext(UseContext)
    return <div>
        {consumerContext}
    </div>
}

