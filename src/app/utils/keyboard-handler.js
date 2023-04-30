import KeyInterface from '../component/key/key-interface';

class KeyboardEventHandler {
  constructor() {
    this.keys = {};
    this.modifiers = {
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      capsLochKey: false,
    };
    document.addEventListener('keydown', this.outerKeydown.bind(this));
    document.addEventListener('keyup', this.outerKeyup.bind(this));
  }

  bound(key) {
    this.keys[key.keyId] = key;
  }

  outerKeydown(event) {
    const { code } = event;
    if (this.keys[code]) {
      event.preventDefault();
      if (!(code === 'CapsLock')) {
        this.keys[code].setActiveState(true);
      } else {
        this.keys[code].setActiveState(event.getModifierState('CapsLock'));
      }
    }
    if (event.shiftKey && event.altKey) {
      KeyInterface.nextGlobalLang();
    }
    if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'CapsLock') {
      KeyInterface.setGlobalCase([event.shiftKey, event.getModifierState('CapsLock')]);
    }
  }

  outerKeyup(event) {
    const { code } = event;
    if (this.keys[code]) {
      event.preventDefault();
      if (!(code === 'CapsLock')) {
        this.keys[code].setActiveState(false);
      } else {
        this.keys[code].setActiveState(event.getModifierState('CapsLock'));
      }
    }
    if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'CapsLock') {
      KeyInterface.setGlobalCase([event.shiftKey, event.getModifierState('CapsLock')]);
    }
  }
}

export default KeyboardEventHandler;
