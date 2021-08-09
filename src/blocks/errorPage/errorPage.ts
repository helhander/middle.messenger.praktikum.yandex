import getComponents from '../../modules/getElemsFragment';
import template from './errorPage.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './errorPage.scss';
import Block from '../../modules/Block';
import {
  Blocks, Component, ComponentProps, TAG_NAMES,
} from '../../components/component.types';

export default class ErrorPage extends Block<ComponentProps> {
  constructor(elems: Component[], classes: string = 'error') {
    const components: Blocks[] = getComponents(elems);
    super({ tagName: TAG_NAMES.DIV, tagClasses: classes }, components);
  }

  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
