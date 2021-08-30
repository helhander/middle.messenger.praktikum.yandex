import getComponents from '../../modules/getElemsFragment';
import template from './form.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './form.scss';
import Block from '../../modules/Block';
import {
  Blocks, TAG_NAMES,
} from '../../components/component.types';
import { BlockFormProps, FormProps } from './form.types';
import {
  onBlur, onFocus, onSubmit,
} from '../../modules/validation';

export default class Form extends Block<FormProps> {
  constructor(blockFormProps:BlockFormProps) {
    const { name = '', comps = [] } = blockFormProps;
    const components: Blocks[] = getComponents(comps);
    const formProps: FormProps = { name, tagClasses: 'login-form__content-wrapper', tagName: TAG_NAMES.DIV };
    super(formProps, components, 'form',
      [
        { eventName: 'focusin', fn: onFocus },
        { eventName: 'focusout', fn: onBlur },
        { eventName: 'submit', fn: onSubmit },
      ]);
  }

  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
