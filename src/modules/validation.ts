export function validate(event: Event): void {
  console.log('target = ', event.target); // target = FORM
  console.log('this = ', this.tagName); // this = FORM
}

export function onFocus(event: Event): void {
  const elem = event.target;
  if (!(elem instanceof HTMLInputElement))
    return;

  const hint: HTMLElement = getHint(elem);
  if (hint)
    hint.style.display = "none";
}

export function onBlur(event: Event, target?: HTMLInputElement): void {
  const elem: EventTarget = target || event.target;
  if (!(elem instanceof HTMLInputElement))
    return;

  const hint: HTMLElement = getHint(elem);
  if (hint) {
    const regExpString: string = hint.dataset.regExp;
    if (regExpString) {
      const regExp = new RegExp(regExpString, 'gi');
      if (!regExp.test(elem.value))
        hint.style.display = "block";
      else hint.style.display = "none";
      
      return;
    }

    const validationField: string = hint.dataset.field;
    if (validationField) {
      const form: HTMLFormElement = elem.closest('form');
      const validationFieldElem: HTMLInputElement = form.querySelector(`input[name="${validationField}"]`);
      if (validationFieldElem.value !== elem.value)
        hint.style.display = "block";
      else hint.style.display = "none";
    }
  }
}

export function onSubmit(event: Event) {
  const elem: EventTarget = event.target;
  if (!(elem instanceof HTMLElement))
    return;
  const form: HTMLFormElement = elem.closest('form');
  const inputs: NodeListOf<HTMLInputElement> = form.querySelectorAll('input');
  inputs.forEach(i => onBlur(null, i));
}

function getHint(elem: HTMLElement): HTMLElement {
  const hint: HTMLElement = elem.parentElement.querySelector('.input__hint');
  return hint;
}