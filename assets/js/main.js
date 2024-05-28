(() => {
  const initModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
            <div class="modal__content">
             <div class="modal__header">
                <span class="modal__close">&times;</span>
             </div>
                <p>
                    Bienvenido a mi sitio web, aquí encontrarás información sobre mi y mis proyectos.
                </p>
            </div>
        `;
    document.body.appendChild(modal);
  };

  const initAddEventListeners = () => {
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');

    modalClose.addEventListener('click', () => {
        modal.remove();
    });
  };

  const init = () => {
    initModal();
    initAddEventListeners();
  };

  init();
})();
