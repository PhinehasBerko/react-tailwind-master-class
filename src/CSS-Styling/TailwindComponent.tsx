import React from 'react'

export const textStyle: string = "text-base sm:text-xl md:text-3xl lg:text-5xl" ;

// export const hoverDarker =(color:string):string =>{
//   return `text-${color}-300 hover:text-${color}-700`
// }

const TailwindComponent = () => {
  return (
    <div className='h2 text-yellow-600 container mx-auto py-12 px-6'>
      <p className={`${textStyle} items-center bg-amber-900 bg-clip-border text-white leading-9 tracking-widest `}>This paragraph is uppercase</p>
      <p className="lowercase">This paragraph is lowercase</p>
      <p className="capitalize">This paragraph is capitalize</p>
      <p className="normal-case">this paragraph is normal-case</p>
      
      <h2 className='text-transparent bg-clip-text bg-red-500 text-black'> Tailwind uses text-transparent to text transparent; be able to see the background</h2>
      <h2 className=" bg-red-400 text-white hover:text-current absolutee leading-relaxed tracking-widest">To reset the color of the text we use text-current </h2>
      <button className={`rounded-lg border-r-4 bg-pink-500 px-4 py-2 hover:border-yellow-300  `}>hoverDarker Button</button>

            {/*${hoverDarker('blue')}  */}
    
    
      <div className="mb-10">
        <button className="p-10 border shadow-xlborder-black">One</button>
        <button className="m-10 border border-black">Two</button>
        <button className="m-2 p-2 border-4 border-black">Three</button>
      </div>
      <div>
        <button className="m-4 p-4 border-2 border-black rounded-md">Four</button>
        <button className="m-4 p-4 border-2 border-black rounded-2xl">Five</button>
        <button className="m-4 p-4 border-2 border-black rounded-full">Six</button>
      </div>
      
       <div>
    <button className="m-4 p-4 rounded-md ring">Four</button>
    <button className="m-4 p-4 rounded-2xl ring-2 ring-offset-4 ring-offset-black ">Five</button>
    <button
    className="m-4 p-4 rounded-full ring-4 bg-gradient-to-tr from-black to-red-400  ring-offset-4 ring-offset-black shadow-sm">
    Six
   </button>
 </div>

    <div className='flex  justify-center'>

    <table className='table-fixed border border-collapse'>
      <tr className=''>
        <th className='border border-black w-1/6'>No.</th>
        <th className='border border-black w-1/6'>Name</th>
        <th className='border border-black w-1/6'>Age</th>
        <th className='border border-black w-1/6'>Location</th>
      </tr>
      <tr>
        <td className='border border-black w-1/6'>1</td>
        <td className='border border-black w-1/6'>Phinehas</td>
        <td className='border border-black w-1/6'>24</td>
        <td className='border border-black w-1/6'>Afrancho</td>
      </tr>
      <tr>
        <td className='border border-black w-1/6'>2</td>
        <td className='border border-black w-1/6'>Deligent</td>
        <td className='border border-black w-1/6'>22</td>
        <td className='border border-black w-1/6'>Mampong</td>
      </tr>
      <tr>
        <td className='border border-black w-1/6'>3</td>
        <td className='border border-black w-1/6'>Victor</td>
        <td className='border border-black w-1/6'>20</td>
        <td className='border border-black w-1/6'>Asuhyiae</td>
      </tr>
      <tr>
        <td className='border border-black w-1/6'>4</td>
        <td className='border border-black w-1/6'>Justice</td>
        <td className='border border-black w-1/6'>18</td>
        <td className='border border-black w-1/6'>Sofoline</td>
      </tr>
    </table>
    </div>

    {/* Grid */}
    <div className='grid grid-cols-3 border-2 p-4 bg-gradient-to-bl from-red-500 to-indigo-600 text-white text-center mx-auto'>
      <p className='border-2 px-2 m-2 rounded-md hover:border-orange-400 duration-300 hover:translate-x-1 hover:translate-y-1 col-span-2 col-start-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, repellendus harum impedit laborum obcaecati sint aspernatur ut, libero quos sed, eum praesentium sapiente? Quam fugiat totam quo, est iure voluptatum.</p>
      <p className='border-2 px-2 m-2 rounded-md hover:border-orange-400 duration-300 hover:translate-x-1 hover:translate-y-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, repellendus harum impedit laborum obcaecati sint aspernatur ut, libero quos sed, eum praesentium sapiente? Quam fugiat totam quo, est iure voluptatum.</p>
      <p className='border-2 px-2 m-2 rounded-md hover:border-orange-400 duration-300 hover:translate-x-1 hover:translate-y-1 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, repellendus harum impedit laborum obcaecati sint aspernatur ut, libero quos sed, eum praesentium sapiente? Quam fugiat totam quo, est iure voluptatum.</p>
      <p className='border-2 px-2 m-2 rounded-md hover:border-orange-400 duration-300 hover:translate-x-1 hover:translate-y-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, repellendus harum impedit laborum obcaecati sint aspernatur ut, libero quos sed, eum praesentium sapiente? Quam fugiat totam quo, est iure voluptatum.</p>
      <p className='border-2 px-2 m-2 rounded-md hover:border-orange-400 duration-300 hover:translate-x-1 hover:translate-y-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, repellendus harum impedit laborum obcaecati sint aspernatur ut, libero quos sed, eum praesentium sapiente? Quam fugiat totam quo, est iure voluptatum.</p>
      <p className='border-2 px-2 m-2 rounded-md hover:border-orange-400 duration-300 hover:translate-x-1 hover:translate-y-1 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, repellendus harum impedit laborum obcaecati sint aspernatur ut, libero quos sed, eum praesentium sapiente? Quam fugiat totam quo, est iure voluptatum.</p>
    </div>

    <div className="grid grid-cols-3 gap-4 w-1/3 border-2 mt-10 border-red-600">
      <div className="text-center col-span-3 border-2 border-blue-500">Header</div>
      <div className="text-center w-1/5">Left Sidebar</div>
      <div className="text-center w-3/5">Content</div>
      <div className="text-center w-1/5">Right Sidebar</div>
      <div className="text-center col-span-3 border-t-4 border-gray-950">Footer</div>
    </div>

    {/* FlexBox */}
    <div className="flex flex-col w-1/3 mt-20">
      <div className="flex-grow">Header bar</div>
      <div className="flex flex-row">
        <div className="text-center w-1/5">Left Sidebar</div>
        <div className="text-center w-3/5">Content</div>
        <div className="text-center w-1/5">Right Sidebar</div>
      </div>
    <div className="w-full">Footer</div>

 </div>
  </div>
  )
}
export default TailwindComponent