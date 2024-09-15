
let number=20

let meters = (number/3.281).toFixed(3)
let feet = (number*3.281).toFixed(3)

let liters = (number*3.785).toFixed(3)
let gallons = (number/3.785).toFixed(3)

let kilos = (number/2.205).toFixed(3)
let pounds = (number*2.205).toFixed(3)

let isDarkMode = false
const body = document.getElementById('body')
const inputEl = document.querySelector('#input-el')

const divLength = document.getElementById('divlength')
const divVolume = document.getElementById('divvolume')
const divMass = document.getElementById('divmass')


const hLength = document.getElementById('hlength')
const hvolume = document.getElementById('hvolume')
const hMass = document.getElementById('hmass')

const pMass = document.querySelector('#pmass')
const pLength = document.querySelector('#plength')
const pVolume = document.querySelector('#pvolume')

const mainBtn = document.querySelector('#main-btn')
const modeBtn = document.querySelector('#mode-btn')


mainBtn.addEventListener('click', handleConversion)
modeBtn.addEventListener('click', handleMode)

// changing betweeb light and dark mode
function handleMode(){
    isDarkMode = !isDarkMode
    if (isDarkMode){
        modeBtn.textContent = 'Light Mode'
        body.style.backgroundColor = '#1F2937'
        divLength.style.backgroundColor = '#273549'
        divVolume.style.backgroundColor = '#273549'
        divMass.style.backgroundColor = '#273549'
        hLength.style.color = '#CCC1FF'
        hvolume.style.color = '#CCC1FF'
        hMass.style.color = '#CCC1FF'
        pLength.style.color = '#FFFFFF'
        pVolume.style.color = '#FFFFFF'
        pMass.style.color = '#FFFFFF'
    } else{
        modeBtn.textContent = 'Dark Mode'
        body.style.backgroundColor = '#F4F4F4'
        divLength.style.backgroundColor = '#FFFFFF'
        divVolume.style.backgroundColor = '#FFFFFF'
        divMass.style.backgroundColor = '#FFFFFF'
        hLength.style.color = '#5A537B'
        hvolume.style.color = '#5A537B'
        hMass.style.color = '#5A537B'
        pLength.style.color = '#353535'
        pVolume.style.color = '#353535'
        pMass.style.color = '#353535'
    }
}

// initial display
function handleDipslay(measurement,arr){
    inputEl.value = measurement
    pLength.textContent = `${measurement} meters = ${arr[1]} feet | ${measurement} feet = ${arr[0]} meters`
    pVolume.textContent = `${measurement} = ${arr[3]} gallons | ${measurement} gallons = ${arr[2]} liters`
    pMass.textContent = `${measurement} kilos = ${arr[5]} pounds | ${measurement} pounds = ${arr[4]} kilos`
}


//conversion function
function handleConversion(){
    let measure = Number(inputEl.value)
    meters = (measure/3.281).toFixed(3)
    feet = (measure*3.281).toFixed(3)

    liters = (measure*3.785).toFixed(3)
    gallons = (measure/3.785).toFixed(3)

    kilos = (measure/2.205).toFixed(3)
    pounds = (measure*2.205).toFixed(3)

    handleDipslay(measure, [meters,feet,liters,gallons,kilos,pounds])
}

handleDipslay(number,[meters,feet,liters,gallons,kilos,pounds])