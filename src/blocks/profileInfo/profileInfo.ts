import getComponents from '../../modules/getElemsFragment';
import template from './profileInfo.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './profileInfo.scss';
import {
  Blocks, Component, ComponentProps, TAG_NAMES,
} from '../../components/component.types';
import Block from '../../modules/Block';
import { onBlur, onFocus, onSubmit } from '../../modules/validation';

export default class ProfileInfo extends Block<ComponentProps> {
  constructor(comps: Component[]) {
    const components: Blocks[] = getComponents(comps);
    const profileInfo: ComponentProps = { tagClasses: 'profile-info__wrapper', tagName: TAG_NAMES.DIV };
    // eslint-disable-next-line max-len
    super(profileInfo, components, 'form',
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
