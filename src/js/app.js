import './_swiper';
import './_scrollHeader';
import './_addClassDropList';
import './_burgerMenu';
import './_img-slider';
import './_addImgWrapper';
import './_agreeChecked';

import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min'
import '../../node_modules/jquery-popup-overlay/jquery.popupoverlay';
import '../../node_modules/jquery-mask-plugin/dist/jquery.mask.min';
import '../../node_modules/jquery-validation/dist/jquery.validate.min';

// CHECKBOX


// MODAL
$('.modal').popup({
  transition: 'all 0.3s',
  outline: true,
  focusdelay: 400,
  vertical: 'top'
});


$('input[type="tel"]').mask('+7 (000) 000-00-00');

jQuery.validator.addMethod('phoneno', function (phoneNumber, element) {
  return this.optional(element) || phoneNumber.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
}, 'Введите Ваш телефон');


function ajaxSend(formName, data) {
  jQuery.ajax({
    type: 'POST',
    url: 'sendmail.php',
    data,
    success() {
      $('.modal').popup('hide');
      $('#thanks').popup('show');
      setTimeout(function () {
        $(formName).trigger('reset');
      }, 2000);
    }
  });
}

$('.form').each(function (index, el) {
  $(el).addClass(`form-${index}`);

  $(`.form-${index}`).validate({
    rules: {
      name: 'required',
      email: 'required',
      agree: 'required',
      phone: {
        required: true,
        phoneno: true
      }
    },
    messages: {
      name: 'Введите Ваше имя',
      phone: 'Введите Ваш телефон',
      email: 'Введите Ваш email',
      agree: 'Нужно Ваше согласие'
    },
    submitHandler(form) {
      const t = $(`.form-${index}`).serialize();
      ajaxSend(`.form-${index}`, t);
    }
  });
});
