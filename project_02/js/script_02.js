
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

//- Hero circle bottom

const barParentEl = document.querySelector('.bar')
const heroSliderEl = document.querySelectorAll('.heroSlider')
const heroCircleBtnEl = document.querySelectorAll('.circleBtn-hero')
const heroRingEl = document.querySelectorAll('.hero--ring')


function autoHeroSlider(numSlide) {
  heroSliderEl.forEach(el => {
    el.style.transform = `translateY(${-numSlide * 100}%)`
  })
  heroRingEl.forEach(el => {
    el.classList.remove('active--ring')
  })
  heroCircleBtnEl.forEach(el => {
    el.classList.remove('active--blueBtn')
    if (el.dataset.pageindex == numSlide) {
      el.classList.add('active--blueBtn')
      el.firstChild.classList.add('active--ring')
    }
  });
}
let page = 0;
const loadHeroSlider = setInterval(function () {
  autoHeroSlider(page)
  page++
  if (page == 3) {
    page = 0
  }
}, 2500)

clearInterval(loadHeroSlider)

barParentEl.addEventListener('click', function (e) {
  const targetBtn = e.target.closest('.circleBtn-hero')
  if (!targetBtn) return
  clearInterval(loadHeroSlider)

  heroSliderEl.forEach(el => {
    el.style.transform = `translateY(${-targetBtn.dataset.pageindex * 100}%)`

  })
  // Style Botton
  heroCircleBtnEl.forEach(el => {
    el.classList.remove('active--blueBtn')
    el.firstChild.classList.remove('active--ring')
  });
  targetBtn.classList.add('active--blueBtn')
  targetBtn.querySelector('.hero--ring').classList.add('active--ring')
})




//- Ron

const heroDevEl = document.querySelector('.heroModule-dev')

function crossHover2(elHover) {
  ['mouseenter', 'mouseleave'].forEach(event => elHover.addEventListener(event, function () {
    heroSliderEl.forEach(el => {
      el.style.transform = `translateY(-300%)`
    })
    heroCircleBtnEl.forEach(el => {
      el.classList.remove('active--blueBtn')
      el.firstChild.classList.remove('active--ring')
    });


  }));

}

crossHover2(heroDevEl) //-













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


const lazyMoveTrackEl = document.querySelector('.lazyMoveTrack')
const iconListBoxEL = document.querySelector('.iconListBox')


// setTimeout(function () {
//   const iconListBoxELWidth = iconListBoxEL.offsetWidth
//   lazyMoveTrackEl.style.transform = `translateX(${(iconListBoxELWidth / -2) / 10}rem)`
// },3000)
// lazyMoveTrackEl.addEventListener("transitionend", () => {
//   console.log("Transition ended");
//   lazyMoveTrackEl.style.transition = null;

// });














// list.removeChild(list.firstElementChild);


///////////////////////
//- Unhide-Email

const parentStaffboxEl = document.querySelector('.tellUsWrapper__right')
// const hideEmailEl = document.querySelector('.email-hide')
// const unhideEmailEl = document.querySelector('.email-unhide')

parentStaffboxEl.addEventListener('click', function (e) {
  const mailBoxEl = e.target.closest(".email-box")
  if (!mailBoxEl) return
  mailBoxEl.querySelector('.email-box--hidden').style.opacity = "0"
  mailBoxEl.querySelector('.email-box--visible').style.display = "block"
  // const unhideEmailEl = hideEmailEl
  // hideEmailEl.style.display = "none"
  // unhideEmailEl.classList.remove('hidden')

})

//- Slide Circle Bottom

const blogPostBtnEl = document.querySelector('.blogPostBtn--btn')
const blogPostBoxEl = document.querySelectorAll('.blogPostBox')
const circleBtnEl = document.querySelectorAll('.circleBtn')
const readmoreSlideEl = document.querySelectorAll('.readmoreSlide')

blogPostBtnEl.addEventListener('click', function (e) {
  const targetBtn = e.target.closest('.circleBtn')
  if (!targetBtn) return
  circleBtnEl.forEach(el => {
    el.classList.remove('active--blueBtn')
  });
  targetBtn.classList.add('active--blueBtn')
  blogPostBoxEl.forEach(el => {
    el.style.transform = `translateX(${-targetBtn.dataset.pageindex * 100}%)`

  })
  readmoreSlideEl.forEach(el => {
    el.style.transform = `translateX(${-targetBtn.dataset.pageindex * 100}%)`

  })

})

const parentLocationBox = document.querySelector('.locationBox')
const cityBoxNameEl = document.querySelectorAll('.cityBox__name')
const cityBoxAddressBoxEl = document.querySelectorAll('.cityBox__addressBox')
const ringEl = document.querySelectorAll('.ring')
//- Accordion
parentLocationBox.addEventListener('click', function (e) {
  const target = e.target.closest('.cityBox__name')
  const boxAddressEl = target.nextElementSibling

  const heightBoxAddressEl = boxAddressEl.scrollHeight

  if (boxAddressEl.style.height == 0) {
    cityBoxAddressBoxEl.forEach(el => {
      el.style.height = null
    })
    cityBoxNameEl.forEach(el => {
      el.classList.remove('locName-active')
    })
    ringEl.forEach(el => {
      el.classList.remove('active--ring')
    })
    boxAddressEl.style.height = `${heightBoxAddressEl}px`
    target.classList.add('locName-active')
    target.querySelector('.ring').classList.add('active--ring')

  }
  else {
    boxAddressEl.style.height = null
    target.classList.remove('locName-active')
    target.querySelector('.ring').classList.remove('active--ring')

  }

})



//- Award Moving

const cardEl = document.querySelectorAll('.awardLazyMoveTrack__inner')


let startCard = 1;
const cardLazyMove = setInterval(function () {
  cardEl.forEach(el => {

    el.style.transform = `translateX(${-startCard * 100}%)`
    if (el.dataset.cardindex == (startCard - 1)) {
      el.querySelector('.awardLazyMoveTrack__item').classList.add('cardDisappear')
    }
    else if (el.dataset.cardindex == (startCard + 3)) {
      el.querySelector('.awardLazyMoveTrack__item').classList.add('cardAppear')
      setTimeout(function () {
        el.querySelector('.awardLazyMoveTrack__item').classList.remove('cardBackface')

      }, 1000)

      // el.querySelector('.awardLazyMoveTrack__item').classList.remove('hidden')


    }
  })
  startCard++
  if (startCard > 9) {
    cardEl.forEach(el => {
      el.querySelector('.awardLazyMoveTrack__item').classList.remove('cardDisappear')
      el.querySelector('.awardLazyMoveTrack__item').classList.remove('cardAppear')
      el.style.transition = `all 0s`
      el.style.transform = `translateX(0%)`

      if (el.dataset.cardindex >= (4)) {

        el.querySelector('.awardLazyMoveTrack__item').classList.add('cardBackface')
        console.log(el.querySelector('.awardLazyMoveTrack__item'))
      }
    })
    setTimeout(function () {
      cardEl.forEach(el => {
        // el.querySelector('.awardLazyMoveTrack__item').classList.add('cardDisappear')
        el.style.transition = `all 5s`
      })

    }, 100)

    // cardBackface

    startCard = 1
  }
}, 5000)
clearInterval(cardLazyMove) //-
