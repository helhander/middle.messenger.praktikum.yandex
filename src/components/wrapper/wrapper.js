import './wrapper.css';

export default class Wrapper {
    constructor(classNames=[]) {
        this._classNames = classNames;
        const wrapper = document.createElement('div');
        const classList = wrapper.classList;
        classList.add('wrapper', ...classNames);
        this._wrapper = wrapper;
        //console.log('class',wrapper);
    }

    get() {
        return this._wrapper;
    }
}