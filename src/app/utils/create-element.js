export default function createElement({
  tagName, className, textContent, onClickHendler,
}) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (onClickHendler) {
    element.addEventListener('click', onClickHendler);
  }
  return element;
}
