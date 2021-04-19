export default `
div(class= divClasses || 'login-form__input-wrapper')
  if label
    label(class= labelClasses || 'login-form__input-label' for= id) #{label}
  input(
    class= classes
    type= type
    name= name
    value= value
    placeholder= placeholder
    id= id
    readonly= readonly)
`;
