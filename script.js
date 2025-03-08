const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');
console.log("Wrapper:", wrapper);
console.log("Login Link:", loginlink);
console.log("Register Link:", registerlink);

registerlink.addEventListener('click', () => {
  console.log("Register link clicked!");
  wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
  console.log("Login link clicked!");
  wrapper.classList.remove('active');
});
btnpopup.addEventListener('click', () => {
  console.log("btn popup clicked!");
  wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click', () => {
  console.log("icon close clicked!");
  wrapper.classList.remove('active-popup');
});