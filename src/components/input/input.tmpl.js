export default `
div(class= divClasses || 'login-form-input-wrapper')
  if label
    label(class="login-form-input-label" for= id) #{label}
  input(
    class= classes
    type= type
    name= name
    value= value
    id= id)
`;
//div(class="wrapper-form")