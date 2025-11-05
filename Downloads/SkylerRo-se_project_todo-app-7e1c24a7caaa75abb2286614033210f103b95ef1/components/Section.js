class Section {
  constructor({ items, renderer, containterSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containterSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
       this.addItem(this._renderer(item));
    })
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
