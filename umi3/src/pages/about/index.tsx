import {KeyboardEvent, useState} from "react";

export default function About() {
  const [borderColor, setBorderColor] = useState('')

  const checkInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  // const checkInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.target.value
    const reg = /^[1-9]\d*\.[5]$|0\.[5]$|^[1-9]\d*$/

    // if (!value) {
    //   setBorderColor('1px solid #333')
    // } else {
    //   if (reg.test(value)) {
    //     setBorderColor('1px solid green')
    //   } else {
    //     setBorderColor('1px solid red')
    //   }
    // }

    const borderColor = value ? reg.test(value) ? '1px solid green' : '1px solid red' : '1px solid #333';
    setBorderColor(borderColor);
  }

  return (
    <div>
      <input type="text"
             style={{border: borderColor, outline: 'none'}}
             // onKeyUp={(e) => checkInput(e)}/>
             onChange={(e) => checkInput(e)}/>
    </div>
  );
}
