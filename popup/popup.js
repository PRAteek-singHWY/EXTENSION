document
  .getElementById("start-analysis")
  .addEventListener("click", async () => {
    chrome.runtime.sendMessage({ action: "startAnalysis" }, (response) => {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = response ? response.summary : "No results found!";
    });
  });

document.getElementById("start-review").addEventListener("click", async () => {
  chrome.runtime.sendMessage({ action: "startReview" }, (response) => {
    const resultsDiv = document.getElementById("review_window");
    resultsDiv.innerHTML = response ? response.summary : "No results found!";
  });
});
