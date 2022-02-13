const button_mainbutton = document.createElement('button');
const button_messengers = document.createElement('button');
const button_friends = document.createElement('button');
const image = document.querySelector('img');
image.onclick = function(){
  var mysrc = image.getAttribute('src');
  if(mysrc === 'preview.jpg'){
    image.setAttribute ('src', 'images.png');
  } else {
    image.setAttribute ('src', 'preview.jpg')
  }
}
console.log(image);
button_mainbutton.innerText = 'Главное меню';
button_messengers.innerText = 'Сообщения';
button_friends.innerText = 'Друзья';
const div = document.createElement('div');
div.appendChild(button_mainbutton);
div.appendChild(button_messengers);
div.appendChild(button_friends);
div.appendChild(image);
document.body.appendChild(div);
