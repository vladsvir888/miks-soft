import Swal from 'sweetalert2';

const Modal = () => {
  const modalBtn = document.querySelectorAll('.js-modal-btn');
  const modalContent = document.querySelector('.popup__inner');
  const modalClose = document.querySelector('.popup__close');
  const header = document.querySelector('.header');

  if (!modalBtn.length) return;

  modalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      Swal.fire({
        showConfirmButton: false,
        html: modalContent,
        width: '141rem',
        showClass: {
          popup: 'animate__animated animate__slideInDown',
        },
        customClass: {
          container: 'popup',
        },
      }).then((res) => {
        if (res.isDismissed) {
          if (header.classList.contains('header--show-burger-menu')) {
            window.my_trap.popup.deactivate();
            window.my_trap.header.activate();
          }
        }
      });

      if (header.classList.contains('header--show-burger-menu')) {
        window.my_trap.header.deactivate();
        window.my_trap.popup.activate();
      }
    });
  });

  modalClose.addEventListener('click', () => {
    Swal.close();

    if (header.classList.contains('header--show-burger-menu')) {
      window.my_trap.popup.deactivate();
      window.my_trap.header.activate();
    }
  });
};

export default Modal;
