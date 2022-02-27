import React from 'react'
import spinner from "../assets/spinner.gif"
export default function Spinner() {
  return (
    <img src={spinner} alt="Loading..." style={{margin:"auto",width:"100px"}} />
  )
}
