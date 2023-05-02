class TyperInterface {
  constructor() {
    this.target = null;
    this.selection = {
      start: 0,
      end: 0,
      get length() {
        return this.end - this.start;
      },
    };
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

  typer({ command, value /* , flags */ }) {
    if (!this.target) { throw new Error('no target'); }
    switch (command) {
      case 'typing': {
        const text = this.target.textContent;
        this.target.textContent = text.slice(0, this.selection.start)
          + value + text.slice(this.selection.end);
        this.selection.start += 1;
        this.selection.end = this.selection.start;

        break;
      }

      case 'Backspace': {
        const text = this.target.textContent;
        if (this.selection.length > 0) {
          this.target.textContent = text.slice(0, this.selection.start)
            + text.slice(this.selection.end);
        } else if (this.selection.start > 0) {
          this.target.textContent = text.slice(0, this.selection.start - 1)
            + text.slice(this.selection.end);
          this.selection.start -= 1;
        }
        this.selection.end = this.selection.start;

        break;
      }

      case 'Delete': {
        const text = this.target.textContent;
        if (this.selection.length > 0) {
          this.target.textContent = text.slice(0, this.selection.start)
            + text.slice(this.selection.end);
        } else if (this.selection.start < this.target.textContent.length) {
          this.target.textContent = text.slice(0, this.selection.start)
            + text.slice(this.selection.end + 1);
        }
        this.selection.end = this.selection.start;

        break;
      }

      case 'ArrowLeft': {
        if (this.selection.length > 0) {
          this.selection.end = this.selection.start;
        } else if (this.selection.start > 0) {
          this.selection.start -= 1;
          this.selection.end = this.selection.start;
        }

        break;
      }

      case 'ArrowRight': {
        if (this.selection.length > 0) {
          this.selection.start = this.selection.end;
        } else if (this.selection.start > 0) {
          this.selection.start += 1;
          this.selection.end = this.selection.start;
        }

        break;
      }
      default: break;
    }
    this.target.focus();
    this.target.setSelectionRange(this.selection.start, this.selection.end);
  }
}

export default TyperInterface;
