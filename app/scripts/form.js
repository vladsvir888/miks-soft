import Pristine from 'pristinejs';

class Form {
  static config = {
    classTo: 'input-block',
    errorClass: 'input-block--error',
    successClass: 'input-block--success',
    errorTextParent: 'input-block',
    errorTextTag: 'small',
    errorTextClass: 'input-block__message',
  }

  static endpoint = 'https://webhook.site/1723bffe-6bec-4537-975f-69c8d139791a' // фейковый эндпоинт

  constructor(form) {
    Pristine.addValidator('phone-validator', (value) => {
      const regExp = /^\d+$/;

      if (regExp.test(value)) {
        return true;
      }

      return false;
    }, '${1}', 1, false);

    this.form = form;
    this.pristine = new Pristine(this.form, Form.config);
    this.notification = this.form.querySelector('.form__notification');

    if (!this.form) return;

    this.form.addEventListener('submit', this.handleForm.bind(this));
  }

  onError() {
    this.notification.textContent = this.notification.dataset.notificationError;
    this.notification.classList.add('form__notification--active');

    setTimeout(() => {
      this.notification.classList.remove('form__notification--active');
    }, 3000);
  }

  onSuccess() {
    this.notification.textContent = this.notification.dataset.notificationSuccess;
    this.notification.classList.add('form__notification--active');

    setTimeout(() => {
      this.notification.classList.remove('form__notification--active');
    }, 3000);
  }

  toggleLoader() {
    this.form.classList.toggle('form--sending');
  }

  validate() {
    const valid = this.pristine.validate();

    return valid; // true/false
  }

  serializeForm(form) {
    const data = new FormData(form);

    return data;
  }

  async sendData(data) {
    try {
      this.toggleLoader();

      return await fetch(Form.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });
    } catch (error) {
      return error;
    } finally {
      this.toggleLoader();
    }
  }

  async handleForm(e) {
    e.preventDefault();

    const valid = this.validate();

    if (!valid) return;

    const data = this.serializeForm(e.target);

    const response = await this.sendData(data);

    if (!response.ok) {
      this.onError();
    } else {
      this.onSuccess();
    }

    this.form.reset();
  }
}

export default Form;