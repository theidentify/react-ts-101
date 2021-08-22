import React from 'react';

// - Not display details
// enum Colors {
//   Red = 'red',
//   Blue = 'blue',
//   Green = 'green',
//   White = 'white'
// }

const Colors ={
  Red: 'red',
  Blue: 'blue',
  White: 'white'
} as const
type Enum<T> = T[keyof T]
type Colors = Enum<typeof Colors>
// type Colors = (typeof Colors)[keyof typeof Colors]

type Props = {
  color: Colors
}

export function Example({ color }: Props) {
  if (color === Colors.White) {
    return (
      <div>White!</div>
    )
  }
  return (
    <div>You pick color: {color}</div>
  )
}