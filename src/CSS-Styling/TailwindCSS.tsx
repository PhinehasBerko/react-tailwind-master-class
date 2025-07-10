 import React from 'react'

export type typeList = {
    id: string;
    path: string;
    name: string;
}
// eslint-disable-next-line react-refresh/only-export-components
export const navList: typeList[] = [
    {
        id: '1',
        path:'/',
        name:'name'
    },
    {
        id: '2',
        path:'/about-me',
        name:'About Me'
    },
    {
        id: '3',
        path:'/let-connect',
        name:`Let's Connect`
    },
]

const TailwindCSS = () => {
  return (
    <div className='flex justify-center bg-blue-800 rounded-lg mx-auto container px-6'>
        <button className="order-last font-semibold bg-green-300 m-3 rounded-lg hover:bg-green-400  duration-300">Click Me</button> 
        <nav className='flex self-center mx-4'>
            {navList.map((nav)=>
                <nav key={nav.id} className='text-current border-2 mx-1  font-semibold font-serif hover:underline hover:text-gray-200 hover:translate-y-3 duration-200'>
                    {nav.name}
                </nav>)
            }
        </nav>
        
    </div>
  )
}

export default TailwindCSS