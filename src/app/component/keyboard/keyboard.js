import './keyboard.css';
import Key from '../key/key';
import keyMap from '../../key-map/key-map';

const CssClasses = {
  BLOCK: 'keyboard',
  SHELL: 'keyboard__shell',
  ROW: 'keyboard__row',
};

function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.className = [CssClasses.BLOCK, CssClasses.SHELL].join(' ');

  keyMap.forEach((keyRow) => {
    const row = document.createElement('div');
    row.className = CssClasses.ROW;
    keyRow.forEach((keyItem) => {
      const key = new Key(keyItem).getHtmlElem();
      row.append(key);
    });
    keyboard.append(row);
  });

  return keyboard;
}

export default createKeyboard;
