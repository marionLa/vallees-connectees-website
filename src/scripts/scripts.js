const button = document.querySelector('[data-collapse-toggle="navbar-hamburger"]');
const menu = document.querySelector('#navbar-hamburger');

//au click sur le bouton hamburger ouvrir le menu s'il est fermé, sinon l'ouvrir
button?.addEventListener('click', () => {
    const expanded = button?.getAttribute('aria-expanded') === 'true' || false;
    button?.setAttribute('aria-expanded', String(!expanded));
    menu?.classList.toggle('hidden');
});
//le menu se ferme après le clic sur un élément
menu?.addEventListener('click', () => {
    menu?.classList.toggle('hidden');
    button?.setAttribute('aria-expanded', String(false));
});