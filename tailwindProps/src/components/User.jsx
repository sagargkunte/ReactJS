import "../App.css";

function User(props) {
  console.log(props);
  const arr = [10,20,30];

  arr.forEach(function() {
    console.log('hello');
  })
  return (
    <>
      <div className="parent">
        {arr.map(function(item) {
            return <h1 style={{'color':'white'}}>{item*6}</h1>
        })}
      </div>
    </>
  );
}

export default User;
