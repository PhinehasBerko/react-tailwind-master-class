import { useState } from "react";

type ArrayType ={
    id: number,
    value: number
}[]

const UseStateHook = () => {
    // 


    // UseState with boolean
    const [subscribe, setSubscribe] = useState(false)
    // UseState with numbers
    const [count, setCount] = useState(0)
    // useState with object as state  variable
    const [name, setName] = useState({firstname:"", lastName:""})
    // useState with the array as a state variable
    const [array, setArray] = useState<ArrayType| []>([]) 


    const addItem =() =>{
        setArray([...array,{
            id: array.length,
            value: Math.floor(Math.random() * 10) +1
        }])
    }



    return (
        <div className="flex flex-col items-center justify-center">
            {/* Implementing setter function function for the useState {boolean} */}
            <button type="submit" onClick={() =>setSubscribe(!subscribe)} className={`border border-lg border-blue-500 p-4 hover:bg-orange-500  duration-100 rounded-lg ${subscribe?`bg-green-600 `:`bg-red-600` }`}>Subcribe</button>

            {/* Implementing setter function method for the useState {numbers} */}
            <button>{count}</button>
            <button onClick={() =>setCount((prevCount) =>prevCount+1)}>Increment</button>
            <button onClick={() =>setCount((prevCount) =>prevCount-1)}>Decrement</button>

            {/* Implementing setter function  method for the useState {object} */}
            <div className="mt-20 ">
                <input type="text" className="border bg-green-400 w-[240px] text-white text-lg" value={name.firstname} onChange={(e) =>setName({...name,firstname: e.target.value})} placeholder="Input"  />
                <input type="text" className="border bg-blue-400 w-[240px] text-white text-lg" value={name.lastName} onChange={(e) =>setName({...name,lastName: e.target.value})} placeholder="Input"  />
                <h1>Your firstName is -{name.firstname}</h1>
                <h1>Your lastName is -{name.lastName}</h1>
                <h2>{JSON.stringify(name)}</h2>

            </div>

            {/* Implementing setter function method for the useState {array} */}
            <div>
                <button onClick={addItem}>Add a number</button>
                <ul>
                    {array.map((item) =>(<li key={item?.id}> ID:{item.id} and Value:{item.value}</li>))}
                </ul>
            </div>

        </div>
    );
}

export default UseStateHook;
