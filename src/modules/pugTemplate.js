import pug from 'pug';
export default class PugTemplate {
  constructor(template, attrs = {}) {
    const templateFunc = pug.compile(template);
    const renderFunc = pug.render(template);
    this._templateFunc = templateFunc;
    const compiledTemplate = templateFunc(attrs);
    this._compiledTemplate = compiledTemplate;
  }

  get() {
    return this._compiledTemplate;
  }
}