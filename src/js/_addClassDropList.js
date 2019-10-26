function addClassDropList() {
  const $listItem = $('.nav li');
  const listItemClass = 'nav__drop-list';
  $listItem.find('ul').closest($listItem).addClass(listItemClass)
}


$(document).ready(addClassDropList);
