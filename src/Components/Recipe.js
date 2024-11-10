// import React, { useState,useEffect } from 'react'
// import { NavLink, json, useParams } from 'react-router-dom';

// const Recipe = ({detail}) => {
//     const [data, setData] = useState()
//     const {meal} = useParams();
    
  
        
//        const myFun = async () =>{
//         const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
//         const jsonData = await get.json();
//         // console.log(jsonData.meals[0])
//          setData(jsonData.meals[0])
//        }
       
//     if(meal != ""){
//         myFun()
//     }

   
     
     
//   return (
//     <>
//     {!data ?  "Not Found" :  
    
//     <div className='msg'>
      
//      <img src={data.strMealThumb}/>
//         <div className='info'>
//         <h1>Recipe Detail's</h1>
//          <button>{data.strMeal}</button>
//         <h3>Intructions :</h3>
//         <p>{data.strInstructions}</p>
//         </div>
//     </div> }
        
//     </>
     
     
//   )
// }

// export default Recipe;




import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

const Recipe = () => {
  const { mealid } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [data, setData] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      if (mealid) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await response.json();
        setData(jsonData.meals ? jsonData.meals[0] : null);
      }
    };

    fetchRecipe();
  }, [mealid]);

  if (!data) return <p>Not Found</p>;

  // Function to handle back navigation
  const handleBackToMeals = () => {
    navigate('/'); // Navigate back to the meals page
  };

  return (
    <div className='recipeContainer'>
      <img src={data.strMealThumb} alt={data.strMeal} />
      <div className='info'>
        <h1>{data.strMeal}</h1>
        <h3>Instructions:</h3>
        <p>{data.strInstructions}</p>
        <button onClick={handleBackToMeals}>Back to Meals</button> {/* Add onClick handler */}
      </div>
    </div>
  );
};

export default Recipe;
