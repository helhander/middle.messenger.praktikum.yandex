export default `
button(class= classes)
  if type == 'image'
    img(class= imgClasses src= src alt= alt)
  else
    span(class= imgClasses)
`;
