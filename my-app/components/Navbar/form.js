import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("Click");

  const change = () => {
    if (text == "Click") {
      setText("amir");
    } else if (text == "amir") {
      setText("Click");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button className="bg-orange-500 rounded-sm py-0 px-4" onClick={change}>click me</button>
    </>
  );
}
