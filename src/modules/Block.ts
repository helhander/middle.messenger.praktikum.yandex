import EventBus from './EventBus';
import getFragment from './fragment';
import { EVENTS } from './Block.types';
import { Component, ComponentProps, TAG_NAMES } from '../components/component.type';
class Block<CP extends ComponentProps> {
  private _element: HTMLElement = null;
  private _meta: CP = null;
  private _components: Block<CP>[] = [];
  private _innerMountPath: string = '';
  public props: CP = null;
  public eventBus: () => EventBus;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(props: CP, components?: Block<CP>[], innerMountPath?:string) {
    const eventBus = new EventBus();
    this._meta = props;
    this._meta.tagName = props.tagName || TAG_NAMES.DIV;
    this._meta.tagClasses = props.tagClasses || '';

    this._components = components;
    this._innerMountPath = innerMountPath;

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(eventBus): void {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
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

  componentDidMount(oldProps: CP): void { }

  _componentDidUpdate(oldProps: CP, newProps: CP): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: CP, newProps: CP): boolean {
    return true;
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

  _render(): void {
    const block: string = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напиши свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы превращать из возвращать из compile DOM-ноду
    this._element.innerHTML = block;
    //Добавление внутренних компонентов, если есть
    if (this._components.length > 0) {
      const compsFragment: DocumentFragment = getFragment(this._components);
      const mountedElement: HTMLElement = this.element.querySelector(this._innerMountPath);
      mountedElement.appendChild(compsFragment);
    }
  }

  render(): string { return ''; }

  getContent(): HTMLElement {
    return this.element;
  }

  _makePropsProxy(props: CP): CP {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self: any = this;

    return new Proxy(props, {
      get(target: CP, prop: string): any {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: CP, prop: string, value: any): boolean {
        target[prop] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty(): boolean {
        throw new Error("Нет доступа");
      }
    });
  }

  _createDocumentElement(tagName: string, tagClasses: string) {
    // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
    const element: HTMLElement = document.createElement(tagName);
    if (tagClasses !== '') {
      element.classList.add(...tagClasses.split(' '));
    }

    return element;
  }

  show(): void {
    this.getContent().style.display = "block";
  }

  hide(): void {
    this.getContent().style.display = "none";
  }
}

export default Block;