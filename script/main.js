$(document).ready(function() {
  $('.slider_reality').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/images/arrleft.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../assets/images/arright.svg'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });
})

const tabLinks = document.querySelectorAll(".tablinks");
const tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  const btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
  const location = btn.dataset.location; // lấy giá trị trong data-location

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  }); //lặp qua các tab content để remove class active

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  }); //lặp qua các tab links để remove class active

  document.querySelector("#" + location).classList.add("active");
  // trả về phần tử đầu tiên có id="" được add class active

  btn.classList.add("active");
  // các button mà chúng ta click vào sẽ được add class active
}
