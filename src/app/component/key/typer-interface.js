class TyperInterface {
  constructor() {
    this.target = null;
    this.selection = { start: 0, end: 0 };
  }

  getSelection() {
    if (this.target.selectionStart || this.target.selectionStart === '0') {
      this.selection.start = this.target.selectionStart;
      this.selection.end = this.target.selectionEnd;
    } else {
      this.selection.start = 0;
      this.selection.end = 0;
    }
  }

  resetSelection() {
    this.selection.start = this.target.textContent.length;
    this.selection.end = this.target.textContent.length;
  }

  typer({ command, value }) {
    if (!this.target) { throw new Error('no target'); }
    if (command === 'typing') {
      const text = this.target.textContent;
      this.target.textContent = text.slice(0, this.selection.start)
        + value + text.slice(this.selection.end);
      this.selection.start += 1;
      this.selection.end = this.selection.start;
      this.target.focus();
      this.target.setSelectionRange(this.selection.start, this.selection.end);
    }
  }
}

export default TyperInterface;
