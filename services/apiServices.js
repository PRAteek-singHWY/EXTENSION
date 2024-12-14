export async function analyzeReviewsAPI(reviews) {
  const response = await fetch("https://api.example.com/analyze-reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reviews }),
  });
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return await response.json();
}
