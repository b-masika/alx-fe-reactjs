import React from "react";
import useRecipeStore from "./recipeStore.js";

export default function SearchBar () {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleChange}
            style={{
                padding: "10px",
                margin: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
            }}
        />
    );
}
