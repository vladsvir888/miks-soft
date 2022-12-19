import Swal from 'sweetalert2';

const Modal = () => {
  const modalBtn = document.querySelectorAll('.js-modal-btn');
  const modalContent = document.querySelector('.popup__inner');
  const modalClose = document.querySelector('.popup__close');

  if (!modalBtn.length) return;

  modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('header').classList.remove('header--show-burger-menu')
      Swal.fire({
        showConfirmButton: false,
        html: modalContent,
        width: '140rem',
        customClass: {
          container: 'popup'
        }
      });
    });
  });

  modalClose.addEventListener('click', () => {
    Swal.close();
    document.body.removeAttribute('style');
  });
};

export default Modal;