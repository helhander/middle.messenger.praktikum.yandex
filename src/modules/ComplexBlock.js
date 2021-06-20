import Block from './Block';
import getFragment from './fragment';
class ComplexBlock extends Block {
  constructor(tagName, props, components = [], innerMountPath = 'div') {
    super(tagName, props);
    this._components = components;
    this._innerMountPath = innerMountPath;
  }

  getContent() {
    if (this._components.length > 0) {
      const compsFragment = getFragment(this._components);
      const mountedElement = this.element.content.querySelector(this._innerMountPath);
      mountedElement.appendChild(compsFragment);
    }

    return this.element.content;
  }
}

export default ComplexBlock;