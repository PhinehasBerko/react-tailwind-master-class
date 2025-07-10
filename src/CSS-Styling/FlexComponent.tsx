import React from 'react'

const FlexComponent = () => {
  return (
    <div className=''>
        <h2 className='text-white text-2xl bg-gradient-to-l from-orange-600 to-yellow-600'>FlexBox Section</h2>
        {/* Direction and Axis */}

        <div className='m-12 border-'>
        <h3 className="text-lg text-left bg-gradient-to-t from-orange-400 to-blue-500 flex-wrap w-40 ">Direction and Axis</h3>
        <p>
             The foundation of how a flexbox lays out elements is its direction, which you
             set with Tailwind utilities. The direction can be either horizontal, with .flex
            row, or vertical, with .flex-column
        </p>
        <br></br>
        <p>
             The axis in the direction of the flow is referred to
            as the main axis, while the other direction is referred to as the cross axis. <br></br>
            In Tailwind, the parent flexbox container must include the class, .flex (in the
            same way grids need to have the class, .grid)
        </p>

        <h3 className='text-lg text-left bg-gradient-to-t from-orange-400 to-blue-500 flex-wrap w-40'>Order and Wrap</h3>
        <p>
           <b> The next most important property of the flexbox is whether it'll wrap, which is a properth of the 
            parent of the box.</b> <em>The default is not to wrap. flex-no-wrap, but if you specify .flex-wrap, the your
            row container will automatically move items to the next row if the item would overflow the main axis 
            of the container.</em> 
            <br></br>
            <br></br>

           <b> You can explicitly specify the order of the element in the flexbox with the </b>
           <p>
             You can explicitly specify the order of the elements in the flexbox with the
            .order-{"integer"} utility, where the suffix is any integer from 1 to 12, or you can
             use .order-first, .order-last, or .order-none. 

            <br />
             If the order is specified for one or more
            elements in the flexbox, then that order property determines where in the
            box that element goes, overriding the order in which the element appears in
            the source HTML
           </p>

        </p>
        <div className="flex flex-row flex-wrap  border-2">
            <div className="text-center w-3/5 order-3">Content</div>
            <div className="w-full order-1">Header</div>
            <div className="text-center w-1/5 order-2">Left Sidebar</div>
            <div className="text-center w-1/5 order-4">Right Sidebar</div>
            <div className="w-full order-5">Footer</div>
        </div>

        <h3 className='text-lg text-left bg-gradient-to-t from-orange-400 to-blue-500 flex-wrap w-40'>Grow, Shrink…Flex</h3>
        
        <p>
            <b> 
                The “flex” in flexbox comes from the ability of a flexbox container to change
                the size and placement of its items dynamically.
            </b>

            Tailwind gives you access to common defaults. 
            These are properties that are placed on the elements inside
             a flexbox, not on the parent

            <p>
                 <em>
                    If you don’t want an item to grow or shrink, you specify it as .flex-none, which
                    will keep it at its default size
                </em>.
                 If you want the item to be able to grow or shrink
                as needed to fill the available size of the container, you use .flex-auto or .flex-1.
                The difference between the two is that .flex-auto starts with each element’s
                default size and then increases or decreases size for each element that’s able
                to grow or shrink, whereas .flex-1 resets each item to zero size and equally
                assigns space to all items, regardless of their natural size. In general, using
                .flex-1 on a set of items will give you equally sized items, and .flex-auto won’t.

                <b>

                <em>
                    <b> You can choose to specify shrink behavior without touching grow behavior.
                    To allow shrinking, use .flex-shrink, and to prevent shrinking, use .flex-shrink-0,

                    Similarly, .flex-grow and .flex-grow-0 allow and prevent the element growth without
                    affecting shrink behavior.
                    </b>
                </em>
                </b>
            </p>
        </p>

        <h3 className='text-lg text-left bg-gradient-to-t from-orange-400 to-blue-500 flex-wrap w-40'>Box Alignment</h3>
        <p>
            Tailwind includes
            utilities that allow you to be more specific about the alignment and justification
            of elements within the flexbox. These utilities also work for grid layouts, where
            appropriate. <br/>
            <em>
                 The
                 Tailwind utilities that affect placement along the main axis all start with
                 .justify-, and utilities that affect placement across the cross axis don’t. 
            </em>

            <h4 className='font-semibold text-lg text-left'>Main Axis</h4>
            <em>
                Let’s look at the main axis first. Items can be placed along the main axis in
                two ways: (1) by placing items along the main axis of the entire flexbox, and
                (2) by placing an individual item along the main axis of its own box within
                 the flexbox container. 
            </em>
            <br />
            <p>
                When placing elements along the main axis, Tailwind includes utilities for
 how items are placed if the total width of the items is less then the width of
 the flexbox container. These utilities control how the extra spacing is allocated.
                <br />
                <br />
                <em><b>Three utilities squeeze the elements together as closely as they can:</b></em>
                <ul>
                    <li>
                        1. justify-start places the elements against the beginning of the axis, based on
                         the text direction.
                     </li>
                    <li>2. justify-end puts the items against the end of the axis.</li>
                    <li>3. justify-center centers the items—a longstanding CSS frustration.</li>
                </ul>
            </p>
        </p>
        
    <button className='w-3/24 sm:w-3/12 md:w-3/9 lg:w-3/6 text-lg text-green-500 rounded-lg px-3 py-2 border-2 text-center bg-indigo-500 hover:animate-bounce transition-opacity '>Animate</button>
    </div>
    </div>
    )
}

export default FlexComponent