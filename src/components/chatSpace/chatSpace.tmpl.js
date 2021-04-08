export default `
div(class="chat-space")
  div(class="chat-space__contents")
    if isEmpty
      div(class="content__init-msg") Ваберите чат чтобы отправить сообщение
    else
      div(class="chat-header")        
        `;