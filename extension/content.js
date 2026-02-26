function extractPageText() {
  const paragraphs = document.querySelectorAll("p");
  let text = "";
  paragraphs.forEach(p => {
    text += p.innerText + " ";
  });
  return text;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getText") {
    const pageText = extractPageText();
    sendResponse({ text: pageText });
  }
});