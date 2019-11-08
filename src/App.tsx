import * as React from "react";
import { Robot, Expression } from "./components/robot/Robot";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap"
      }}
    >
      <Robot />

      <Robot bodyColor={"#B6459D"} />
      <Robot bodyColor={"#716d8a"} />
      <Robot bodyColor={"#B6459D"} accentColor={"#3b035f"} />
      <Robot expression={Expression.SAD} />
    </div>
  );
}

export default App;
