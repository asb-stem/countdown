var countTo = new Date('9 Sep, 2020 00:00:00').getTime();

var count = setInterval(function () {
    var today = new Date().getTime();
    
    var distance = countTo - today;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('#countdown').innerHTML = days + 'd-' + hours + 'h-' + minutes + 'm-' + seconds + 's';
    if (distance < 0) {
        clearInterval(count);
        document.querySelector('#countdown').innerHTML = '0d-0h-0m-0s<br><b>Hooray</b>';
    }
}, 1000);