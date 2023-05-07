// menu popup
const popUpMenuEl = document.querySelector('.menu__list:first-child')
const menuListEl = document.querySelector('.menuPopup--wrapper')

// menu-Mobile popup
const mobileNavEl = document.querySelector('.mobile-nav')
const mobileMenuEl = document.querySelector('.mobile-menu')


// nav-icon-mobile
const iconTop = document.querySelector('.icon--top')
const iconMiddle = document.querySelector('.icon--middle')
const iconBottom = document.querySelector('.icon--bottom')

// Observer stick Navigation
const trigger = document.querySelector('.trigger') //at body or main
const header = document.querySelector('.header')

// Hero Slider
const barParentEl = document.querySelector('.bar')
const heroSliderTrackEl = document.querySelector('.heroSliderTrack')
const heroSliderEl = document.querySelectorAll('.heroSlider')
const heroCircleBtnEl = document.querySelectorAll('.circleBtn-hero')
const heroRingEl = document.querySelectorAll('.hero--ring')

// Accordion : Why trust RDEV,
const parentEl = document.querySelector('.partnerContainer')
const tapContainerEl = document.querySelectorAll('.partnerContainer__slide')

// Menu List tap : What technologies,
const techListEl = document.querySelector('.techModule__lists')
const techParagraphEL = document.querySelectorAll('.techModule__right__paragraph')
document.querySelector('.techModule__item').classList.add('itemHover-white')

const serviceOfferParentEl = document.querySelector('.serviceOffer__cardBox')


/////////////////////////////////////////////////

let tapPort = window.matchMedia("(max-width: 900px)")
let phone = window.matchMedia("(max-width: 600px)")

///////////////////////////////////////////////

// CrossHover function
function crossHover(elHover, elTarget, toggleClassName) {
  ['mouseenter', 'mouseleave'].forEach(event => elHover.addEventListener(event, function () {
    elTarget.classList.toggle(toggleClassName)
  }));
  ['mouseenter', 'mouseleave'].forEach(event => elTarget.addEventListener(event, function () {
    elTarget.classList.toggle(toggleClassName)
  }));
}

crossHover(popUpMenuEl, menuListEl, 'active')


//// menu-Mobile popup ////
mobileNavEl.addEventListener('click', function () {
  mobileMenuEl.classList.toggle('activeSlideDown')
  iconTop.classList.toggle('iconTop-transform')
  iconMiddle.classList.toggle('iconMiddle-transform')
  iconBottom.classList.toggle('iconBottom-transform')
})



// Observer Navigation
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



//// Auto Slider - Hero Section ////

function autoHeroSlider(numSlide) {
  if (tapPort.matches) { // If media query matches
    heroSliderEl.forEach(el => {
      el.style.transform = `translateX(${-numSlide * 100}%)`
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
  } else {
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

}

let page = 0;
const loadHeroSlider = setInterval(function () {
  autoHeroSlider(page)
  page++
  if (page == 3) {
    page = 0
  }
  if (tapPort.matches) {
    touchHeroDragSlider()

  }
}, 2500)


barParentEl.addEventListener('click', function (e) {
  const targetBtn = e.target.closest('.circleBtn-hero')
  if (!targetBtn) return
  clearInterval(loadHeroSlider)


  if (tapPort.matches) {
    heroSliderEl.forEach(el => {
      el.style.transform = `translateX(${-targetBtn.dataset.pageindex * 100}%)`

    })
    // Style Botton
    heroCircleBtnEl.forEach(el => {
      el.classList.remove('active--blueBtn')
      el.firstChild.classList.remove('active--ring')
    });
    targetBtn.classList.add('active--blueBtn')
    targetBtn.querySelector('.hero--ring').classList.add('active--ring')
  } else {
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
  }
})



//// Accordion : Why trust RDEV ////

// 0) event Delegation
parentEl.addEventListener('click', function (e) {
  const target = e.target.closest('.partnerContainer__slide')
  if (!target) return

  // 1) other target want to work with
  const InnerEl = target.querySelector('.containerInner')
  const heightContentP = InnerEl.querySelector('.partnerContainer__paragraph').scrollHeight
  const accIconV = target.querySelector('.accordionIcon--v')

  // 3) if: target set style then other target set back to default
  if (InnerEl.style.height == 0) {
    tapContainerEl.forEach(el => {
      el.classList.remove('font--darkGrey')
      el.querySelector('.containerInner').style.height = null
      el.querySelector('.accordionIcon--v').style.transform = "rotate(-90deg)"
    })
    InnerEl.style.height = `${heightContentP + 20}px`
    target.classList.add('font--darkGrey')
    accIconV.style.transform = "rotate(-180deg)";
  }
  // 4) else: same target set target back to default
  else {
    InnerEl.style.height = null
    target.classList.remove('font--darkGrey')
    accIconV.style.transform = "rotate(-90deg)";
  }
})



//// Menu List tap : What technologies, ////

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
      el.classList.add('fade-in-up')
    } else {
      el.classList.add('hidden')
      el.classList.remove('fade-in-up')
    }
  })


})



serviceOfferParentEl.addEventListener('click', function (e) {
  const target = e.target.closest('.servOffCard')
  const itemEl = document.querySelectorAll('.servOffCard')

  itemEl.forEach(el => {
    el.classList.remove('servOffCard-Click')
  })
  target.classList.add('servOffCard-Click')


})


//// Slide Track Vertical ////
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

sliceTrackEL.addEventListener('click', function () {
  clearInterval(slider)
})



//// Award Moving ////

const slider = document.querySelector('.awardLazyMoveTrack')
const cardEl = document.querySelectorAll('.awardLazyMoveTrack__inner')

let startCard = 0;
const cardLazyMove = setInterval(function () {
  cardEl.forEach(el => {

    el.style.transform = `translateX(${-(startCard + 1) * 100}%)`
    // 1st card [index=0] disappear
    if (el.dataset.cardindex == (startCard)) {
      el.querySelector('.awardLazyMoveTrack__item').classList.add('cardDisappear')
    }
    else if (el.dataset.cardindex == (startCard + 5)) {
      el.querySelector('.awardLazyMoveTrack__item').classList.add('cardAppear')

      setTimeout(function () {
        el.querySelector('.awardLazyMoveTrack__item').classList.remove('cardBackface')

      }, 500)
    }
  })

  startCard++
  if (startCard > 8) {
    cardEl.forEach(el => {
      el.querySelector('.awardLazyMoveTrack__item').classList.remove('cardDisappear')
      el.querySelector('.awardLazyMoveTrack__item').classList.remove('cardAppear')
      el.style.transition = `all 0s`
      el.style.transform = `translateX(0%)`

      if (el.dataset.cardindex >= (5)) {

        el.querySelector('.awardLazyMoveTrack__item').classList.add('cardBackface')
        // console.log(el.querySelector('.awardLazyMoveTrack__item'))
      }
    })
    setTimeout(function () {
      cardEl.forEach(el => {
        // el.querySelector('.awardLazyMoveTrack__item').classList.add('cardDisappear')
        el.style.transition = `all 5s`
      })

    }, 100)

    // cardBackface
    startCard = 0
  }
}, 5000)


// Drag Slider

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0,
  clickSlider = true,
  maxTrack = 1680,
  cardWidth = 210

// add our event listeners

cardEl.forEach((slide, index) => {

  // Disable default image stick dragging
  slide.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // pointer events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  // slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)

})


// Diable Context-Menu from Right-Click or Hold on Touch
slider.oncontextmenu = function (even) {
  even.preventDefault()
  even.stopPropagation()
  return false
}



function touchStart(index) {
  return function (even) {
    even.preventDefault()
    if (clickSlider) {
      clearInterval(cardLazyMove)
      currentTranslate = startCard * 210
      prevTranslate = currentTranslate
      slider.style.overflow = `hidden`
      cardEl.forEach(slide => {
        slide.classList.add('dragTransition')
        slide.style.transform = `translateX(0%)`
        slide.querySelector('.awardLazyMoveTrack__item').classList.add('dragTransition')
        slide.querySelector('.awardLazyMoveTrack__item').classList.remove('cardDisappear')
        slide.querySelector('.awardLazyMoveTrack__item').classList.remove('cardAppear')
        slide.querySelector('.awardLazyMoveTrack__item').classList.remove('cardBackface')

      })
      clickSlider = false
    }
    isDragging = true
    currentIndex = index
    startPos = getPositionX(even)
    animationID = requestAnimationFrame(animation)
  }
}

function getPositionX(even) {
  return even.type.includes('mouse') ? even.clientX : even.touches[0].clientX
}

function animation() {
  setSliderPosition(maxTrack, cardWidth)
  if (isDragging) requestAnimationFrame(animation)

}

function setSliderPosition(maxTrack, cardWidth) {
  if (currentTranslate >= maxTrack && currentTranslate > 0) {
    return currentTranslate = maxTrack
  }
  else if (currentTranslate < 0) {
    return currentTranslate = 0

  }
  cardEl.forEach(slide => {
    slide.style.transform = `translateX(-${currentTranslate * 100 / cardWidth}%)`

  })
}


function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)
  prevTranslate = currentTranslate

}

function touchMove(even) {
  if (isDragging) {
    const currentPosition = getPositionX(even)
    currentTranslate = (prevTranslate + (startPos - currentPosition))
  }
}





//// DRAG - HERO SECTION

let isDraggingHero = false,
  startPosHero = 0,
  currentTranslateHero = 0,
  prevTranslateHero = 0,
  animationIDHero,
  currentIndexHero = 0,
  clickHero = true,
  windowElWidth = heroSliderEl[0].offsetWidth

// add our event listeners

function touchHeroDragSlider() {
  heroSliderEl.forEach((slide, index) => {

    // Disable default image stick dragging
    slide.addEventListener('dragstart', (e) => e.preventDefault())

    // Touch events
    slide.addEventListener('touchstart', touchStartHero(index))
    slide.addEventListener('touchend', touchEndHero)
    slide.addEventListener('touchmove', touchMoveHero)

    // pointer events
    slide.addEventListener('mousedown', touchStartHero(index))
    slide.addEventListener('mouseup', touchEndHero)
    slide.addEventListener('mousemove', touchMoveHero)

  })
}

heroSliderTrackEl.oncontextmenu = function (even) {
  even.preventDefault()
  even.stopPropagation()
  return false
}

function touchStartHero(index) {
  return function (even) {

    even.preventDefault()
    if (clickHero) {
      clearInterval(loadHeroSlider)
      clickHero = false
      currentTranslateHero = -(index * windowElWidth)
      autoHeroSlider(index)
    }

    isDraggingHero = true
    currentIndexHero = index
    windowElWidth = heroSliderEl[0].offsetWidth
    startPosHero = getPositionX(even)
    animationIDHero = requestAnimationFrame(animationHero)

  }
}

function animationHero() {
  setSliderPositionHero()
  if (isDragging) requestAnimationFrame(animationHero)
}

function setSliderPositionHero() {
  heroSliderEl.forEach(slide => {
    slide.style.transform = `translateX(${currentTranslateHero}px)`

  })
}
function touchEndHero() {
  isDraggingHero = false
  cancelAnimationFrame(animationIDHero)

  const movedBy = currentTranslateHero - prevTranslateHero // Actual Distance dragging [- Slide left,+ slide Right]

  if (movedBy < -30 && currentIndexHero < heroSliderEl.length - 1) currentIndexHero += 1

  if (movedBy > 30 && currentIndexHero > 0) currentIndexHero -= 1
  autoHeroSlider(currentIndexHero)
  setPositionByIndexHero()
}

function setPositionByIndexHero() {
  currentTranslateHero = currentIndexHero * -windowElWidth
  prevTranslateHero = currentTranslateHero
  setSliderPositionHero()
}



function touchMoveHero(even) {
  if (isDraggingHero) {
    const currentPosition = getPositionX(even)
    currentTranslateHero = (prevTranslateHero + (currentPosition - startPosHero)) // Distance Postion on Track + Animation Move track Dragging
  }
}



/// Clinet Moving

const slideItemEl = document.querySelector('.slideTrack')


let startItem = 1;
let widthItem = 43
const itemLazyMove = setInterval(function () {
  slideItemEl.style.transform = `translateX(${-(startItem * widthItem)}rem)`
  slideItemEl.style.transition = "all 2s"
  startItem++
  if (startItem == 10) {
    slideItemEl.style.transition = null
    slideItemEl.style.transform = null
    startItem = 1
  }

}, 5000)



/// Unhide-Email

const parentStaffboxEl = document.querySelector('.tellUsWrapper__right')


parentStaffboxEl.addEventListener('click', function (e) {
  const mailBoxEl = e.target.closest(".email-box")
  if (!mailBoxEl) return
  mailBoxEl.querySelector('.email-box--hidden').style.opacity = "0"
  mailBoxEl.querySelector('.email-box--visible').style.display = "block"

})




/// Slide Circle Bottom

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



/// MINI MAP

const parentLocationBox = document.querySelector('.locationBox')
const cityBoxNameEl = document.querySelectorAll('.cityBox__name')
const cityBoxAddressBoxEl = document.querySelectorAll('.cityBox__addressBox')
const ringEl = document.querySelectorAll('.ring')

const mapEl = document.querySelector('.locationMap__map')
const dataMapEl = document.querySelectorAll('.doubleRing')



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

  dataMapEl.forEach(el => {

    if (target.dataset.country == el.dataset.country) {
      el.classList.toggle('active--ring')
    }
    else el.classList.remove('active--ring')
  })

})


function crossHoverMap() {
  ['mouseover', 'mouseout'].forEach(event =>
    parentLocationBox.addEventListener(event, function (e) {
      const targetEl = e.target.closest('.cityBox__name')
      if (!targetEl) return
      dataMapEl.forEach(el => {
        // console.log(el.dataset.country)
        if (targetEl.dataset.country == el.dataset.country) {
          el.classList.toggle('active')
        }
      })
    })
  );
}
crossHoverMap()


