import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading' style={{whiteSpace:"nowrap",color:"black"}}>
        <h3 style={{fontSize:"50px"}}>{subtitle} </h3>
        <h1 >{title} </h1>
      </div>
      
      
    </>
  )
}

export default Heading