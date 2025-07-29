import React from 'react'
import "../CSS-Styling/htmlCssComponents.css"
const HtmlCssComponent = () => {
  return (
    <div className='main-content'>
        <h1>Text-align Guidance</h1>
        <p>Don't justify text, long block of text should be left aligned and 
            don't center long sentence but text that span through a couple of lines
            can sometimes be centered
         </p>
         <p>
            block of text that are beside am image (in the hero section ) should be left / right 
            align
         </p>
        
        <h1>Line Height Guidance</h1>
        <p>
            line-height for headers should be less than 1.5 and regular should be 1.5 - 2 to improve
            readability. 
        </p>
        <h1>Letter-spacing & Guidance</h1>
        <p>
            letter spacing are used to set the horizontal spacing between characters 
            <span className='letter-spacing'>for eXample: letter-spacing: 8px;</span>
        </p>
    </div>
  )
}

export default HtmlCssComponent