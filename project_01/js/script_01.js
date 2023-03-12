const burgurIcon = document.querySelector('.mobile-burger-icon')
const mobileBar = document.querySelector('.mobile-bar')
// burgurIcon.classList.add('mobile-burger--active')
// mobile-bar-active
burgurIcon.addEventListener('click', function () {
  burgurIcon.classList.toggle('mobile-burger--active')
  mobileBar.classList.toggle('mobile-bar-active')
})
/////////////////////////////////////////////////////
const mobileBtnArrow = document.querySelector('.mobile-bar--arrow')


/////////////////////////////////////////////////////

const parentMainMenu = document.querySelector('.menu-module-container')

const parentMobileMenu = document.querySelector('.mobile-bar--list')


const menuList = {

  product: `<div class="">
                  <a href="#" class="">What is Developer Observability?</a>
                  <a href="#" class="">Why Lightrun?</a>
                  <a href="#" class="">Lightrun Architecture</a>
                  <a href="#" class=""><span>The Lightrun SDK</span><sup>TM</sup></a>
                  <a href="#" class="">The Lightrun IDE Plugin</a>
                  <a href="#" class="">Security</a>
                  <a href="#" class="">Comparisons</a>
                  <a href="#" class="">Integrations</a>
                </div>`,
  price: `<div class="">
                <a href="#" class="">What is Developer Observability?</a>
                <a href="#" class="">Why Lightrun?</a>
                <a href="#" class="">Lightrun Architecture</a>
                <a href="#" class=""><span>The Lightrun SDK</span><sup>TM</sup></a>
                <a href="#" class="">The Lightrun IDE Plugin</a>
                <a href="#" class="">Security</a>
                <a href="#" class="">Comparisons</a>
                <a href="#" class="">Integrations</a>
              </div>`,
}


const mainManuList = 'menu-module__list'
const mainManuLink = 'menu-module__link'

const mobileManuList = 'mobile-menu-module__list'
const mobileManuLink = 'mobile-menu-module__link'

function addList(parentEL, htmlUl) {
  parentEL.insertAdjacentHTML('beforeend', htmlUl)
  // parentEL.insertAdjacentHTML('beforeend', productListHTML)
}
//- Main
addList(parentMainMenu, menuList.product)
const parentMainMenuDiv = document.querySelector('.menu-module-container div')
const parentMainMenuDivLinks = document.querySelectorAll('.menu-module-container div a')

parentMainMenuDiv.classList.add(mainManuList)
parentMainMenuDivLinks.forEach(el => {
  el.classList.add(mainManuLink)
})

//- Mobile

addList(parentMobileMenu, menuList.product)
const parentMobileMenuDiv = document.querySelector('.mobile-bar--list div')
const parentMobileMenuDivLinks = document.querySelectorAll('.mobile-bar--list div a')

parentMobileMenuDiv.classList.add(mobileManuList)

parentMobileMenuDivLinks.forEach(el => {
  el.classList.add(mobileManuLink)
})


//- Mobile Arrow Button
parentMobileMenu.addEventListener('click', function () {
  document.querySelector(`.${mobileManuList}`).classList.toggle('visibleFlex')
})