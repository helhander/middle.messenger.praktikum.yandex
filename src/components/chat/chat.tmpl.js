export default `
div(class= divClasses || 'chat__wrapper')
  div(class="chat__content")
    span(class="chat__image")
      image(class="chat__image" src= src alt= alt)
    span(class="chat")
      div(class="chat__name") #{name}
      if isUserMsg
        div(class="chat__last-msg") <span style="color: black;">Вы:</span> #{msg}
      else
        div(class="chat__last-msg") #{msg}
    span(class="chat-info")
      div(class="chat-info__last-date") #{date}
      div(class="chat-info__unread")
        div(class="chat-info__unread-number") #{unreadNumber}
`;
//div(class="wrapper-form")