//Triggers transition upon load, lasting 0.5s
window.onload = () => {
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);
}

