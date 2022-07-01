import React from "react";
import recipesJSON from "../recipes.json";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const params = useParams();
//   <Link to={`/Recipes/${food.id}`}></Link>

  return (
    <div>
    <ol>
    {recipesJSON.map(function(food){
        return <li><Link to={`/Recipes/${food.id}`}>{food.name}</Link></li>
      })}
      </ol>
    </div>
  );
};

export default RecipeDetails;