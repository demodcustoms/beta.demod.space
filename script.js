// TYPEWRITER - Animacja
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 100 - Math.random() * 25; // prędkość pisania (mniej = szybciej / więcej = wolniej)

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};

document.addEventListener('DOMContentLoaded', function(event) {
    var container = document.getElementById('text');
    var text = container.textContent;
    container.textContent = '';

    var speed = 50;
    var index = 0;

    function typeWriter() {
        if (index < text.length) {
            container.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

// Ustal domyślny tytuł
var defaultTitle = 'demod.space';

// Funkcja do zmiany tytułu, gdy użytkownik opuszcza stronę
function changeTitleOnBlur() {
  document.getElementById('custom-title').innerText = 'free candies';
}

// Dodaj obsługę zdarzenia blur
window.addEventListener('blur', changeTitleOnBlur);

// Dodaj obsługę zdarzenia focus, aby przywrócić domyślny tytuł po powrocie na stronę
window.addEventListener('focus', function() {
  document.getElementById('custom-title').innerText = defaultTitle;
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.querySelector(".content").classList.add("overlay-active");
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.querySelector(".content").classList.remove("overlay-active");
}

// Tworzenie odtwarzacza YouTube
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
    height: '360',
    width: '640',
    playerVars: {
    listType: 'playlist',
    list: 'PLF6k2F485Ufnx7eqhYxUBcc6tCuQ2Iiyj' // Zastąp PLAYLIST_ID identyfikatorem twojej playlisty YouTube
    }
});
}


function showDiscord() {
    alert("Discord: demod#1312");
  }

function notWork() {
    alert("Ta funkcja aktualnie nie działa!");
}