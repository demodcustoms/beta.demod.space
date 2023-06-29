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




const defaultTitle = 'demod.space';

function changeTitleOnExit() {
    document.getElementById('custom-title').innerText = 'we miss u.';
}

window.addEventListener('blur', changeTitleOnExit);

window.addEventListener('focus', () => {
    document.getElementById('custom-title').innerText = defaultTitle;
});


document.addEventListener("DOMContentLoaded", function() {
    var fullscreenPopup = document.getElementById("fullscreen-popup");
    var overlayBg = document.getElementById("overlay-bg");

    // Funkcja sprawdzająca, czy użytkownik znajduje się w trybie pełnoekranowym
    function isFullscreen() {
        return (
            window.innerHeight === screen.height && 
            window.innerWidth === screen.width
        );
    }

    // Wyświetlanie lub ukrywanie popupu w zależności od trybu pełnoekranowego
    function togglePopupBasedOnFullscreen() {
        if (isFullscreen()) {
            fullscreenPopup.classList.remove("active");
            overlayBg.classList.remove("active");
        } else {
            fullscreenPopup.classList.add("active");
            overlayBg.classList.add("active");
        }
    }

    // Opóźnienie wywołania funkcji togglePopupBasedOnFullscreen po 2 sekundach
    setTimeout(togglePopupBasedOnFullscreen, 500);

    // Obsługa zdarzeń resize i scroll do monitorowania stanu trybu pełnoekranowego
    window.addEventListener("resize", togglePopupBasedOnFullscreen);
    window.addEventListener("scroll", togglePopupBasedOnFullscreen);
});