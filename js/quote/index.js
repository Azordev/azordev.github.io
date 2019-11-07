var S1 = document.getElementById('S1')
var S2 = document.getElementById('S2')
var S3 = document.getElementById('S3')
var S4 = document.getElementById('S4')

var C1 = document.getElementById('C1')
var C2 = document.getElementById('C2')
var C3 = document.getElementById('C3')
var C4 = document.getElementById('C4')

var cArrowL = document.getElementById('C_Arrow_left')
var cArrowR = document.getElementById('C_Arrow_right')


S1.addEventListener('mouseover',()=>{
    C1.classList.add('c_effect')
})
S1.addEventListener('mouseleave',()=>{
    C1.classList.remove('c_effect')
})
S2.addEventListener('mouseover',()=>{
    C2.classList.add('c_effect')
})
S2.addEventListener('mouseleave',()=>{
    C2.classList.remove('c_effect')
})
S3.addEventListener('mouseover',()=>{
    C3.classList.add('c_effect')
})
S3.addEventListener('mouseleave',()=>{
    C3.classList.remove('c_effect')
})
S4.addEventListener('mouseover',()=>{
    C4.classList.add('c_effect')
})
S4.addEventListener('mouseleave',()=>{
    C4.classList.remove('c_effect')
})


cArrowL.addEventListener('click', ()=>{
    alert(`Hi cArrowL`)
})
cArrowR.addEventListener('click', ()=>{
    alert(`Hi cArrowR`)
})