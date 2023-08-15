import React from "react";

export default function Divedr(props) {
  return (
    <div className="text-center">
      <div className={`bg-primaryColor h-1 w-${props.width} inline-block`}></div>
    </div>
  );
}
