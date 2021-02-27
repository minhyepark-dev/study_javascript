// event
const title = document.querySelector('#title');
// function handleResize(event) {
//   console.log(event);
// }
// function handleResize() {
//   console.log('I have been resized');
// }

function handleClick() {
  title.style.color = 'blue';
}

window.addEventListener('click', handleClick);
// 함수를 바로 호출하지 않도록 한다
