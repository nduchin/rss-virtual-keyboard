import './normalize.css';
import './styles.css';
import createTextarea from './app/component/textarea/textarea';
import createKeyboard from './app/component/keyboard/keyboard';

const CssClasses = {
  BODY: 'wrap',
  TEXTAREA: 'wrap__textarea',
  KEYBOARD: 'wrap__keyboard',
};

const textarea = createTextarea();
textarea.classList.add(CssClasses.TEXTAREA);
const lorem = 'Fugiat aliquip nisi veniam est. Aute sint dolore Lorem in. Eiusmod enim nulla in nisi cupidatat ea eiusmod laborum ipsum. Minim officia sunt fugiat aliquip. Ut aute et elit id aute.\nIncididunt duis elit cupidatat duis Lorem. Ea tempor elit elit do. Veniam dolor enim consequat anim dolor. Dolore ullamco irure eu velit consequat id sit aliquip nulla aliqua deserunt minim Lorem.\nCillum nostrud magna commodo excepteur excepteur veniam laboris culpa. Minim pariatur proident fugiat ea sunt fugiat ex enim sint in laboris nulla. Mollit enim aute voluptate dolor velit labore fugiat occaecat aliqua labore consectetur. Et laborum excepteur officia qui laboris elit laboris aute.';
textarea.textContent = lorem;
const keyboard = createKeyboard(textarea);
keyboard.classList.add(CssClasses.KEYBOARD);
document.body.className = CssClasses.BODY;
document.body.append(textarea, keyboard);
