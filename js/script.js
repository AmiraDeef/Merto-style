const bigImg = document.getElementById('img-center')
const smallImgs = document.querySelectorAll('.img-small')
const color = document.getElementById('color')


$("#img-center").elevateZoom({
    zoomType: "inner",
    cursor: "crosshair"
})
smallImgs.forEach(img => {

    img.addEventListener('click', function () {

        bigImg.src = img.src
       $("#img-center").data('elevateZoom')
      .swaptheimage(img.src, img.src)

        color.textContent = img.alt

    })
})



