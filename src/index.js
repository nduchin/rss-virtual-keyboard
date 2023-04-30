import './normalize.css';
import './app/component/textarea/textarea';
import './app/component/key/key';
import createKeyboard from './app/component/keyboard/keyboard';

const keyboard = createKeyboard();
document.body.append(keyboard);
