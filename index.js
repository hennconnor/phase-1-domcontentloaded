

document.addEventListener('DOMContentLoaded', function(){
    const paragraph = document.querySelector('#text');
    console.log(paragraph);
    paragraph.textContent = 'This is really cool!';
    console.log('The DOM has loaded');
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );