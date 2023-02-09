import React from 'react'

const BackDrop = ({show,click}) => {
    const style={
        position:"fixed",
        height:"100vh",
        width:"100vw",
        background:"rgba(0,0,0,0.4)",
        zIndex:"200"
    }
  return (
    <>
    {show&&( <div onClick={click} style={style} ></div>)}
    </>
    
  );
}

export default BackDrop