import template from './input.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import Block from '../../modules/Block';
import { ComponentProps } from '../component.type';

export default class Input<CP extends ComponentProps> extends Block<CP> {
    constructor(props: CP) {
        super(props);
    }

    render(): string {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}
