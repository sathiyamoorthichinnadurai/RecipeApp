import React from 'react'
import { Link } from 'react-router-dom';
import '/src/app.css'
import Recipe from '../routes/recipe';

function Recipecard({recipe}) {
    const {idMeal,strMeal,strCategory,strMealThumb,strIngredient1}=recipe;
  return (
    <>
    
        <div className="card">
            
            <img src={strMealThumb} alt={strMeal}  className='card-image'/>
            <div className="card-body">
                <span className='category'>{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target='_self'>Ingerident</a>
                
                 
                
               
            </div>
        </div>
       


    </>
  )
}

export default Recipecard