import React from "react";

function RecipeList({recipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const handleDelete = (indexToDelete) =>
    setRecipes((recipes) =>
      recipes.filter((post, index) => index !== indexToDelete)
    );
  

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
          </tr>
        </thead>
        <tbody>
            {recipes.map((recipe, index) => (
            <tr>
              <td>
                <p key={index} className="name">{recipe.name}</p>
              </td>
              <td>
                <p key={index} className="cuisine">{recipe.cuisine}</p>
              </td>
                <img src={recipe.photo} key={index} />
              <td>
                <p key={index} className="ingredients">{recipe.ingredients}</p>
              </td>
              <td>
                <p key={index} className="preparation">{recipe.preparation}</p>
              </td>
              <td>
                <button name="delete" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
            ))};
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
