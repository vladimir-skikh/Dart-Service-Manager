$(function() {
  $('.header-video__button').on('click', function() {
    $('.header-video-poster').css({"display":"none"});
    let video = $('.header-video');
    video.css({'display':'block'});
    video.get(0).play();
  });
  $('.my-slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
});

let items = document.querySelectorAll('.services-item');
var service = function (items_arr) {
  for (let i = 0; i < items_arr.length; i++) {
    item = items_arr[i];
    item.addEventListener('click', function () {
      if (!(this.classList.contains('active'))) {
        for (let i = 0; i < items_arr.length; i++) {
          items_arr[i].classList.remove('active');
        };
      };
      this.classList.add('active');
    });
  };
};
service(items);

let participants = document.querySelectorAll('.participant-image');
let participants_info = document.querySelectorAll('.participant__info-block');
const participant = (participants_arr, participants_info_arr) => {
  for (let i = 0; i < participants_arr.length; i++) {
    let images_block = document.querySelector('.images__block');
    participants_arr[i].onclick = function () {
      let info = '-info';
      let id = this.id;
      for (let j = 0; j < participants_info_arr.length; j++) {
        participants_info_arr[j].classList.remove('active');
      }
      let current_info = document.querySelector(`#${id}${info}`);
      current_info.classList.add('active');
    };
  };
};
participant(participants, participants_info);