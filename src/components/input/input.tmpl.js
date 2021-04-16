export default `
div(class= divClasses || 'login-form-input-wrapper')
  if label
    label(class= labelClasses || 'login-form-input-label' for= id) #{label}
  input(
    class= classes
    type= type
    name= name
    value= value
    placeholder= placeholder
    id= id
    readonly= readonly)
`;
//div(class="wrapper-form")