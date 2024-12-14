chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "startAnalysis") {
    const results = await analyzeReviews(); // Call the analysis engine
    sendResponse({ summary: results.summary });
  }


  console.log();
  
  
  return true;
});
