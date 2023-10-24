const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    } , 500);

}

const loop = setInterval(() => {

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('');

    console.log(marioPosition);

    if (canoPosition =< 120 ) {

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

    }

}, 10);

document.addEventListener('keydomn', jump);