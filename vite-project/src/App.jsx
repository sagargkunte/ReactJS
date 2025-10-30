import Demo from "./demo";

function App() {
  const username = "Hello this is variable"
  return (
    <>
    <h1>Hello sagar {username}</h1> //variables are written in curly braces and only evaluated values are passed inside curly braces
      <Demo></Demo>
    </>
  );
}

export default App;