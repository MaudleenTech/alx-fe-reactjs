import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setErrors("All fields are required.");
      return;
    }

    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientsList.length < 2) {
      setErrors("Please include at least two ingredients (one per line).");
      return;
    }

    // If validation passes
    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps,
    };

    console.log("Recipe submitted:", newRecipe);

    // Clear fields after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>

      {/* Error Message */}
      {errors && (
        <p className="bg-red-100 text-red-800 p-3 mb-4 rounded-md text-sm">
          {errors}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 h-32 focus:ring focus:ring-blue-300 outline-none"
            placeholder="Example:&#10;2 tomatoes&#10;1 cup of rice"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps
          </label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 h-40 focus:ring focus:ring-blue-300 outline-none"
            placeholder="Write the cooking instructions here..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
export default AddRecipeForm;