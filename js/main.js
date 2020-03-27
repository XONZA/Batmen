$(document).ready(function () {
    let tabsItem = $('.tabs-item');

    tabsItem.on('click', function(event){
event.preventDefault();
let activeContent = $(this).attr('href');
$('.visable').toggleClass('visable');
$(activeContent).toggleClass('visable');
$('.tabs-item-active').toggleClass('tabs-item-active');
$(this).toggleClass('tabs-item-active');
    });
});