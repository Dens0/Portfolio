const container = document.querySelector('.container');
const coordinates = [ 0,33.3333,-33.3333];
let x = 0, y = 0;

const changeSection = e => {
    switch (e.target.dataset.direction) {
        case 'top':
            // if (y !== 33.3333) {
            //     y += 33.3333
            // }
            x = coordinates[0];
            y = coordinates[1];
            break;
        case 'bottom':
            // if (y !== -33.3333) {
            //     y -= 33.3333
            // }
            x = coordinates[0];
            y = coordinates[2];
            break;
        case 'left':
            // if (x !== 33.3333) {
            //     x += 33.3333
            // }
            x = coordinates[1];
            y = coordinates[0];
            break;
        case 'right':
            // if (x !== -33.3333) {
            //     x -= 33.3333
            // }
            x = coordinates[2];
            y = coordinates[0];
            break;
        case 'right-top-corner':
            // if (y !== 33.3333 && x !== -33.3333) {
            //     x -= 33.3333;
            //     y += 33.3333;
            // }
            x = coordinates[2];
            y = coordinates[1];
            break;
        case 'left-top-corner':
            // if (y !== 33.3333 && x !== 33.3333) {
            //     x -= 33.3333;
            //     y += 33.3333;
            // }
            x = coordinates[1];
            y = coordinates[1];
            break;
        case 'right-bottom-corner':
            // if (y !== 33.3333 && x !== 33.3333) {
            //     x -= 33.3333;
            //     y += 33.3333;
            // }
            x = coordinates[2];
            y = coordinates[2];
            break;
        case 'left-bottom-corner':
            // if (y !== 33.3333 && x !== 33.3333) {
            //             //     x -= 33.3333;
            //             //     y += 33.3333;
            //             // }
            x = coordinates[1];
            y = coordinates[2];
            break;
        case 'center':
            // if (y !== 33.3333 && x !== 33.3333) {
            //             //     x -= 33.3333;
            //             //     y += 33.3333;
            //             // }
            x = coordinates[0];
            y = coordinates[0];
            break;


    }

    container.style.transform = `translate(${x}%,${y}%)`
};

const btns = document.querySelectorAll('.text');
btns.forEach(btn => {
    btn.addEventListener('click', changeSection)
});