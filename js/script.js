const bigImg=document.getElementById('img-center')
const smallImgs=document.querySelectorAll('.img-small')

smallImgs.forEach(img=>{
    img.addEventListener('click',function(){
        bigImg.src=img.src
    })
})
