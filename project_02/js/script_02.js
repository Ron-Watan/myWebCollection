
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
const parentEl = document.querySelector('.partnerContainer')
const containerInnerEl = document.querySelectorAll('.containerInner')
const tapContainerEl = document.querySelectorAll('.partnerContainer__slide')

//- Accordion
parentEl.addEventListener('click', function (e) {
  const target = e.target.closest('.partnerContainer__slide')
  const InnerEl = target.querySelector('.containerInner')
  const heightContentP = InnerEl.querySelector('.partnerContainer__paragraph').scrollHeight


  if (InnerEl.style.height == 0) {
    containerInnerEl.forEach(el => {
      el.style.height = null
    })
    tapContainerEl.forEach(el => {
      el.classList.remove('font--darkGrey')
    })
    InnerEl.style.height = `${heightContentP + 20}px`
    target.classList.add('font--darkGrey')
  }
  else {
    InnerEl.style.height = null
    target.classList.remove('font--darkGrey')
  }

})


///////////////////////////////////
const techListEl = document.querySelector('.techModule__lists')
const techParagraphEL = document.querySelectorAll('.techModule__right__paragraph')
document.querySelector('.techModule__item').classList.add('itemHover-white')
// techParagraphEL.classList.add('active')

techListEl.addEventListener('click', function (e) {
  const target = e.target.closest('.techModule__item')
  const itemEl = document.querySelectorAll('.techModule__item')

  itemEl.forEach(el => {
    el.classList.remove('itemHover-white')
  })
  target.classList.add('itemHover-white')

  techParagraphEL.forEach(el => {
    if (el.dataset.p === target.dataset.title) {
      el.classList.remove('hidden')
      el.classList.add('fade-in-top')
    } else {
      el.classList.add('hidden')
      el.classList.remove('fade-in-top')
    }
  })


})

//- Slide Track
const sliceTrackEL = document.querySelector('.slideTrack')
const numberSlides = sliceTrackEL.childElementCount
const itemWidth = 43
let start = 0
let width = itemWidth;


function sliderTranlateX() {
  if (start < (numberSlides - 2)) {
    console.log("01 ", width)
    sliceTrackEL.style.transition = `all 2s ease`
    sliceTrackEL.style.transform = `translateX(${width * -1}rem)`
    start++
    width += itemWidth
  } else if (start >= (numberSlides - 2) && start < (numberSlides - 2) * 2 + 1) {
    width -= itemWidth
    console.log("02 ", width)
    sliceTrackEL.style.transition = `all 2s ease`
    sliceTrackEL.style.transform = `translateX(${width * -1}rem)`
    start++
    console.log("03 ", width)
  } else clearInterval(slider)

}

// const slider = setInterval(sliderTranlateX, 4000)
sliceTrackEL.addEventListener('click', function () {
  clearInterval(slider)
})


//- Generate Maqqee


const iconBoxoneEl = document.querySelectorAll('.boxone')
const iconBoxoneId = document.querySelector('#box0ne')

const iconListBoxEL = document.querySelector('.iconListBox')

function addMarker() {
  const marker = `
  <div class="iconBox">
  <div class="iconBoxInnr" style="background-color: none;">
    <img src="img/icondev/web-applications-dev.svg" alt="web-applications-dev" style="max-width: 100%; height: auto;" class="lazyBg">
    <span>Web applications <br> development</span>
  </div>
  </div>

  <div class="iconBox">
  <div class="iconBoxInnr">
    <img src="img/icondev/static-website-dev.svg" alt="static-website-dev" style="max-width: 100%; height: auto;" class="lazyBg">
    <span>Static website <br> development</span>
  </div>
  </div>

  <div class="iconBox">
  <div class="iconBoxInnr">
    <img src="img/icondev/cms-dev.svg" alt="cms-dev" style="max-width: 100%; height: auto;" class="lazyBg">
    <span>CMS development</span>
  </div>
  </div>

  <div class="iconBox">
  <div class="iconBoxInnr">
    <img src="img/icondev/ecommerce-dev.svg" alt="ecommerce-dev" style="max-width: 100%; height: auto;" class="lazyBg">
    <span>Ecommerce <br> development</span>
  </div>
  </div>

  <div class="iconBox">
  <div class="iconBoxInnr">
    <img src="img/icondev/api-integrations.svg" alt="api-integrations" style="max-width: 100%; height: auto;" class="lazyBg">
    <span>API integrations</span>
  </div>
  </div>

  <div class="iconBox">
  <div class="iconBoxInnr">
    <img src="img/icondev/api-dev.svg" alt="api-dev" style="max-width: 100%; height: auto;" class="lazyBg">
    <span>API Development</span>
  </div>
  </div>

  <div class="iconBox">
  <div class="iconBoxInnr">
    <img src="img/icondev/bi-system-integr.svg" alt="bi-system-integr" style="max-width: 100%; height: auto;" class="lazyBg">
    <span>BI systems <br> integrations</span>
  </div>
  </div>

  <div class="iconBox">
  <div class="iconBoxInnr">
    <img src="img/icondev/mobile-web-apps.svg" alt="mobile-web-apps" style="max-width: 100%; height: auto;" class="lazyBg">
    <span>Mobile web apps <br> (in-browser mobile apps)</span>
  </div>
  </div>

`

  iconListBoxEL.insertAdjacentHTML('beforeend', marker)

}





function obsCallbackIcon(entries) {
  const entry = entries[0]; // or [entry]=entries
  // console.log(entry.isIntersecting)
  console.log(entry.boundingClientRect.left)
  const position = (entry.boundingClientRect.left)
  if (position < 0) iconBoxoneId.classList.add('disappear')
  // if (!entry.intersectionRect.x) {
  // if (!entry.isIntersecting) {

}
const obsOptionG = {
  root: null, // target intersecting
  threshold: 0, // Percentage of intersection will be call
};

const iconObserver = new IntersectionObserver(obsCallbackIcon, obsOptionG);

iconObserver.observe(iconBoxoneId);



// list.removeChild(list.firstElementChild);
jQuery.expr.filters.offscreen = function (el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.x + rect.width) < 0
    || (rect.y + rect.height) < 0
    || (rect.x > window.innerWidth || rect.y > window.innerHeight)
  );
};

$(':offscreen');
$('iconBoxoneId').is('offscreen');