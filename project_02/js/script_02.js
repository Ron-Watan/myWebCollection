
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