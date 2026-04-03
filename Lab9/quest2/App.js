import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Student Cards</h1>

      <StudentCard name="Krishna" department="CSE" marks="85" />
      <StudentCard name="Rahul" department="ECE" marks="90" />
      <StudentCard name="Anjali" department="IT" marks="88" />

    </div>
  );
}

export default App;