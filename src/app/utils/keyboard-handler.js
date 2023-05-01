class KeyboardEventHandler {
  constructor() {
    this.keys = {};
    document.addEventListener('keydown', this.outerKeydown.bind(this));
    document.addEventListener('keyup', this.outerKeyup.bind(this));
  }

  bound(key) {
    this.keys[key.keyId] = key;
  }

  outerKeydown(event) {
    if (this.keys[event.code]) {
      event.preventDefault();
      this.keys[event.code].press();
    }
  }

  outerKeyup(event) {
    if (this.keys[event.code]) {
      event.preventDefault();
      this.keys[event.code].relese();
    }
  }
}

export default KeyboardEventHandler;
