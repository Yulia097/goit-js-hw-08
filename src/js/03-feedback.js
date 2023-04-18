import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle((e) => {
    const objectToSave = {
      email: emailInput.value,
      message: messageInput.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log({ email: emailInput.value, message: messageInput.value });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

function populateFormFields() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedMessage) {
    emailInput.value = savedMessage.email;
    messageInput.value = savedMessage.message;
  }
}
populateFormFields();
