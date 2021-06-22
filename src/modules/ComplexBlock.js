import Block from './Block';
import getFragment from './fragment';
class ComplexBlock extends Block {
  constructor(tagName, props, components = [], innerMountPath = 'div') {
    super(tagName, props);
    this._components = components;
    this._innerMountPath = innerMountPath;
  }

  _render() {
    const block = this.render();

    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напиши свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы превращать из возвращать из compile DOM-ноду
    this._element.innerHTML = block;
    if (this._components && this._components.length > 0) {
      const compsFragment = getFragment(this._components);
      const mountedElement = this.element.querySelector(this._innerMountPath);
      mountedElement.appendChild(compsFragment);
    }
  }

  getContent() {
    /*     if (this._components.length > 0) {
          const compsFragment = getFragment(this._components);
          const mountedElement = this.element.querySelector(this._innerMountPath);
          mountedElement.appendChild(compsFragment);
        } */

    return this.element;
  }
}

export default ComplexBlock;