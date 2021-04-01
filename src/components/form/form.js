export default class Form {
    constructor(formName, inputs, buttons) {
        const form = document.createElement('form');
        for (let input of inputs) {
            const inputDiv = document.createElement('div');

            const inputLabel = document.createElement('label');
            inputLabel.setAttribute('for', input.attrs.id);
            inputLabel.innerHTML=input.name;

            inputDiv.appendChild(inputLabel);

            const inputElement = document.createElement('input');
            Object.entries(input.attrs).forEach(attr => {
                inputElement.setAttribute(attr[0], attr[1]);
            });
            inputElement.classList.add(...(input.classes || []));
            
            inputDiv.appendChild(inputElement);
            form.appendChild(inputDiv);
            //name attributes classes
        }
        this._form = form;
        console.log(form);
    }

    get() {
        return this._form;
    }
}