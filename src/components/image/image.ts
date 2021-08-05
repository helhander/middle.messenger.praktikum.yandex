import template from './image.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import { ImageProps } from './image.types';
import Block from '../../modules/Block';

export default class Image extends Block<ImageProps> {
  render(): string {
    const pugTemplate = new PugTemplate(template, this.props);
    return pugTemplate.get();
  }
}
