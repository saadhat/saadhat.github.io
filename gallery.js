const shots = ["home.jpg", "achievements.jpg", "ads.jpg", "amateur ingame.jpg", "amateur money ladder.jpg", "amateur page.jpg", "ask icon answer.jpg", "ask icon.jpg", "card animation 2.jpg", "card animation 3.jpg", "card animation 4.jpg", "card animation.jpg", "card overlay preview.jpg", "card overlay state1.jpg", "card overlay state2.jpg", "customer service.jpg", "daily rewards.jpg", "fans vote.jpg", "galacticos ingame.jpg", "galacticos money ladder.jpg", "galacticos page.jpg", "goat ingame.jpg", "goat money ladder.jpg", "goat page.jpg", "icons level up animation.jpg", "icons overlay.jpg", "icons overlay2.jpg", "icons.jpg", "leaderboard.jpg", "loading screen.jpg", "pro ingame.jpg", "pro money ladder.jpg", "pro page.jpg", "profile friends.jpg", "profile stats.jpg", "rookie ingame.jpg", "rookie money ladder.jpg", "rookie page.jpg", "settings.jpg", "shop.jpg", "star ingame.jpg", "star money ladder.jpg", "star page.jpg", "super star ingame.jpg", "super star money ladder.jpg", "super star page.jpg", "training.jpg", "var 1.jpg", "var 2.jpg", "world class ingame.jpg", "world class money ladder.jpg", "world class page.jpg"];
const dialog = document.querySelector('#game-gallery');
const image = document.querySelector('#gallery-image');
const caption = document.querySelector('#gallery-caption');
let current = 0;
function showShot(offset = 0) {
  current = (current + offset + shots.length) % shots.length;
  image.src = 'photos/' + encodeURIComponent(shots[current]);
  image.alt = 'Goalden Ball: ' + shots[current].replace(/\.jpg$/i, '').replaceAll('_', ' ');
  caption.textContent = `${current + 1} / ${shots.length} — ${image.alt}`;
}
document.querySelector('#open-gallery').addEventListener('click', () => {
  showShot(); dialog.showModal();
});
document.querySelector('#close-gallery').addEventListener('click', () => dialog.close());
document.querySelector('#previous-shot').addEventListener('click', () => showShot(-1));
document.querySelector('#next-shot').addEventListener('click', () => showShot(1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showShot(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showShot(1); }
});
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
