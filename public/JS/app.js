let button = $('#check-btn');
let showCount = $('#count');

let messageCount = 3;

showCount.text(messageCount);

button.on('click', () => {
    showCount.text(messageCount = 0);
    $('.notification-box').css('background', 'none');
    $('.right-inbox p>span i').hide();
})