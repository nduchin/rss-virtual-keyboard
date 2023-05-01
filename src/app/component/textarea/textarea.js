import './textarea.css';
import './textarea.media.css';
import createElement from '../../utils/create-element';

const CssClasses = {
  TEXTAREA: 'textarea',
};

function createTextarea() {
  const textarea = createElement({ tagName: 'textarea', className: CssClasses.TEXTAREA });
  textarea.rows = 8;

  return textarea;
}

export default createTextarea;
