import { useReducer } from "react"

// *****************************************   useReducer NOTE *******************************************

// What is useReducer ?: is a hook used for state management
// It is an alternative to useState  and useState is built using useReducer

//  When to use useReducer




type CounterState ={
        count:number
}

type UpdateCounter ={
    type : "increment" | "decrement"
    payload: number
}

type ResetCounter ={
    type: "reset"
}


// This is called discriminated Unions
type CounterAction =UpdateCounter | ResetCounter
const initialValue = {count:0}

const reducer =(state: CounterState, action: CounterAction)=>{
    switch(action.type){
        case "increment":
            return {count: state.count + action.payload}
        case "decrement":
            return {count: state.count - action.payload}
        case "reset":
            return initialValue
        default:
            return state
    }
}
const UseReducer =()=>{
    const [state, dispatch] = useReducer(reducer, initialValue)

    return(
        <div className=" items-center justify-center flex flex-col gap-5">
            <button  className="border-lg rounded-lg border-blue-500 p-4 border">Count {state.count}</button>
            <div className="flex gap-4 space-x-5">
                <button  className="border-lg rounded-lg border-blue-500 p-4 border"onClick={()=>dispatch({type:"increment",payload:5})}>Increment 5</button>
                <button  className="border-lg rounded-lg border-blue-500 p-4 border"onClick={()=>dispatch({type:"decrement",payload:10})}>Decrement 10</button>
                <button  className="border-lg rounded-lg border-blue-500 p-4 border"onClick={()=>dispatch({type:"reset"})}>Reset 0</button>
            </div>

        </div>
    )
}

export default UseReducer   