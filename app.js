const form = document.querySelector('.form')
const btn = document.querySelector('.btn')
const name = document.querySelector('.name')
const name2 = document.querySelector('.name2')
const name3 = document.querySelector('.name3')
const addres = document.querySelector('.addres')
const addres2 = document.querySelector('.addres2')
const addres3 = document.querySelector('.addres3')
const addres4 = document.querySelector('.addres4')
const addres5 = document.querySelector('.addres5')
const addres6 = document.querySelector('.addres6')
const addres7 = document.querySelector('.addres7')
const addres8 = document.querySelector('.addres8')
const date = document.querySelector('.date')
const idNum = document.querySelector('.idNum')
const matirialStutas = document.querySelector('.stutsa')
const relagion = document.querySelector('.relagion')
const mobileNum = document.querySelector('.mobileNum')
const education = document.querySelector('.edu')

form.addEventListener('submit',()=>{
    event.preventDefault();
    nameBox();
})

const nameBox = ()=>{
    if(name.value == ""){
        name.classList.add('redBorder')
    }else{
        name.classList.remove('redBorder')
    }
    if(name2.value == ""){
        name2.classList.add('redBorder')
    }else{
        name2.classList.remove('redBorder')
    }
    if(name3.value == ""){
        name3.classList.add('redBorder')
    }else{
        name3.classList.remove('redBorder')
    }
}