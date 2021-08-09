import getComponents from '../../modules/getElemsFragment';
import template from './chatDialog.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './chatDialog.scss';
import Block from '../../modules/Block';
import {
  Blocks, Component, ComponentProps, TAG_NAMES,
} from '../../components/component.types';

export default class ChatDialog extends Block<ComponentProps> {
  constructor(comps: Component[] = []) {
    const components: Blocks[] = getComponents(comps);
    const formProps: ComponentProps = { tagClasses: 'message-list__wrapper', tagName: TAG_NAMES.DIV };
    super(formProps, components, 'div');
  }

  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
