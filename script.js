const canvas =document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const memberInput =document.getElementById('member id')
const dateofjoinInput =document.getElementById('date of join')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src="certificate.jpg"
image.onload = function(){
    drawImage()

}

function drawImage(){
    ctx.drawImage(image,0,0,canvas.clientWidth,canvas.height)
    ctx.font = '20px monotype corsiva'
    ctx.fillStyle='yellow'
    ctx.fillText(nameInput.value,150,170)
    
    
}



nameInput.addEventListener('input',function(){
    const name = nameInput.value
    drawImage()

}) 



downloadBtn.addEventListener('click',function(){
    downloadBtn.href=canvas.toDataURL('image/jpg')
    downloadBtn.download= 'Certificate -' + nameInput.value
})

