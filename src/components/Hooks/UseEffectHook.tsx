import  { useEffect, useState } from 'react';

const UseEffectHook = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setCount((prev) =>prev +1)
        },1000)
    },[count])
    return (
        <div>
            <button>Counted{count} times</button>
            
        </div>
    );
}

export default UseEffectHook;
