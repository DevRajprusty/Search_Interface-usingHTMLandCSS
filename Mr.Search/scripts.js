const suggestions = ["HTML", "CSS", "JavaScript", "Node.js", "React", "Express", "MongoDB", "Bootstrap", "PHP", "SQL"];

function showSuggestions(query) {
    let suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = "";

    if (query.length === 0) {
        return;
    }

    let filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().startsWith(query.toLowerCase()));

    filteredSuggestions.forEach(suggestion => {
        let suggestionItem = document.createElement("div");
        suggestionItem.innerText = suggestion;
        suggestionItem.addEventListener("click", () => {
            document.getElementById("search-bar").value = suggestion;
            suggestionsBox.innerHTML = "";
        });
        suggestionsBox.appendChild(suggestionItem);
    });
}

document.getElementById("search-btn").addEventListener("click", function() {
    let query = document.getElementById("search-bar").value;
    let resultsContainer = document.getElementById("results");

    if (query.length === 0) {
        resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    let searchResults = suggestions.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    if (searchResults.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        resultsContainer.innerHTML = searchResults.map(result => `
            <div class="result-item">
                <h3>${result}</h3>
                <p>Related content about ${result}.</p>
            </div>
        `).join("");
    }
});
