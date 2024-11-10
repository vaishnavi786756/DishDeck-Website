// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import Recipe from './Recipe';

// const Cards = ({detail}) => {
//     console.log(detail);
//   return (
//     <div className='meals'>
//         {
//            !detail ? "Sorry Data Not Found" : detail.map((curItem,index)=>{
//             console.log(curItem)
//                 return(
//                     <div className='mealImg'>
//                     <img src={curItem.strMealThumb}/>
//                     <p>{curItem.strMeal}</p>
//                     <NavLink to={`/${curItem.idMeal}`}> <button >Recipe </button></NavLink>
                    
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Cards

import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = ({ detail }) => {
  return (
    <div className='meals'>
      {!detail
        ? "Sorry, Data Not Found"
        : detail.map((curItem) => (
            <div key={curItem.idMeal} className='mealImg'>
              <img src={curItem.strMealThumb} alt={curItem.strMeal} />
              <p>{curItem.strMeal}</p>
              <NavLink to={`/${curItem.idMeal}`}>
                <button>Recipe</button>
              </NavLink>
            </div>
          ))}
    </div>
  );
};

export default Cards;
