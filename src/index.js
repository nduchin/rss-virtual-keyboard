import './normalize.css';
import './styles.css';
import './app/component/textarea/textarea';
import createKeyboard from './app/component/keyboard/keyboard';

const keyboard = createKeyboard();
document.body.append(keyboard);
