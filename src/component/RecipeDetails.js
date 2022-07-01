import React from "react";
import recipesJSON from "../recipes.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
    const params = useParams();


  return (
    <div>
    <ol>
    {recipesJSON.map(function(food){
        return <li>{food.name} {food.ingredients}{food.instructions}{food.vegetarian}</li> 
      })}
      </ol>
    
    </div>
  );
};

export default RecipeDetails;
