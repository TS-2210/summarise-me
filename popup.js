document.getElementById("summariseBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(tab.id, { action: "getText" }, async (response) => {
    const pageText = response.text.slice(0, 5000); // limit size
    const result = await fetch("http://localhost:8000/summarise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: pageText })
    });
    const data = await result.json();
  }
)
}
)