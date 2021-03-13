import React from "react";

export default function ChildComp(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("Deepender")}>
        Greet Parent
      </button>
    </div>
  );
}
