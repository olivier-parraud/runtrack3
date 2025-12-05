const key = document.getElementById("keylogger");

function hacker(e) {

    e.preventDefault();

    console.log(e.key);
  if (document.activeElement.id === 'keylogger') {
    key.value =  key.value + e.key + e.key;
  } else {
    key.value =  key.value + e.key;
  }
}
window.addEventListener('keydown', (e)=> hacker(e)); 
