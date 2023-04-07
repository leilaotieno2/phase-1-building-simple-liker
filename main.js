const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

const errorModal = document.getElementById('modal');
const likeButtons = document.querySelectorAll('.like');

errorModal.classList.add('hidden');

likeButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      if (button.children[0].textContent === EMPTY_HEART) {
        button.children[0].textContent = FULL_HEART;
        button.classList.add('activated-heart');
      } else {
        button.children[0].textContent = EMPTY_HEART;
        button.classList.remove('activated-heart');
      }

      await mimicServerCall();
    } catch (error) {
      // Handle the error without showing the error modal
      console.error(error);
    }
  });
});

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}
