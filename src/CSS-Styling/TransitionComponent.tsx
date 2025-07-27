import React from 'react'

const TransitionComponent = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl font-bold bg-pink-300'>Transition</h2>
        <p>All of these are negated by .animate-none.</p>
        <p>Tailwind provides several utilities for controlling CSS transitions, including:</p>
        <ul className='list-disc list-inside'>
            <li><b>transition-none</b>: Disables all transitions on an element.</li>
            <li><b>transition-all</b>: Applies transitions to all properties that can be transitioned.</li>
            <li><b>transition</b>: Applies a default set of properties for transition (background-color, border-color, color, fill, stroke, opacity, box-shadow, transform).</li>
            <li><b>transition-colors</b>: Applies transitions only to color-related properties (background-color, border-color, color, fill, stroke).</li>
            <li><b>transition-opacity</b>: Applies transitions only to the opacity property.</li>
            <li><b>transition-shadow</b>: Applies transitions only to the box-shadow property.</li>
            <li><b>transition-transform</b>: Applies transitions only to the transform property.</li>
        </ul>

        <p>You can also control the duration and timing of transitions using the following utilities:</p>
        <ul className='list-disc list-inside'>
            <li><b>duration-{75|100|150|200|300|500|700|1000}</b>: Sets the duration of the transition in milliseconds.</li>
            <li><b>ease-linear</b>: Sets a linear timing function for the transition.</li>
            <li><b>ease-in</b>: Sets a timing function that starts slowly and accelerates towards the end.</li>
            <li><b>ease-out</b>: Sets a timing function that starts quickly and decelerates towards the end.</li>
            <li><b>ease-in-out</b>: Sets a timing function that starts and ends slowly, with a faster middle section.</li>
        </ul>

        <p>These utilities can be combined to create smooth and visually appealing transitions for various CSS properties on your elements. For example, you might use <b className='hover:transition-colors duration-300 ease-in-out bg-green-600 px-3 py-2 rounded-md hover:bg-green-800'>.transition-colors duration-300 ease-in-out</b> on a button to smoothly change its background color when hovered over.</p>
    </div>
  )
}

export default TransitionComponent