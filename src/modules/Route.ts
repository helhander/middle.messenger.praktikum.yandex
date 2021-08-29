import { Page, PageConstructor, PageProps } from '../pages/pages.types';
import render from './render';

class Route {
  private _pathname: string;

  private _blockClass: PageConstructor;

  private _block: Page | null;

  private _props: PageProps;

  constructor(pathname: string, view: PageConstructor, props: PageProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname:string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

export default Route;
