import template from './input.tmpl';
import PugTemplate from '../../modules/pugTemplate';
import Block from '../../modules/Block';

export default class Input extends Block {
    constructor(props) {
        super(props);
    }

    render() {
        const pugTemplate = new PugTemplate(template, this.props);
        return pugTemplate.get();
    }
}
