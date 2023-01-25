const MyButton = ({children, ...props}) => {
    return (
      <>
        <button {...props} className='myBtn'>
            {children}
        </button>
        <style jsx>
        {`
          .myBtn {
            padding: 5px 15px;
            color: #04AA6D;
            font-size: 14px;
            background: transparent;
            border: 1px solid #04AA6D;
            cursor: pointer;
          }
        `}
      </style>
      </>
    )
}

export default MyButton