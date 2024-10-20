import React, { useEffect, useState } from "react";
import Header from "./components/header-cocktail";
import Footer from "./components/footer-cocktail";
import Cocktail from "./components/Cocktail";
import "./App.css";
import "./App.css";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch cocktails based on search term
  useEffect(() => {
    // Don't fetch if searchTerm is empty
    if (!searchTerm.trim()) return; 
    
    // Fetch if searchTerm is not empty
    async function fetchCocktails() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/cocktail?name=${searchTerm}`,
          {
            headers: {
              "X-Api-Key": "BDOmGZmoqwaPIl7a43HOqUHozPTOQrnif2VuUClt",
            },
          }
        );
        const data = await response.json();
        setCocktails(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching cocktails:", error);
        setCocktails([]);
      } finally {
        setLoading(false);
      }
    }
    fetchCocktails();
  }, [searchTerm]);

  // Filter cocktails by name or ingredients
  const filteredCocktails = cocktails.filter((cocktail) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      cocktail.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      cocktail.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  });

  return (
    <div className="App">
      <Header />

      <div className="search-bar">
        <h2>Write the name or ingredient of the drink you are looking for:</h2>
        <input
          type="text"
          placeholder="Enter cocktail name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="cocktail-list">
        {loading ? (
          <p>Loading cocktails...</p>
        ) : filteredCocktails.length > 0 ? (
          <div>
            <p className="center title">
              {filteredCocktails.length === 1
                ? "You have 1 option:"
                : `You have ${filteredCocktails.length} options:`}
            </p>
            {filteredCocktails.map((cocktail) => (
              <Cocktail
                key={cocktail.name}
                name={cocktail.name}
                ingredients={cocktail.ingredients}
                instructions={cocktail.instructions}
              />
            ))}
          </div>
        ) : (
          searchTerm && <p>No cocktails found</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;