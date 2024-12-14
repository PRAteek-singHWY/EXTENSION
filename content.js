// Extract reviews from the page (simplified for demo purposes)
const reviews = Array.from(document.querySelectorAll(".g")).map((review) => {
  const text = review.querySelector(".BHGqjC").textContent || "";
  return { id: review.id, text };
});

// Send review data to background.js for analysis
chrome.runtime.sendMessage(
  { type: "analyzeReviews", reviews: reviews },
  (response) => {
    const analysisResults = response.analysis;
    highlightReviews(analysisResults);
  }
);

// Highlight reviews based on analysis results
function highlightReviews(analysisResults) {
  analysisResults.forEach((result) => {
    const reviewElement = document.getElementById(result.id);
    if (reviewElement) {
      const color =
        result.status === "red"
          ? "red"
          : result.status === "yellow"
          ? "yellow"
          : "green";
      reviewElement.style.border = `2px solid ${color}`;
    }
  });
}
