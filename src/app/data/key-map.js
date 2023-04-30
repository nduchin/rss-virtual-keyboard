const keyMap = [
  [
    { keyCode: 'Backquote', keyType: 'char', keyVal: [{ type: 'punct', main: '`', alt: '~' }, { type: 'letter', main: 'ё', alt: 'Ё' }] },
    { keyCode: 'Digit1', keyType: 'char', keyVal: [{ type: 'punct', main: '1', alt: '!' }, { type: 'punct', main: '1', alt: '!' }] },
    { keyCode: 'Digit2', keyType: 'char', keyVal: [{ type: 'punct', main: '2', alt: '@' }, { type: 'punct', main: '2', alt: '"' }] },
    { keyCode: 'Digit3', keyType: 'char', keyVal: [{ type: 'punct', main: '3', alt: '#' }, { type: 'punct', main: '3', alt: '№' }] },
    { keyCode: 'Digit4', keyType: 'char', keyVal: [{ type: 'punct', main: '4', alt: '$' }, { type: 'punct', main: '4', alt: ';' }] },
    { keyCode: 'Digit5', keyType: 'char', keyVal: [{ type: 'punct', main: '5', alt: '%' }, { type: 'punct', main: '5', alt: '%' }] },
    { keyCode: 'Digit6', keyType: 'char', keyVal: [{ type: 'punct', main: '6', alt: '^' }, { type: 'punct', main: '6', alt: ':' }] },
    { keyCode: 'Digit7', keyType: 'char', keyVal: [{ type: 'punct', main: '7', alt: '&' }, { type: 'punct', main: '7', alt: '?' }] },
    { keyCode: 'Digit8', keyType: 'char', keyVal: [{ type: 'punct', main: '8', alt: '*' }, { type: 'punct', main: '8', alt: '*' }] },
    { keyCode: 'Digit9', keyType: 'char', keyVal: [{ type: 'punct', main: '9', alt: '(' }, { type: 'punct', main: '9', alt: '(' }] },
    { keyCode: 'Digit0', keyType: 'char', keyVal: [{ type: 'punct', main: '0', alt: ')' }, { type: 'punct', main: '0', alt: ')' }] },
    { keyCode: 'Minus', keyType: 'char', keyVal: [{ type: 'punct', main: '-', alt: '_' }, { type: 'punct', main: '-', alt: '_' }] },
    { keyCode: 'Equal', keyType: 'char', keyVal: [{ type: 'punct', main: '=', alt: '+' }, { type: 'punct', main: '=', alt: '+' }] },
    {
      keyCode: 'Backspace', keyType: 'spec', keyVal: 'Backspace', options: ['stretch'],
    },
  ],
  [
    {
      keyCode: 'Tab', keyType: 'spec', keyVal: 'Tab', options: ['stretch', 'semiwide'],
    },
    { keyCode: 'KeyQ', keyType: 'char', keyVal: [{ type: 'letter', main: 'q', alt: 'Q' }, { type: 'letter', main: 'й', alt: 'Й' }] },
    { keyCode: 'KeyW', keyType: 'char', keyVal: [{ type: 'letter', main: 'w', alt: 'W' }, { type: 'letter', main: 'ц', alt: 'Ц' }] },
    { keyCode: 'KeyE', keyType: 'char', keyVal: [{ type: 'letter', main: 'e', alt: 'E' }, { type: 'letter', main: 'у', alt: 'У' }] },
    { keyCode: 'KeyR', keyType: 'char', keyVal: [{ type: 'letter', main: 'r', alt: 'R' }, { type: 'letter', main: 'к', alt: 'К' }] },
    { keyCode: 'KeyT', keyType: 'char', keyVal: [{ type: 'letter', main: 't', alt: 'T' }, { type: 'letter', main: 'е', alt: 'Е' }] },
    { keyCode: 'KeyY', keyType: 'char', keyVal: [{ type: 'letter', main: 'y', alt: 'Y' }, { type: 'letter', main: 'н', alt: 'Н' }] },
    { keyCode: 'KeyU', keyType: 'char', keyVal: [{ type: 'letter', main: 'u', alt: 'U' }, { type: 'letter', main: 'г', alt: 'Г' }] },
    { keyCode: 'KeyI', keyType: 'char', keyVal: [{ type: 'letter', main: 'i', alt: 'I' }, { type: 'letter', main: 'ш', alt: 'Ш' }] },
    { keyCode: 'KeyO', keyType: 'char', keyVal: [{ type: 'letter', main: 'o', alt: 'O' }, { type: 'letter', main: 'щ', alt: 'Щ' }] },
    { keyCode: 'KeyP', keyType: 'char', keyVal: [{ type: 'letter', main: 'p', alt: 'P' }, { type: 'letter', main: 'з', alt: 'З' }] },
    { keyCode: 'BracketLeft', keyType: 'char', keyVal: [{ type: 'punct', main: '[', alt: '{' }, { type: 'letter', main: 'х', alt: 'Х' }] },
    { keyCode: 'BracketRight', keyType: 'char', keyVal: [{ type: 'punct', main: ']', alt: '}' }, { type: 'letter', main: 'ъ', alt: 'Ъ' }] },
    { keyCode: 'Backslash', keyType: 'char', keyVal: [{ type: 'punct', main: '\\', alt: '|' }, { type: 'punct', main: '\\', alt: '/' }] },
    { keyCode: 'Delete', keyType: 'spec', keyVal: 'Del' },
  ],
  [
    {
      keyCode: 'CapsLock', keyType: 'spec', keyVal: 'CapsLock', options: ['stretch', 'sticky'],
    },
    { keyCode: 'KeyA', keyType: 'char', keyVal: [{ type: 'letter', main: 'a', alt: 'A' }, { type: 'letter', main: 'ф', alt: 'Ф' }] },
    { keyCode: 'KeyS', keyType: 'char', keyVal: [{ type: 'letter', main: 's', alt: 'S' }, { type: 'letter', main: 'ы', alt: 'Ы' }] },
    { keyCode: 'KeyD', keyType: 'char', keyVal: [{ type: 'letter', main: 'd', alt: 'D' }, { type: 'letter', main: 'в', alt: 'В' }] },
    { keyCode: 'KeyF', keyType: 'char', keyVal: [{ type: 'letter', main: 'f', alt: 'F' }, { type: 'letter', main: 'а', alt: 'А' }] },
    { keyCode: 'KeyG', keyType: 'char', keyVal: [{ type: 'letter', main: 'g', alt: 'G' }, { type: 'letter', main: 'п', alt: 'П' }] },
    { keyCode: 'KeyH', keyType: 'char', keyVal: [{ type: 'letter', main: 'h', alt: 'H' }, { type: 'letter', main: 'р', alt: 'Р' }] },
    { keyCode: 'KeyJ', keyType: 'char', keyVal: [{ type: 'letter', main: 'j', alt: 'J' }, { type: 'letter', main: 'о', alt: 'О' }] },
    { keyCode: 'KeyK', keyType: 'char', keyVal: [{ type: 'letter', main: 'k', alt: 'K' }, { type: 'letter', main: 'л', alt: 'Л' }] },
    { keyCode: 'KeyL', keyType: 'char', keyVal: [{ type: 'letter', main: 'l', alt: 'L' }, { type: 'letter', main: 'д', alt: 'Д' }] },
    { keyCode: 'Semicolon', keyType: 'char', keyVal: [{ type: 'punct', main: ';', alt: ':' }, { type: 'letter', main: 'ж', alt: 'Ж' }] },
    { keyCode: 'Quote', keyType: 'char', keyVal: [{ type: 'punct', main: '\'', alt: '"' }, { type: 'letter', main: 'э', alt: 'Э' }] },
    {
      keyCode: 'Enter', keyType: 'spec', keyVal: 'Enter', options: ['stretch'],
    },
  ],
  [
    {
      keyCode: 'ShiftLeft', keyType: 'spec', keyVal: 'Shift', options: ['stretch'],
    },
    { keyCode: 'KeyZ', keyType: 'char', keyVal: [{ type: 'letter', main: 'z', alt: 'Z' }, { type: 'letter', main: 'я', alt: 'Я' }] },
    { keyCode: 'KeyX', keyType: 'char', keyVal: [{ type: 'letter', main: 'x', alt: 'X' }, { type: 'letter', main: 'ч', alt: 'Ч' }] },
    { keyCode: 'KeyC', keyType: 'char', keyVal: [{ type: 'letter', main: 'c', alt: 'C' }, { type: 'letter', main: 'с', alt: 'С' }] },
    { keyCode: 'KeyV', keyType: 'char', keyVal: [{ type: 'letter', main: 'v', alt: 'V' }, { type: 'letter', main: 'м', alt: 'М' }] },
    { keyCode: 'KeyB', keyType: 'char', keyVal: [{ type: 'letter', main: 'b', alt: 'B' }, { type: 'letter', main: 'и', alt: 'И' }] },
    { keyCode: 'KeyN', keyType: 'char', keyVal: [{ type: 'letter', main: 'n', alt: 'N' }, { type: 'letter', main: 'т', alt: 'Т' }] },
    { keyCode: 'KeyM', keyType: 'char', keyVal: [{ type: 'letter', main: 'm', alt: 'M' }, { type: 'letter', main: 'ь', alt: 'Ь' }] },
    { keyCode: 'Comma', keyType: 'char', keyVal: [{ type: 'punct', main: ',', alt: '<' }, { type: 'letter', main: 'б', alt: 'Б' }] },
    { keyCode: 'Period', keyType: 'char', keyVal: [{ type: 'punct', main: '.', alt: '>' }, { type: 'letter', main: 'ю', alt: 'Ю' }] },
    { keyCode: 'Slash', keyType: 'char', keyVal: [{ type: 'punct', main: '/', alt: '?' }, { type: 'punct', main: '.', alt: ',' }] },
    { keyCode: 'ArrowUp', keyType: 'spec', keyVal: '↑' },
    {
      keyCode: 'ShiftRight', keyType: 'spec', keyVal: 'Shift', options: ['stretch'],
    },
  ],
  [
    {
      keyCode: 'ControlLeft', keyType: 'spec', keyVal: 'Ctrl', options: ['semiwide'],
    },
    {
      keyCode: 'MetaLeft', keyType: 'spec', keyVal: 'Win', options: ['semiwide'],
    },
    {
      keyCode: 'AltLeft', keyType: 'spec', keyVal: 'Alt', options: ['semiwide'],
    },
    {
      keyCode: 'Space', keyType: 'spec', keyVal: '', options: ['stretch'],
    },
    {
      keyCode: 'AltRight', keyType: 'spec', keyVal: 'Alt', options: ['semiwide'],
    },
    { keyCode: 'ArrowLeft', keyType: 'spec', keyVal: '←' },
    { keyCode: 'ArrowDown', keyType: 'spec', keyVal: '↓' },
    { keyCode: 'ArrowRight', keyType: 'spec', keyVal: '→' },
    {
      keyCode: 'ControlRight', keyType: 'spec', keyVal: 'Ctrl', options: ['semiwide'],
    },
  ],
];

export default keyMap;
