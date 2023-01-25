import React from 'react'

const MyInput = React.forwardRef((props, ref) => {
    return (
      <>
        <input ref={ref} className='myInput' {...props}/>
        <style jsx>
        {`
          .myInput {
            width: 100%;
            padding: 5px 15px;
            margin: 5px 0;
            border: 1px solid #04AA6D;
          }
        `}
      </style>
    </>
    )
})

export default MyInput