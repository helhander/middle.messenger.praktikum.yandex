export default `
div(class="login-form__content-wrapper")
  div(class="login-form__wrapper")
    h1(class="login-form__header") #{name}
    form(class="login-form" onsubmit="console.log(Object.fromEntries((new FormData(document.forms[0])).entries())); return false;" method="post" id="form")
      `;
