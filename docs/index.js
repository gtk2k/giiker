import {Giiler} from './giiker.js';

const button = document.querySelector('button');
const textarea = document.querySelector('textarea');

button.addEventListener('click', async () => {
  button.classList.add('is-loading');
  button.disabled = true;

  const connect = async () => {
    const giiker = new Giiker();
    await giiker.connect();
    return giiker;
  };

  const giiker = await connect();
  button.classList.remove('is-loading');
  button.textContent = 'Connected!';

  giiker.on('move', (move) => {
    textarea.value += ` ${move.notation}`;
  });

  // Expose giiker object for testing on console
  window.giiker = giiker;
});