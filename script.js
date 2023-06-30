window.addEventListener('DOMContentLoaded', () => {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
}
  
    const container = document.getElementById('text');
    const text = container.textContent;
    container.textContent = '';
  
    const speed = 50;
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        container.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
});
  
function openNav() {
    document.getElementById('myNav').style.width = '100%';
    document.querySelector('.content').classList.add('overlay-active');
}
  
function closeNav() {
    document.getElementById('myNav').style.width = '0%';
    document.querySelector('.content').classList.remove('overlay-active');
}
  
function onPlayerReady(event) {
    event.target.setOption('disablekb', 1);
    event.target.setOption('showinfo', 0);
    event.target.setOption('rel', 0);
    event.target.setOption('controls', 0);
}




function showDiscord() {
    alert('Discord: demod#1312');
}




function notWork() {
    alert('Ta funkcja aktualnie nie działa!');
}




document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});




function openDiscord() {
    window.open("https://discord.com/users/578649920022773763", "_blank");
}

function openInstagram() {
    window.open("https://instagram.com/7demod7/", "_blank");
}




const defaultTitle = 'demod.space';

function changeTitleOnExit() {
    document.getElementById('custom-title').innerText = 'we miss u.';
}

window.addEventListener('blur', changeTitleOnExit);

window.addEventListener('focus', () => {
    document.getElementById('custom-title').innerText = defaultTitle;
});







window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})




window.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var scrollRatio = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
    document.querySelector('#progressbar').style.width = scrollRatio + '%';
  });