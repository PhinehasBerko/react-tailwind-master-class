import React from 'react'

const AnimationComponent = () => {
  return (
    <div className='animate-bounce '>
        <p>Tailwind provides 4 full animation utilities: <br />
            .animate-spin, animate-pulse, .animate-bounce, and animate-ping
        </p>
        <p>
            These classes define the CSS for an animation and a set of keyframes, so you can use them 
            on an element as-is
        </p>
        <h2>The 1st utility, <b className='hover:animate-spin bg-blue-600 px-3 py-2 rounded-md'>.animate-spin</b> </h2>

        <p> The second Tailwind
            utility, <b> .animate-pulse</b>, gives you a two-second transition between 0.1 opacity
            and 0.5, which produces a slight fade effect on the element.
            The third utility,<b>.animate-bounce </b>, describes a one-second transition translating
            the vertical position down by 25% of the size of the element and then back
            to the original position, so it gives a slight downward bounce.
            
            <em> I think this one
 works nicely as a .hover:animate-bounce to give a <b>“you are here”</b> effect.</em>
            <br />
             You can give a notification effect a little animation with the fourth utility,
 .animate-ping, which is a one-second animation from regular size and opacity
 to twice the size and 0 opacity, which gives a pretty effective signal pulse
 effect.
            <b>All of these are negated by .animate-none.</b>
            </p>
    </div>
  )
}

export default AnimationComponent