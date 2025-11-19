import "../App.css";
import { Bookmark } from "lucide-react";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="card">
      <div className="top">
        <img
          src="https://www.vecteezy.com/vector-art/14018561-amazon-logo-on-transparent-background"
          alt="Amazon"
        />
        <button>
          Save <Bookmark />
        </button>
      </div>
      <div className="center">
        <h3>
          Amazon <span>5 days ago</span>
        </h3>
        <h2>Senior UI/UX Designer</h2>
        <div>
          <h4>Part Time</h4>
          <h4>Senior Developer</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
      
    </>
  );
}

export default Card;
