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
      this.keys[code].setActiveState(true);
    }
  }

  outerKeyup(event) {
    const { code } = event;
    if (this.keys[code]) {
      event.preventDefault();
      this.keys[code].setActiveState(false);
    }
  }
}

export default KeyboardEventHandler;
