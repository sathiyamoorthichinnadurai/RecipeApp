import { useState ,useEffect} from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css'
import Recipecard from './components/Recipecard';
import Searchbar from './components/Searchbar';
import { Link } from 'react-router-dom';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  
  const [isLoading,setisLoading]=useState(false);
  const [querry,setQuerry]=useState("")
  const [recipes,setrecipes]=useState([])

  const searchRecipe = async ()=>{
    setisLoading(true)
    const url=apiUrl + querry;
    const res= await fetch(url)
    const data=await res.json();
    console.log(data)
    setrecipes(data.meals);
    setisLoading(false)
  }
  const reset =async ()=>{
    setisLoading(true)
    const url=apiUrl ;
    const res= await fetch(url)
    const data=await res.json();
    console.log(data)
    setrecipes(data.meals);
    setisLoading(false)
  }

  useEffect(()=>{
    searchRecipe();
  },[])

  const handlesubmit = event => {
    event.preventDefault()
    searchRecipe()
  };
  const onChange =  (e)=>{
    let meal=e.target.value
    setQuerry(meal)
  }
  
  
  
//console.log(querry)
  return (
    <>
    <div className="container">
      <div className="title">
      
      <h2 className='heading' onClick={reset}> Recipe App</h2>
      
      
      <p className='title-para'>'Food is my Fuel; Food is my Energy. Every recipe is a story. Good flavors, good food, good day. The kitchen is the heart of the home'.</p>
      </div>
      
      <Searchbar
       handlesubmit={handlesubmit}
       vlaue={querry}
       onChange={onChange}
       isLoading={isLoading}
       />
      <div className="recipes">
        {
          recipes ? recipes.map((recipe)=>(
            
           <Recipecard key={recipe.idMeal} recipe={recipe}/>
            
           
          )) :<div><h2>'Oops No Recipes!'</h2></div>
        }
      </div>
     
    </div>
    </>
  )
}

export default App
