const notificationSection= document.querySelector('.notifications-section');
const notification = document.querySelector('.notifications-group');

notificationSection.addEventListener('click',()=>{
    notification.style.display = "block";
})

// Messages

const messagesSection= document.querySelector('.messages-section');
const messages = document.querySelector('.messages-container');

messagesSection.addEventListener('click',()=>{
    messages.style.boxShadow = "0px 0px 10px #6b4ce6";
})