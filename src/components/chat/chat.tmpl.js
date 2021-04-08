export default `
div(class= divClasses || 'chat-wrapper')
  span(class="chat-image")
    image(class="chat-image" src= src alt= alt)
  span(class="chat-content")
    div(class="chat-content__name") #{name}
    if isUserMsg
      div(class="chat-content__last-msg") <span style="color: black;">Вы:</span> #{msg}
    else
      div(class="chat-content__last-msg") #{msg}
  span(class="chat-info")
    div(class="chat-info__last-date") #{date}
    div(class="chat-info__unread-number") #{unreadNumber}
`;
//div(class="wrapper-form")