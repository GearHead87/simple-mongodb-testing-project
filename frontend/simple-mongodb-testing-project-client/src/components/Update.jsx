import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadedUser = useLoaderData();
    console.log(loadedUser._id)

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    alert("User data updated")
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <label>Name</label>
                <input type="text" name="name" id="name" defaultValue={loadedUser.name} />
                <label>Email</label>
                <input type="email" name="email" id="email" defaultValue={loadedUser.email} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Update;