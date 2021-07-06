import template from './button.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import Block from '../../modules/Block';
import { ButtonProps } from './button.types';

export default class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render(): string {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}
