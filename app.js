const checkbox = document.querySelector('#cb');
const svg = document.querySelector('#checkbox');

svg.addEventListener('click', () => {
    if (checkbox.checked) {
        svg.classList.add('reverse');
    } else {
        svg.classList.remove('reverse');
    }
}
);