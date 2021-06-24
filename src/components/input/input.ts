import template from './input.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import Block from '../../modules/Block';
import { ComponentProps } from '../component.types';
import { InputProps } from './input.types';

export default class Input extends Block<InputProps> {
    constructor(props: InputProps) {
        super(props);
    }

    render(): string {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}
