import React from 'react'
import TailwindCSS from './CSS-Styling/TailwindCSS'
import TailwindComponent from './CSS-Styling/TailwindComponent'
import FlexComponent from './CSS-Styling/FlexComponent'
// import ListRender from './React_121/17_ListRedering'
// import MyTypeScriptTutorial from './TypeScriptFolder/MyTypeScriptTutorial'

const ReactApp = () => {
  return (
    <div className='text-center gap-4'>
        {/* <ListRender /> */}
        <TailwindCSS />
        <TailwindComponent/>
        <FlexComponent />

      {/* <MyTypeScriptTutorial /> */}
    </div>
  )
}

export default ReactApp