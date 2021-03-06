import ingredientService from "./ingredient-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const IngredientFormEditor = () => {
  const {id} = useParams()
  const [ingredient, setIngredient] = useState({})
  useEffect(() => {
    if(id !== "new") {
      findIngredientById(id)
    }
  }, []);

  const findIngredientById = (id) => {
    ingredientService.findIngredientById(id)
    .then(ingredient => setIngredient(ingredient))
  }
  const deleteIngredient = (id) =>
      ingredientService.deleteIngredient(id)
      .then(() => history.back())

  const createIngredient = (ingredient) =>
      ingredientService.createIngredient(ingredient)
      .then(() => history.back())

  const updateIngredient = (id, newIngredient) =>
      ingredientService.updateIngredient(id, newIngredient)
      .then(() => history.back())


  return (
      <div>
        <h2>Ingredient Editor</h2>
        <label>Id</label>
        <input value={ingredient.id} placeholder="Auto Generated" className="form-control"/><br/>

        <label>Name</label>
        <input onChange={(e) =>
            setIngredient(ingredient => ({...ingredient, name: e.target.value}))}
               value={ingredient.name} className="form-control"/>

        <label>PrepTime</label>
        <input onChange={(e) =>
            setIngredient(ingredient =>({...ingredient, prepTime: e.target.value}))}
               value={ingredient.prepTime} className="form-control"/>

        <button onClick={() => {history.back()}}
                className="btn btn-warning">Cancel</button>

        <button onClick={() => deleteIngredient(ingredient.id)} className="btn btn-danger">Delete</button>
        <button onClick={() => updateIngredient(ingredient.id, ingredient)}
                className="btn btn-primary">Save</button>
        <button onClick={() => createIngredient(ingredient)} className="btn btn-success">Create</button>
        <br/>
        <Link to={`ingredientAmount/ingredients/${ingredient.id}`}>
          Ingredient Amount Information
        </Link>
      </div>
  )
}

export default IngredientFormEditor