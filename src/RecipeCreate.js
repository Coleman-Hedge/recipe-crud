import React, { useState } from "react";

function RecipeCreate({recipes, handleSetRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
//   const [name, setName] = useState("");
//   const [cuisine, setCuisine] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [rating, setRating] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [preparation, setPreparation] = useState("");
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    rating: 0,
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };
  const handleSubmit = () => {
    console.log("Submitted")
    handleSetRecipes(formData);
    
    setFormData(initialFormData);
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label hmtlFor="name">
                Name:
                <input id="name" type="text" name="name" onChange={handleChange} value={formData.name} />
            </label>
            </td>
            <td>
              <label hmtlFor="cuisine">
                Cuisine:
                <input id="cuisine" type="text" name="cuisine" onChange={handleChange} value={formData.cuisine} />
              </label>
            </td>
            <td>
              <label hmtlFor="photo">
                Photo:
                <input id="photo" type="url" name="photo" onChange={handleChange} value={formData.photo} />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                Ingredients:
                <textarea name="ingredients" id="ingredients" row={3} col={10} onChange={handleChange} value={formData.ingredients} />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                Preparation:
                <textarea name="preparation" id="preparation" row={3} col={10} onChange={handleChange} value={formData.preparation} />
              </label>
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
