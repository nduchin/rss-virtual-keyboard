import './keyboard.css';
import KeyInterface from '../key/key-interface';
import keyMap from '../../data/key-map';
import createElement from '../../utils/create-element';
import KeyboardEventHandler from '../../utils/keyboard-handler';

const CssClasses = {
  BLOCK: 'keyboard',
  SHELL: 'keyboard__shell',
  ROW: 'keyboard__row',
};

function createKeyboard(target) {
  const keyboardHandler = new KeyboardEventHandler();
  const keyboard = createElement({ tagName: 'div', className: [CssClasses.BLOCK, CssClasses.SHELL].join(' ') });
  keyMap.forEach((keyRow) => {
    const row = createElement({ tagName: 'div', className: CssClasses.ROW });
    keyRow.forEach((keyItem) => {
      const key = new KeyInterface(keyItem);
      row.append(key.shellElement);
      keyboardHandler.bound(key);
    });
    keyboard.append(row);
  });
  KeyInterface.typerInt.target = target;
  target.addEventListener('click', KeyInterface.typerInt.getSelection.bind(KeyInterface.typerInt));
  target.addEventListener('blur', KeyInterface.typerInt.resetSelection.bind(KeyInterface.typerInt));
  KeyInterface.typerInt.resetSelection();
  return keyboard;
}

export default createKeyboard;
