import getComponents from '../../modules/getElemsFragment';
import template from './form.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import './form.scss';
import Block from '../../modules/Block';
import { Blocks, Component, ComponentProps, TAG_NAMES } from '../../components/component.types';
import { FormProps } from './form.types';

export default class Form extends Block<FormProps> {
    constructor(name: string, elems: Component[]) {
        const components: Blocks[] = getComponents(elems);
        const formProps: FormProps = { name, tagClasses: 'login-form__content-wrapper', tagName: TAG_NAMES.DIV };
        super(formProps, components, 'form');
    }

    render(): string {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}