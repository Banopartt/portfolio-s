function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
      const content = this.querySelector('.card-content');
      content.classList.toggle('open');
    });
  });