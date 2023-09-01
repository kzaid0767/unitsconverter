/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let meters
let feet
let liters
let gallons
let kilograms
let pounds
const inputEl = document.querySelector('#input-el')
const btn = document.querySelector('#btn')

const lengthPara = document.querySelector('#length-para')
const volumePara = document.querySelector('#volume-para')
const massPara = document.querySelector('#mass-para')

btn.addEventListener('click',handleClick)

function handleClick(){
    const inputData = parseFloat(inputEl.value)
    meters = (inputData/3.281).toFixed(3)
    feet = (inputData * 3.281).toFixed(3)
    lengthPara.textContent = `${inputData} meters = ${feet} feet | ${inputData} feet = ${meters} meters`
    
    liters = (inputData/0.264).toFixed(3)
    gallons = (inputData * 0.264).toFixed(3)
    volumePara.textContent = `${inputData} liters = ${gallons} gallons | ${inputData} gallons = ${liters} liters`
    
    pounds = (inputData * 2.204).toFixed(3)
    kilograms = (inputData / 2.204).toFixed(3)
    massPara.textContent = `${inputData} pounds = ${kilograms} kilos | ${inputData} kilos = ${pounds} pounds`
    
}