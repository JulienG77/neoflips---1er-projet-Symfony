$(document).ready(function () {


    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
});



document.querySelector('.second-button').addEventListener('click', function () {

    document.querySelector('.animated-icon2').classList.toggle('open');
});
