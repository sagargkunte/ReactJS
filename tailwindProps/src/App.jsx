import "./App.css";
import Card from "./components/Card.jsx";
import { Bookmark } from "lucide-react";
import User from "./components/User.jsx";
function App() {
  return (
    <div className="parent">
      <Card></Card>
      <Card></Card>
      <User></User>
    </div>
  );
}

export default App;
