import template from './emptyBlock.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import Block from '../../modules/Block';
import { ComponentProps } from '../component.types';
import { EmptyBlockProps } from './emptyBlock.types';

export default class EmptyBlock extends Block<EmptyBlockProps> {
    constructor(props: EmptyBlockProps) {
        super(props);
    }

    render(): string {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}