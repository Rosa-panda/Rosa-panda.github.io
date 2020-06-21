window.onload = function() {
    setTimeout(function() {
        // XHR to request a JS and a CSS
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'http://domain.tld/preload.js');
        // xhr.send('');
        // xhr = new XMLHttpRequest();
        // xhr.open('GET', 'http://domain.tld/preload.css');
        // xhr.send('');
        // preload image
        new Image().src = "https://raw.githubusercontent.com/Rosa-panda/photograph/master/Rosa-panda.github.io.res/hhh.jpg";
        new Image().src = "https://raw.githubusercontent.com/Rosa-panda/photograph/master/Rosa-panda.github.io.res/www.jpg";
        new Image().src = "https://raw.githubusercontent.com/Rosa-panda/photograph/master/Rosa-panda.github.io.res/chengcheng.jpg";
    }, 1000);
};