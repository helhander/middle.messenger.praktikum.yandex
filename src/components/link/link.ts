import template from './link.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import Block from '../../modules/Block';
import { ComponentProps } from '../component.types';
import { LinkProps } from './link.types';

export default class Link extends Block<LinkProps> {
    constructor(props: LinkProps) {
        super(props);
    }

    render(): string {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}
