import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import { useParams } from "react-router-dom";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import { useRecipeStore } from "./components/recipeStore";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
                <h1>Recipe Sharing App</h1>

                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </div>
            </>
          }
        />

        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
