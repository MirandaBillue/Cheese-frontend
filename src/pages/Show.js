import { useState } from "react"

function Show(props) {
    const id = props.match.params.id
    const cheese = props.cheese
    const cheeses = cheese.find(c => c._id === id)
  
    // state for form
  const [ editForm, setEditForm ] = useState(cheeses);

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  // handlesubmit for form
  const handleSubmit = event => {
    event.preventDefault();
    props.updateCheese(editForm, cheeses._id);
    // redirect cheese back to index
    props.history.push("/");
  }

  const removeCheeses = () => {
    props.deleteCheese(cheeses._id);
    props.history.push("/");
  }

  return (
    <div className="cheeses">
      <h1>{cheeses.name}</h1>
      <h2>{cheeses.countryOfOrigin}</h2>
      <img src={cheeses.image} alt={cheeses.name} />
      <button id="delete" onClick={removeCheeses}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Name of Cheese"
          onChange={handleChange}
        />
           <input
          type="text"
          value={editForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country Of Origin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
     
        <input type="submit" value="Update cheeses" />
      </form>
    </div>
  );
}

export default Show;