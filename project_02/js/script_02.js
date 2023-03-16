
const popUpMenuEl = document.querySelector('.menu__list:first-child')
const menuListEl = document.querySelector('.menuPopup--wrapper')

function crossHover(elHover, elTarget, toggleClassName) {
  ['mouseenter', 'mouseleave'].forEach(event => elHover.addEventListener(event, function () {
    elTarget.classList.toggle(toggleClassName)
  }));
  ['mouseenter', 'mouseleave'].forEach(event => elTarget.addEventListener(event, function () {
    elTarget.classList.toggle(toggleClassName)
  }));
}
crossHover(popUpMenuEl, menuListEl, 'visible')

//////////////////////////////////////////////////////////////////
const trigger = document.querySelector('.trigger') //at body or main
const header = document.querySelector('.header')


// window.addEventListener('scroll', function () {
//   header.classList.toggle('secondColor', window.scrollY > 0)
// })

//- Eperiment:

// const testEl = document.querySelector('.trigger')
// function obsCallback(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }
// const obsOption = {
//   root: null, // target intersecting
//   threshold: 0, // Percentage of intersection will be call
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);

// observer.observe(testEl);

//- End:
//////////////////////////////////////////////////////////////

function obsCallbackHeader(entries) {
  const entry = entries[0]; // or [entry]=entries
  if (!entry.isIntersecting) header.classList.add('secondColor');
  else header.classList.remove('secondColor');
}
const obsOption = {
  root: null, // target intersecting
  threshold: 0, // Percentage of intersection will be call
};

const triggerObserver = new IntersectionObserver(obsCallbackHeader, obsOption);

triggerObserver.observe(trigger);




/////////////////////////
const temp = document.querySelectorAll('.containerInner')
const slidebtn = document.querySelector('.partnerContainer__slide')
const parentEl = document.querySelector('.partnerContainer')
/*
slidebtn.addEventListener('click', function () {
  const heightContentP = document.querySelector('.partnerContainer__paragraph').scrollHeight

  if (temp.style.height == 0) {
    temp.style.height = `${heightContentP + 20}px`

  } else {
    temp.style.height = null

  }

  // temp.classList.toggle('activeSlide')
})

*/
console.log(parentEl)
parentEl.addEventListener('click', function (e) {
  const target = e.target.closest('.partnerContainer__slide')
  const heightContentP = (target.childNodes[3].childNodes[1].childNodes[1]).scrollHeight


  if (target.childNodes[3].style.height == 0) {
    temp.forEach(el => {
      el.style.height = null
    })
    target.childNodes[3].style.height = `${heightContentP + 20}px`

  } else {
    target.childNodes[3].style.height = null

  }

})