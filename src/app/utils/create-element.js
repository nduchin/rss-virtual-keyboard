export default function createElement({
  tagName, className, events,
}) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (events) {
    events.forEach((item) => {
      element.addEventListener(item.event, item.handler);
    });
  }
  return element;
}
