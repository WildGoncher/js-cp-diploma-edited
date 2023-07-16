const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
let currentDate = new Date();
let selectDay = new Date();
let navDay = document.getElementsByClassName("page-nav")[0];
navDay
  .getElementsByClassName("page-nav__day_chosen")[0]
  .classList.toggle("page-nav__day_chosen");
navDay.children[0].classList.toggle("page-nav__day_chosen");

let pageNavDays = Array.from(document.getElementsByClassName("page-nav__day"));
for (let i = 0; i < pageNavDays.length; i++) {
  let date = new Date();
  date.setDate(date.getDate() + i);
  pageNavDays[i].children[1].textContent = date.getDate();
  pageNavDays[i].children[0].textContent = weekDays[date.getDay() - 1];
  if (date.getDay() === 6 || date.getDay() === 0) {
    pageNavDays[i].classList.add("page-nav__day_weekend");
  }
  pageNavDays[i].onclick = function () {
    document
      .getElementsByClassName("page-nav__day_chosen")[0]
      .classList.toggle("page-nav__day_chosen");
    pageNavDays[i].classList.toggle("page-nav__day_chosen");
    selectDay.setDate(currentDate.getDate() + i);
    setFilms(JSON.parse(localStorage.getItem("info")), selectDay);
  };
}
