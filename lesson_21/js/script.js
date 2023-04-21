document.addEventListener("click", function (e) {
  const targetElement = e.target;

  if (targetElement.closest('.header__burger')) {
    document.documentElement.classList.toggle('menu-open');
    e.preventDefault();
  }
});

let scrollpos = window.scrollY;
const header = document.querySelector("header");
const scrollChange = 1;
const add_class_on_scroll = () => header.classList.add("header-bg");
const remove_class_on_scroll = () => header.classList.remove("header-bg");

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

});
