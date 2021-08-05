import getComponents from '../../modules/getElemsFragment';
import template from './form.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './form.scss';
import Block from '../../modules/Block';
import {
  Blocks, Component, TAG_NAMES,
} from '../../components/component.types';
import { FormProps } from './form.types';
import {
  onBlur, onFocus, onSubmit,
} from '../../modules/validation';

export default class Form extends Block<FormProps> {
  constructor(name: string, elems: Component[]) {
    const components: Blocks[] = getComponents(elems);
    const formProps: FormProps = { name, tagClasses: 'login-form__content-wrapper', tagName: TAG_NAMES.DIV };
    // eslint-disable-next-line max-len
    super(formProps, components, 'form', [{ eventName: 'focusin', fn: onFocus }, { eventName: 'focusout', fn: onBlur }, { eventName: 'submit', fn: onSubmit }]);
  }

  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
