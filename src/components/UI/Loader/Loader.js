const Loader = () => {
    return (
        <>
          <div className='loader'>

          </div>
          <style jsx>
          {`
            .loader {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              border: 3px dashed #04AA6D;
              animation: rotate 1s infinite linear;
            }
          
            @keyframes rotate {
                from {
                    transform: rotate(0deg) scale(1);
                }
                to {
                    transform: rotate(360deg) scale(1.4);
                }
            }
          `}
        </style>
      </>
    )
}

export default Loader
