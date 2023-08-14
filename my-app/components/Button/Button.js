import React from 'react'

export function Button(props) {
  return (
    <button onClick={props.action}>{props.name}</button>
  )
}
