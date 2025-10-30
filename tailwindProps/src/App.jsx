import "./App.css";
import Card from './components/Card.jsx';
function App() {
  return (
    <div>
    {/* Also remember comments are written in the curly braces */}
      <Card name="sagar" age={20} college="JNNCE" img="https://images.unsplash.com/photo-1761618058254-a50c30993b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"></Card>  {/* Write the props in curly braces if it is number or array or object etc..  */}
      <Card name="Sneha" age={22} college="ATNCE" img="https://images.unsplash.com/photo-1753982519308-d9ae94c9d434?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"></Card> 
    </div>
  );
}

export default App;
