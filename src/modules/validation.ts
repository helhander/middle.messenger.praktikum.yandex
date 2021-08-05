export function validate(event: Event): void {
  console.log('target = ', event.target); // target = FORM
  console.log('this = ', this.tagName); // this = FORM
}

function getHint(elem: HTMLElement): HTMLElement | null {
  const hint: HTMLElement | null = elem.parentElement?.querySelector('.input__hint') || null;
  return hint;
}

export function onFocus(event: Event): void {
  const elem = event.target;
  if (!(elem instanceof HTMLInputElement)) return;

  const hint: HTMLElement | null = getHint(elem);
  if (hint) hint.style.display = 'none';
}

export function onBlur(event: Event | null, target?: HTMLInputElement): void {
  const elem: EventTarget | null = target || (event && event.target);
  if (!(elem instanceof HTMLInputElement)) return;

  const hint: HTMLElement | null = getHint(elem);
  if (hint) {
    const regExpString: string = hint.dataset.regExp || '';
    if (regExpString) {
      const regExp = new RegExp(regExpString, 'gi');
      if (!regExp.test(elem.value)) hint.style.display = 'block';
      else hint.style.display = 'none';

      return;
    }

    const validationField: string = hint.dataset.field || '';
    if (validationField) {
      const form: HTMLFormElement | null = elem.closest('form');
      const validationFieldElem: HTMLInputElement | null = form && form.querySelector(`input[name="${validationField}"]`);
      if (validationFieldElem && validationFieldElem.value !== elem.value) hint.style.display = 'block';
      else hint.style.display = 'none';
    }
  }
}

export function onSubmit(event: Event) {
  const elem: EventTarget | null = event.target;
  if (!(elem instanceof HTMLElement)) return;
  const form: HTMLFormElement | null = elem.closest('form');
  // eslint-disable-next-line no-undef
  const inputs: NodeListOf<HTMLInputElement> | null = form && form.querySelectorAll('input');
  inputs?.forEach((i) => onBlur(null, i));
  const formElems: HTMLFormControlsCollection | null = form?.elements || null;
  const formData: Record<string, any> = {};
  if (!formElems) {
    event.preventDefault();
    return;
  }

  for (let i = 0; i < formElems.length; i += 1) {
    const inputElem = formElems[i];
    if (inputElem instanceof HTMLInputElement) formData[inputElem.name] = inputElem.value;
  }

  console.log(JSON.stringify(formData));
  event.preventDefault();
}
