import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = "4ae78c70";
  const APP_KEY = "bd4f3d2dace09b3026d1b8a1c43ca9f4";
  
  //UseState
  const [recipes, setRecipes] = useState([]);
  const [search , setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(()=>{
    getRecipes();    
  },[query]);

  const getRecipes = () => {
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(response=>{
        return response.json();
      }).then((data) =>{
        setRecipes(data.hits);
        console.log(data.hits);
      }).catch(err =>{
        console.log({message: err});
      });
  }

  const updateSearch = (event) =>{
    setSearch(event.target.value);    
  }

  const getSearch = (event)=>{
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">      
      <form onSubmit={getSearch} className="search-form">
        <input type="text" onChange={updateSearch} className="search-bar" placeholder="Main Ingredient" value={search} />
        <button type="submit" className="search-btn">Search</button>
      </form>
      <div className="recipe-grid">
        {recipes.map(recipe =>(
          <Recipe 
            key ={recipe.recipe.label}
            title = {recipe.recipe.label}
            calorie = {recipe.recipe.calories}
            imagesrc = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            prep = {recipe.recipe.url}
          ></Recipe>
        ))}
      </div>
    </div>
  );
}

export default App;
