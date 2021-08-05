import template from './input.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import Block from '../../modules/Block';
import { InputProps } from './input.types';
import './input.scss';

export default class Input extends Block<InputProps> {
  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
