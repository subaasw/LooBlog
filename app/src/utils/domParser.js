export default function parseTextFromHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
}
