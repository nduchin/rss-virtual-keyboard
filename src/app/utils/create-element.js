export default function createElement({
  tagName, className, events, textContent,
}) {
  const element = document.createElement(tagName || 'div');
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (events) {
    events.forEach((item) => {
      element.addEventListener(item.event, item.handler);
    });
  }
  return element;
}
