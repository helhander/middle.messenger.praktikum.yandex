export default `
div(class= classes) #{inner}
  form(onsubmit="console.log(Object.fromEntries((new FormData(document.forms[0])).entries())); return false;" method="post" id="form")
    `;