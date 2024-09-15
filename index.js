
let number=20
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
const modeBtn = document.querySelector('#mode-btn')


modeBtn.addEventListener('click', handleMode)

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
inputEl.value = number
pLength.textContent = `20 meters = 65.616 feet | 20 feet = 6.096 meters`
pVolume.textContent = `20 liters = 5.284 gallons | 20 gallons = 75.708 liters`
pMass.textContent = `20 meters = 65.616 feet | 20 feet = 6.096 meters`