
import  useZustandStore  from './zustandStore';

const ZustandComponent = () => {
    const count = useZustandStore((state)=>state.count)
    const increment = useZustandStore((state) =>state.increment)
    const decrement = useZustandStore((state) =>state.decrement)
    return (
        <div className='flex flex-col'>
           <p>This is the  count from zustand: {count}</p>
           <div className='flex gap-5 flex-col '>
            <button onClick={increment} className='border border-lg border-blue-400 p-3 rounded-lg'>Increment</button>
            <button onClick={decrement} className='border border-lg border-red-400 p-3 rounded-lg cursor-pointer'>Decrement</button>
           </div>

        </div>
    );
}

export default ZustandComponent;
