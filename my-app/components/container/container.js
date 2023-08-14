import React, { useReducer } from 'react'

export default function Container(props) {
  return (
    <div className={props.status == true ? 'container mx-auto' : 'mx-0' }>
        {props.children}
    </div>
  )
}
