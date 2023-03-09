import {IInputCallback} from "@/interfaces";

export const Input = ({cb}: IInputCallback) => {
  return (
      <input onChange={cb} placeholder="Enter your address" type="text"/>
  )
}