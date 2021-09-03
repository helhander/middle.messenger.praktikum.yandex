/* eslint-disable no-underscore-dangle */
import { PageProps, typeofPage } from '../pages/pages.types';
import Route from './Route';

class Router {
  static __instance:Router;

  public routes:Route[] = [];

  public history:History = window.history;

  private _currentRoute:Route | null;

  private _rootQuery:string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname:string, block:typeofPage, props:PageProps) {
    const route = new Route(pathname, block, { ...props, rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  start() {
    console.log('111sdsdsdsds');
    window.onpopstate = ((event:Event) => {
      console.log('sdsdsdsds');
      this._onRoute((event.currentTarget as Window).location.hash);
    });

    this._onRoute(window.location.hash);
  }

  _onRoute(pathname:string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname:string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname:string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default Router;
