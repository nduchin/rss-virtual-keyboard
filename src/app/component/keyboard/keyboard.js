import './keyboard.css';
import { Key } from '../key/key';
import keyMap from '../../data/key-map';
import createElement from '../../utils/create-element';
import KeyboardEventHandler from '../../utils/keyboard-handler';

const CssClasses = {
  BLOCK: 'keyboard',
  SHELL: 'keyboard__shell',
  ROW: 'keyboard__row',
};

const keyboardHandler = new KeyboardEventHandler();

function createKeyboard() {
  const keyboard = createElement({ tagName: 'div', className: [CssClasses.BLOCK, CssClasses.SHELL].join(' ') });
  keyMap.forEach((keyRow) => {
    const row = createElement({ tagName: 'div', className: CssClasses.ROW });
    keyRow.forEach((keyItem) => {
      const key = new Key(keyItem);
      row.append(key.getHtmlElem());
      keyboardHandler.bound(key);
    });
    keyboard.append(row);
  });
  return keyboard;
}

export default createKeyboard;
