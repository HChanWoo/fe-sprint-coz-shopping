import tw from "tailwind-styled-components";
import React from "react";
import "./App.css";

function App() {
  const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;
  return (
    <div className="App">
      <Container>
        <div>Use the Container as any other React Component</div>
      </Container>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
