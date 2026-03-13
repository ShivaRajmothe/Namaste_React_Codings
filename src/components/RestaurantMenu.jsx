
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      // guard: require an id
      if (!id) {
        setError("No recipe id provided in the route.");
        return;
      }

      setError("");
      setResInfo(null); // show Shimmer while loading

      const url = `https://dummyjson.com/recipes/${id}`;
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`Request failed: ${resp.status} ${resp.statusText}`);
      }
      const json = await resp.json();
      setResInfo(json);
      // console.log("Single recipe:", json);
    } catch (e) {
      console.error(e);
      setError(e?.message || "Failed to load recipe.");
    }
  };

  // Loading
  if (!error && resInfo === null) return <Shimmer />;

  // Error
  if (error) {
    return (
      <div style={{ padding: "1rem", color: "crimson" }}>
        <h3>Couldn’t load the recipe</h3>
        <p>{error}</p>
      </div>
    );
  }

  // Normalize: the single recipe object -> array of one item, so the existing map() UI works unchanged
  const recipesArray = resInfo ? [resInfo] : [];

  // Pick only the fields you need
  const minimalRecipes = recipesArray.map(
    ({ name, cuisine, rating, cookTimeMinutes, ingredients }) => ({
      name,
      cuisine,
      rating,
      cookTimeMinutes,
      ingredients,
    })
  );

  // Guard: no data case
  if (!minimalRecipes.length) {
    return (
      <div style={{ padding: "1rem" }}>
        <h3>No recipe found</h3>
        <p>Try a different id.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {minimalRecipes.map(
          ({ name, cuisine, rating, cookTimeMinutes, ingredients }, idx) => (
            <li
              key={`${name}-${idx}`}
              style={{
                border: "1px solid #eee",
                borderRadius: 8,
                padding: "12px 16px",
                marginBottom: 12,
                background: "#fff",
              }}
            >
              <h3 style={{ margin: "0 0 6px" }}>{name}</h3>
              {cuisine && (
                <h4 style={{ margin: "0 0 8px", color: "#666" }}>{cuisine}</h4>
              )}
              {ingredients?.length ? (
                <p style={{ margin: "0 0 8px" }}>
                  <strong>Ingredients:</strong> {ingredients.join(", ")}
                </p>
              ) : null}
              <p style={{ margin: 0 }}>
                <span>⭐ Rating: {rating ?? "N/A"}</span> {" · "}
                <span>⏱️ Cook Time: {cookTimeMinutes ?? "—"} min</span>
              </p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;