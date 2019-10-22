import * as React from "react";
import { Person } from "./components/person/Person";

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
      <Person />
      {/* <Person hairColor={"#603404"} />
      <Person hairColor={"#603404"} eyeColor={"#0182d3"} />
      <Person
        hairColor={"#603404"}
        eyeColor={"#0182d3"}
        shirtColor={"#B348E6"}
      />
      <Person expression={Expression.SAD} />
      <Person expression={Expression.LOVE} /> */}
    </div>
  );
}

export default App;
