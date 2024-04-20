import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const handleuserform = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email }
    console.log(user)

    fetch("http://localhost:5000/users",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert("users added successfully");
        event.target.reset();
      }
    })
  }

  return (
    <>

      <h1>Simple Mongodb Testing</h1>
      <form onSubmit={handleuserform}>
        <label>Name</label>
        <input type="text" name="name" id="name" />
        <label>Email</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Submit</button>
      </form>
      <Link to={"/users"}> <button type="button">Show All users</button> </Link>

    </>
  )
}

export default App
