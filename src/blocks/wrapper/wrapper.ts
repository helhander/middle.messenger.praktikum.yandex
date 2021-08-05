import divTemplate from './div.tmpl';
import spanTemplate from './span.tmpl';
import formTemplate from './form.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import { Blocks } from '../../components/component.types';
import { WrapperProps } from './wrapper.types';
import Block from '../../modules/Block';
import getComponents from '../../modules/getElemsFragment';

export default class Wrapper extends Block<WrapperProps> {
  constructor(props: WrapperProps) {
    const components: Blocks[] = [];
    if (props.comps && props.comps.length > 0) components.push(...getComponents(props.comps));
    super(props, components);
  }

  render(): string {
    let template: string = '';
    switch (this.props.tag) {
      case 'div':
        template = divTemplate;
        this.innerMountPath = 'div';
        break;
      case 'span':
        template = spanTemplate;
        this.innerMountPath = 'span';
        break;
      case 'form':
        template = formTemplate;
        this.innerMountPath = 'form';
        break;
      default:
        break;
    }
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
