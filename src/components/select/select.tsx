import {ISelectCallback} from "@/interfaces";

const options = ["Assets", "Collections"];

interface ISelect extends ISelectCallback{
  initial: string
}
export const Select = ({cb, initial}: ISelect) => {
    return (
      <div className="select-box">
        <p>What you want to retrieve?</p>
        <select onChange={cb} defaultValue={initial}>
          {/**
           * I know that it mostly a wrong way to use index as "key" but in this case it really doesn't matter */}
          {options.map((option, i) => {
            /**
             * Temporary hack. Not finished with collections yet */
            return <option key={i} disabled={option === "Collections"} value={option.toLowerCase()}>{option}</option>
          })}
        </select>
      </div>
    )
}