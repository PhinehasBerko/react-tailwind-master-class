import React from 'react'
import { boolValue, double, inferType, multiArray, numValue, person, personOBJ, stringValue } from './typeScriptFile'


const MyTypeScriptTutorial = () => {
  return (
    <div className='text-center font-semibold text-blue-900'>
      <h1>My TypeScript Tutorial</h1>
      <p>the name is {person.name}</p>
      <p>This is also a stringValue : {stringValue}</p>
      <p>This is also a numberValue : {numValue}</p>
      <p>{`This is also a booleanValue : ${boolValue}`}</p>
      <p> This is the type inference is: {typeof inferType }</p>
      <h2>This return a double function : {double(23)}</h2>
      <h4> This is a multi-dimensional array : {multiArray}</h4>
      <p>This is a object in {personOBJ.age} and {person.name}</p>
    </div>
  )
}

export default MyTypeScriptTutorial