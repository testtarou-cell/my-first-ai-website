const moreButton = document.querySelector('#moreButton');
const message = document.querySelector('#message');

moreButton.addEventListener('click', () => {
  message.hidden = !message.hidden;
  moreButton.textContent = message.hidden ? 'もっと見る' : '閉じる';
});
