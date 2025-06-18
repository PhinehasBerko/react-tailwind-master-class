// The store is a place where you can store your state and any function that updates that state.
//  you can share it with any component that needs it since it's a global store.
import { create } from "zustand";

type ZustandType ={
    count: number,
    reset: () => void;
    increment:() => void;
    decrement:() => void;

}
const  useZustandStore = create<ZustandType>((set)=>({
    count: 1,
    reset: () => set({count: 0}),
    increment: () => set((state) => ({count: state.count +1})),
    decrement: () => set((state) => ({count: state.count -1}))
    
}))

export default useZustandStore