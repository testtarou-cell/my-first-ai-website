const moreButton = document.querySelector('#moreButton');
const message = document.querySelector('#message');

moreButton.addEventListener('click', () => {
  const isExpanded = moreButton.getAttribute('aria-expanded') === 'true';

  moreButton.setAttribute('aria-expanded', String(!isExpanded));
  moreButton.textContent = isExpanded ? 'もっと見る' : '閉じる';
  message.hidden = isExpanded;
});
