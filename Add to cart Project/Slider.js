const productContainers = [...document.querySelectorAll('.product-container')];

const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let ContainerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += ContainerWidth;

    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= ContainerWidth;

    })
})