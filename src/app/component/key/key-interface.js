import './key-interface.css';
import createElement from '../../utils/create-element';
import TyperInterface from './typer-interface';

const CssClasses = {
  BLOCK: 'key',
  WIDE: 'key_semiwide',
  SHELL: 'key__shell',
  SHELL_ACTIVE: 'key__shell_active',
  SHELL_STRETCH: 'key__shell_stretch',
  SH: {
    spec: 'key__shell_type_spec',
    letter: 'key__shell_type_letter',
    punct: 'key__shell_type_punct',
  },
  DESCRIPT: 'key__desc',
  DESC: {
    spec: 'key__desc_type_spec',
    letterMain: 'key__desc_type_letter-main',
    letterAlt: 'key__desc_type_letter-alt',
    punctMain: 'key__desc_type_punct-main',
    punctAlt: 'key__desc_type_punct-alt',
  },
};
class KeyInterface {
  static {
    KeyInterface.array = [];
    KeyInterface.case = [false, false];
    KeyInterface.languages = [];
    KeyInterface.lang = 0;
    KeyInterface.typerInt = new TyperInterface();
  }

  constructor(keyMapItem) {
    if (!(keyMapItem instanceof Object)) { throw new Error('wrong keymap item'); }
    this.keyType = (keyMapItem.keyType === 'spec') ? 'spec' : keyMapItem.keyVal[0].type;
    this.keyId = keyMapItem.keyCode;
    this.keyValues = keyMapItem.keyVal;
    this.keyActive = false;
    this.char = '';
    this.options = keyMapItem.options;
    this.shellElement = createElement({
      tagName: 'div',
      className: [CssClasses.BLOCK, CssClasses.SHELL, CssClasses.SH[this.keyType]].join(' '),
      events: [{ event: 'mousedown', handler: this.click.bind(this) }],
    });

    /* Basic markup */
    if (this.keyType === 'spec') {
      this.descName = createElement({ tagName: 'span', className: [CssClasses.DESCRIPT, CssClasses.DESC.spec].join(' ') });

      this.shellElement.append(this.descName);
    } else {
      this.descMain = createElement({ tagName: 'span', className: CssClasses.DESCRIPT });
      this.descAlt = createElement({ tagName: 'span', className: CssClasses.DESCRIPT });

      this.shellElement.append(this.descMain, this.descAlt);
    }

    /* apply styles and charset */
    this.setShellStyle(true);
    this.setChar();

    KeyInterface.array.push(this);
  }

  setShellStyle(forceType) {
    if (forceType || (this.keyType !== 'spec' && this.keyType !== this.keyValues[KeyInterface.lang].type)) {
      if (this.keyType === 'spec') {
        this.shellElement.className = [CssClasses.BLOCK, CssClasses.SHELL, CssClasses.SH.spec].join(' ');
        this.descName.className = [CssClasses.DESCRIPT, CssClasses.DESC.spec].join(' ');
      } else {
        this.keyType = this.keyValues[KeyInterface.lang].type;

        this.shellElement.className = [CssClasses.BLOCK, CssClasses.SHELL, CssClasses.SH[this.keyType]].join(' ');
        this.descMain.className = [CssClasses.DESCRIPT, CssClasses.DESC[`${this.keyType}Main`]].join(' ');
        this.descAlt.className = [CssClasses.DESCRIPT, CssClasses.DESC[`${this.keyType}Alt`]].join(' ');
      }
    }

    if (this.options) {
      if (this.options.includes('stretch')) {
        this.shellElement.classList.add(CssClasses.SHELL_STRETCH);
      }
      if (this.options.includes('semiwide')) {
        this.shellElement.classList.add(CssClasses.WIDE);
      }
    }
  }

  setChar(shiftCheck) {
    if (this.keyType === 'spec') {
      this.descName.textContent = this.keyValues;
    } else {
      let swap = false;
      if (shiftCheck) {
        if (this.keyType === 'letter') {
          swap = !(KeyInterface.case[0] === KeyInterface.case[1]);
        } else {
          swap = !!KeyInterface.case[0];
        }
      }
      console.debug(this);
      this.char = this.keyValues[KeyInterface.lang][swap ? 'alt' : 'main'];
      this.descMain.textContent = this.keyValues[KeyInterface.lang][swap ? 'alt' : 'main'];
      this.descAlt.textContent = this.keyValues[KeyInterface.lang][swap ? 'main' : 'alt'];
    }
  }

  setActiveState(state) {
    if (state) {
      this.shellElement.classList.add(CssClasses.SHELL_ACTIVE);
      this.keyActive = true;
    } else {
      this.shellElement.classList.remove(CssClasses.SHELL_ACTIVE);
      this.keyActive = false;
    }
  }

  toggleActiveState() {
    this.setActiveState(!this.keyActive);
  }

  click(event) {
    event.preventDefault();
    if (this.keyType === 'spec' && this.options && this.options.includes('semisticky')) {
      this.toggleActiveState();
    } else {
      this.typer();
    }
  }

  typer() {
    if (this.keyType === 'spec') {
      switch (this.keyId) {
        case 'Space': KeyInterface.typerInt.typer({ command: 'typing', value: ' ' }); break;
        case 'Enter': KeyInterface.typerInt.typer({ command: 'typing', value: '\r' }); break;
        case 'Backspace': KeyInterface.typerInt.typer({ command: 'backspace', value: '' }); break;
        case 'Delete': KeyInterface.typerInt.typer({ command: 'delete', value: '' }); break;
        case 'ArrowLeft': KeyInterface.typerInt.typer({ command: 'left', value: '' }); break;
        case 'ArrowRight': KeyInterface.typerInt.typer({ command: 'right', value: '' }); break;
        default: break;
      }
    } else {
      KeyInterface.typerInt.typer({ command: 'typing', value: this.char });
    }
  }

  static setGlobalShellStyle(forceType) {
    KeyInterface.array.forEach((key) => { key.setShellStyle(forceType); });
  }

  static setGlobalChar(shift) {
    KeyInterface.array.forEach((key) => { key.setChar(shift); });
  }

  static setGlobalCase(charCase) {
    if (charCase.some((a, i) => KeyInterface.case[i] !== a)) {
      KeyInterface.case = charCase;
    }
    KeyInterface.setGlobalChar(true);
  }

  static nextGlobalLang() {
    KeyInterface.lang = (KeyInterface.lang + 1) % KeyInterface.languages.length;
    KeyInterface.setGlobalShellStyle();
    KeyInterface.setGlobalChar(true);
    localStorage.setItem('lang', KeyInterface.languages[KeyInterface.lang]);
  }

  static resetKeyArray() {
    KeyInterface.array = [];
    // TODO: should delete all keys
  }
}

export default KeyInterface;
