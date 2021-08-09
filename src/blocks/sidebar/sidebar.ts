import getComponents from '../../modules/getElemsFragment';
import template from './sidebar.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './sidebar.scss';
import Block from '../../modules/Block';
import {
  Blocks, Component, ComponentProps, TAG_NAMES,
} from '../../components/component.types';

export default class Sidebar extends Block<ComponentProps> {
  constructor(elems: Component[], classes: string = 'sidebar') {
    const components: Blocks[] = getComponents(elems);
    super({ tagName: TAG_NAMES.DIV, tagClasses: classes }, components);
  }

  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
