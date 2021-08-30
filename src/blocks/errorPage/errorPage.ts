import getComponents from '../../modules/getElemsFragment';
import template from './errorPage.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './errorPage.scss';
import Block from '../../modules/Block';
import {
  Blocks, ComponentProps, TAG_NAMES,
} from '../../components/component.types';
import { ErrorPageProps } from './errorPage.types';

export default class ErrorPage extends Block<ComponentProps> {
  constructor(errorProps: ErrorPageProps) {
    const { errorComps = [] } = errorProps;
    const components: Blocks[] = getComponents(errorComps);
    super({ tagName: TAG_NAMES.DIV, tagClasses: 'error' }, components);
  }

  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
