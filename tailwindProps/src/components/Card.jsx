import "../App.css";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="card">
        <img src={props.img} alt="Image of unsplash" className="card-img"/>
        <h2>Name : {props.name}</h2>
        <h4>Class : 5B</h4>
        <h5>Age : {props.age}</h5>
        <p>College : {props.college}</p>
        <button>View Profile</button>
      </div>
      
    </>
  );
}

export default Card;
