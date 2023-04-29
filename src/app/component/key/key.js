import './key.css';

const CssClasses = {
  BLOCK: 'key',
  SHELL: 'key__shell',
  SH_CHAR: 'key__shell_type_char',
  SH_SUB: 'key__shell_type_sub',
  SH_SPEC: 'key__shell_type_spec',
  SH_STRETCH: 'key__shell_stretch',
  LANG: 'key__lang',
  LANG_HIDDEN: 'key__lang_hidden',
  DESC: 'key__desc',
  DESC_CHAR: 'key__desc_type_char',
  DESC_SUB: 'key__desc_type_sub',
  DESC_ALT: 'key__desc_type_alt',
  DESC_SPEC: 'key__desc_type_spec',
  DESC_HIDDEN: 'key__desc_hidden',
};

class Key {
  constructor(keyMapItem) {
    if (Object.getOwnPropertyNames(keyMapItem).length < 3) { throw new Error('wrong keymap item'); }
    this.keyType = keyMapItem.keyType;
    this.keyId = keyMapItem.keyCode;
    this.keyValues = keyMapItem.keyVal;
    this.textElements = [];
    this.shellElement = document.createElement('div');

    /* Basic markup */
    this.shellElement.className = [CssClasses.BLOCK, CssClasses.SHELL].join(' ');
    const span = document.createElement('span');
    span.className = CssClasses.DESC;
    if (this.keyType === 'spec') {
      span.classList.add(CssClasses.DESC_SPEC);

      this.shellElement.classList.add(CssClasses.SH_SPEC);
      this.shellElement.append(span);
      this.textElements.push(span);
    } else if (this.keyType === 'char') {
      span.classList.add(CssClasses.DESC_CHAR);

      this.shellElement.classList.add(CssClasses.SH_CHAR);
      this.shellElement.append(span);
      this.textElements.push(span);
    } else {
      span.classList.add(CssClasses.DESC_SUB);
      const span1 = document.createElement('span');
      span1.className = [CssClasses.DESC, CssClasses.DESC_ALT].join(' ');

      this.shellElement.classList.add(CssClasses.SH_SUB);
      this.shellElement.append(span, span1);
      this.textElements.push(span, span1);
    }

    /* setup starting descriptions */
    for (let i = 0; i < this.textElements.length; i += 1) {
      this.textElements[i].innerHTML = (this.keyType !== 'spec') ? String.fromCharCode(this.keyValues[0][i]) : this.keyValues[0];
    }
    /* key options */
    if (keyMapItem.options && keyMapItem.options.includes('stretch')) {
      this.shellElement.classList.add(CssClasses.SH_STRETCH);
    }

    Key.keyArray.push(this);
  }

  getHtmlElem() {
    return this.shellElement;
  }

  setCase(/* charCase */) {
    throw new Error(`setCase, not implemented, key id: ${this.keyId}`);
  }

  setLang(/* lang */) {
    throw new Error(`setLang, not implemented, key id: ${this.keyId}`);
  }

  static setGlobalCase(charCase) {
    Key.keyArray.forEach((key) => { key.setCase(charCase); });
  }

  static setGlobalLang(lang) {
    Key.keyArray.forEach((key) => { key.setLang(lang); });
  }

  static resetKeyArray() {
    Key.keyArray = [];
    // TODO: should delete all keys
  }

  static {
    Key.keyArray = [];
  }
}

export default Key;
