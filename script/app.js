$(document).ready(function() {
    let $title = $('.js-title');
    let copy   = '.js-copy';

    $title.click(function () {
        $(this).next(copy).slideToggle();
        $(this).parent().siblings().children().next().slideUp();
        return false;
    });
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector(''+blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


/*import {gsap} from './gsap.min';

const cursor = document.querySelector('#cursor');
const follower = document.querySelector('#aura');
const links = document.querySelector('a');

let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

document.addEventListener('DOMContentLoaded', () => {
    function mouseCoords(e) {
        mouseX = e.pageX;
        mouseY = e.pageY
    }

    gsap.to({}, .01, {
        repeat: -1,

        onRepeat: () => {
            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })
            gsap.set(follower, {
                css: {
                    left: posX - 24,
                    top: posY - 24
                }
            })
        }
    })


    const body = document.querySelector('body');

    body.addEventListener('mousemove', e => {
        mouseCoords(e);
        cursor.classList.remove('hidden')
        follower.classList.remove('hidden')
    })


    body.addEventListener('mouseout', () => {
        cursor.classList.add('hidden');
        follower.classList.add('hidden')
    })
})*/


