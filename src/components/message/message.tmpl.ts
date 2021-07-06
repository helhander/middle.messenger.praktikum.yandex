export default `
div #{inner}
  if imgSrc
    img(class= imgClasses src= imgSrc alt= imgAlt)
if status=='read'
  div(class="message__status")
    div(class="message__status_read")
    div(class= timeClasses) #{time}
else
  div(class= timeClasses) #{time}
`;
