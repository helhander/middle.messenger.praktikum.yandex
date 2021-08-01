import EventBus from './EventBus';
import getFragment from './fragment';
import { EVENTS, EventInfo } from './Block.types';
import { Blocks, Component, ComponentProps, TAG_NAMES } from '../components/component.types';
class Block<CP extends ComponentProps> {
  private _element: HTMLElement = null;
  private _meta: CP = null;
  private _components: Blocks[] = [];
  private _innerMountPath: string = '';
  private _validator: (e: Event) => void = null;
  private _listeners: EventInfo[] = [];
  public props: CP = null;
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
      tagName: props.tagName || TAG_NAMES.DIV,
      tagClasses: props.tagName || '',
      tagInnerHTML: props.tagInnerHTML || '',
      ...props
    };

    this._components = components || [];
    this._innerMountPath = innerMountPath || 'div';
    this._listeners = listeners || [];

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

  set innerMountPath(value: string) {
    this._innerMountPath = value;
  }

  _render(): void {
    const block: string = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напиши свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы превращать из возвращать из compile DOM-ноду
    this._element.innerHTML = this.props.tagInnerHTML || block;
    //Добавление внутренних компонентов, если есть
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
    //element.innerText = this.props.inner;
    if (tagClasses !== '') {
      element.classList.add(...tagClasses.split(' '));
    }

    return element;
  }

  _addEventListeners() {
    if (this._listeners.length > 0) {
      this._listeners.forEach(l=>{
        this.delegate(l.eventName,l.fn);
      });
    }
  }
  show(): void {
    this.getContent().style.display = "block";
  }

  hide(): void {
    this.getContent().style.display = "none";
  }

  delegate(eventName: string, callback: EventListener) {
    const eventElement = this.element;
    eventElement.addEventListener(eventName, callback.bind(eventElement));
    this._listeners.push({ eventName, fn: callback });

    return eventElement;
  }

}

export default Block;