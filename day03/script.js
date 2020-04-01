document.addEventListener('keydown', function(event) {
    var locations = ['General', 'Left', 'Right'];
    document.getElementById('keyCode').innerHTML = event.keyCode;
    document.getElementById('keyCode').setAttribute('class', 'key-code');
    document.getElementById('code').innerHTML = event.code;
    document.getElementById('location').innerHTML = locations[event.location];
    document.getElementById('key').innerHTML = event.key;
});
