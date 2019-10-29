const $agreeCheckBox = $('#agree');
const $agreeLabel = $('.contacts__agree-label');
const addClass = 'contacts__agree-label--checked';

function checkedBox() {
  if ($(this).is(':checked') === true) {
    $agreeLabel.addClass(addClass);
  } else {
    $agreeLabel.removeClass(addClass);
  }
}
$agreeCheckBox.click(checkedBox);
