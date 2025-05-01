function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


  function togglePDFs(cardElement) {
    const content = cardElement.querySelector('.card-content');
    if (content) {
      content.classList.toggle('collapsed');
    }
  }