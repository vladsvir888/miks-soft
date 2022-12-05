import Pristine from "pristinejs";

const Validation = () => {
  const forms = document.querySelectorAll('.js-form');

  if (!forms.length) return;

  const config = {
    classTo: 'input-block',
    errorClass: 'input-block--error',
    successClass: 'input-block--success',
    errorTextParent: 'input-block',
    errorTextTag: 'small',
    errorTextClass: 'input-block__message'
  };

  forms.forEach(form => {
    const pristine = new Pristine(form, config);

    form.addEventListener('submit', function (e) {
       const valid = pristine.validate();

       if (!valid) { // если не валидно, то запрещает отправку формы
        e.preventDefault();
       }
    });
  });
};

export default Validation;
