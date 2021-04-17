export default class PugTemplate {
  constructor(template, attrs={}) {
      const pug = require('pug');
      const templateFunc = pug.compile(template);
      this._templateFunc = templateFunc;
      const compiledTemplate = templateFunc(attrs);
      this._compiledTemplate = compiledTemplate;
  }

  get() {
      return this._compiledTemplate;
  }
}