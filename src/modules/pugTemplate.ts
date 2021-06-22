import pug from 'pug';
export default class PugTemplate {
  private _compiledTemplate: string = '';
  
  constructor(template: string, attrs: Record<string, any> = {}) {
    this._compiledTemplate = pug.render(template, attrs);
  }

  get(): string {
    return this._compiledTemplate;
  }
}