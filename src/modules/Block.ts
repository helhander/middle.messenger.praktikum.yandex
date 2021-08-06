/* eslint-disable class-methods-use-this */
import EventBus from './EventBus';
import getFragment from './fragment';
import { EVENTS, EventInfo } from './Block.types';
import {
  Blocks, ComponentProps, TAG_NAMES,
} from '../components/component.types';

class Block<CP extends ComponentProps> {
  private _element: HTMLElement;

  private _meta: CP;

  private _components: Blocks[] = [];

  private _innerMountPath: string = '';

  private _listeners: EventInfo[] = [];

  public props: CP;

  public eventBus: () => EventBus;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(props: CP, components?: Blocks[], innerMountPath?: string, listeners?: EventInfo[]) {
    const eventBus = new EventBus();
    this._meta = {
      tagInnerHTML: props.tagInnerHTML || '',
      ...props,
      tagName: props.tagName || TAG_NAMES.DIV,
      tagClasses: props.tagClasses || '',
    };

    this._components = components || [];
    this._innerMountPath = innerMountPath || 'div';
    this._listeners = listeners || [];

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(EVENTS.FLOW_AEL, this._addEventListeners.bind(this));
  }

  _createResources(): void {
    const { tagName, tagClasses } = this._meta;
    this._element = this._createDocumentElement(tagName, tagClasses);
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  _componentDidMount(oldProps: CP): void {
    this.componentDidMount(oldProps);
    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line no-unused-vars
  componentDidMount(_oldProps: CP): void { }

  _componentDidUpdate(oldProps: CP, newProps: CP): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: CP, newProps: CP): boolean {
    if (oldProps !== newProps) return true;
    return false;
  }

  setProps = (nextProps: Record<string, any>): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement {
    return this._element;
  }

  set innerMountPath(value: string) {
    this._innerMountPath = value;
  }

  _render(): void {
    const block: string = this.render();
    this._element.innerHTML = this.props.tagInnerHTML || block;
    // Добавление внутренних компонентов, если есть
    if (this._components.length > 0) {
      const compsFragment: DocumentFragment = getFragment(this._components);
      const mountedElement: HTMLElement = this.element.querySelector(this._innerMountPath) || this.element;
      mountedElement.appendChild(compsFragment);
    }
    this.eventBus().emit(EVENTS.FLOW_AEL);
  }

  render(): string { return ''; }

  getContent(): HTMLElement {
    return this.element;
  }

  _makePropsProxy(props: CP): CP {
    const self: any = this;

    return new Proxy(props, {
      get(target: CP, prop: string): any {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: CP, prop: string, value: any): boolean {
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;
        self.eventBus().emit(EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty(): boolean {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string, tagClasses: string) {
    // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
    const element: HTMLElement = document.createElement(tagName);
    // element.innerText = this.props.inner;
    if (tagClasses !== '') {
      element.classList.add(...tagClasses.split(' '));
    }

    return element;
  }

  _addEventListeners() {
    if (this._listeners.length > 0) {
      this._listeners.forEach((l) => {
        this.delegate(l.eventName, l.fn);
      });
    }
  }

  show(): void {
    this.getContent().style.display = 'block';
  }

  hide(): void {
    this.getContent().style.display = 'none';
  }

  // eslint-disable-next-line no-undef
  delegate(eventName: string, callback: EventListener) {
    const eventElement: HTMLElement = this.element.querySelector(this._innerMountPath) || this.element;
    eventElement.addEventListener(eventName, callback.bind(eventElement));
    this._listeners.push({ eventName, fn: callback });

    return this;
  }
}

export default Block;
