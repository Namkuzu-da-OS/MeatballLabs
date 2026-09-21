(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const dialog = document.querySelector('[data-know-dialog]');
  const dialogOpeners = document.querySelectorAll('[data-open-know]');
  const dialogCloser = document.querySelector('[data-close-dialog]');

  const updateHeader = () => {
    header?.classList.toggle('scrolled', window.scrollY > 28);
  };

  const closeMenu = () => {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  const openDialog = () => {
    closeMenu();
    if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
  };
  const closeDialog = () => dialog?.close();

  dialogOpeners.forEach((button) => button.addEventListener('click', openDialog));
  dialogCloser?.addEventListener('click', closeDialog);
  dialog?.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    const clickedBackdrop =
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (clickedBackdrop) closeDialog();
  });

  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });
  updateHeader();
})();
