export default `
form(onsubmit="console.log(Object.fromEntries((new FormData(document.forms[0])).entries())); return false;" method="post" id="form")
  `;