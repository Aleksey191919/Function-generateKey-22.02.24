/** @format */

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(count, characters) {
  let key = '';
  while (key.length < count) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    key += characters[randomIndex];
  }
  return key;
}

const key = generateKey(2, characters);

console.log(key);
