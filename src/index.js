import './normalize.css';
import './styles.css';
import './styles.media.css';

import createTextarea from './app/component/textarea/textarea';
import createKeyboard from './app/component/keyboard/keyboard';
import createElement from './app/utils/create-element';

const CssClasses = {
  BODY: 'wrap',
  TITLE: 'wrap__title',
  P: 'wrap__p',
  TEXTAREA: 'wrap__textarea',
  KEYBOARD: 'wrap__keyboard',
};

const textarea = createTextarea();
textarea.classList.add(CssClasses.TEXTAREA);
const lorem = 'Minim sunt eiusmod mollit dolore occaecat nulla ut id laboris veniam id. Eu culpa eiusmod ullamco cillum velit non dolor aliquip sit deserunt id est reprehenderit. Cillum esse tempor sint exercitation nisi exercitation est laboris.';
textarea.textContent = lorem;
const keyboard = createKeyboard(textarea);
keyboard.classList.add(CssClasses.KEYBOARD);
const div = createElement({});
const p1 = createElement({ tagName: 'p', className: CssClasses.P, textContent: 'Lenguage change: Ctrl + Alt' });
const p2 = createElement({ tagName: 'p', className: CssClasses.P, textContent: 'CapsLock is sticky. Alt, Ctrl and Shift are mouse-sticky' });
const p3 = createElement({ tagName: 'p', className: CssClasses.P, textContent: 'Use mouse, keys ← and → for navigation' });
const p4 = createElement({ tagName: 'p', className: CssClasses.P, textContent: 'Use Backspace and Del for deletions' });
const hr = createElement({ tagName: 'hr' });
const p5 = createElement({ tagName: 'p', className: CssClasses.P, textContent: 'Two adaptive styles are implemented' });
const p6 = createElement({ tagName: 'p', className: CssClasses.P, textContent: 'Designed and developed by ' });
const a = createElement({ tagName: 'a', textContent: 'nduchin' });
a.href = 'https://github.com/nduchin';
a.target = '_blank';
p6.append(a);

div.append(p1, p2, p3, p4, hr, p5, p6);

document.body.className = CssClasses.BODY;
document.body.append(
  createElement({ tagName: 'h1', className: CssClasses.TITLE, textContent: 'Virtual Keyboard' }),
  textarea,
  keyboard,
  div,
);
